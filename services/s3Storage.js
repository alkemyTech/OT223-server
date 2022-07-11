// TODO: fix below lint rules
/* eslint-disable no-await-in-loop */
/* eslint-disable no-useless-catch */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
const S3 = require('aws-sdk/clients/s3');
const { v4 } = require('uuid');

const config = require('../config/config');
const messages = require('../constant/messages.json');

const {
  accessKeyId, secretAccessKey, region, bucketName,
} = config.development;

const urlRegex = /^(https?):\/\/[^\s$.?#].[^\s]*$/;

const getKeyFromLocationURL = (url) => {
  if (!urlRegex.test(url)) { return null; }

  const objectURL = new URL(url);
  const fileKey = objectURL.pathname.slice(1);
  return fileKey;
};

// Validate if files provided are correct
const filesAreCorrect = (files) => {
  const keys = Object.keys(files);
  const neededKeys = ['name', 'data', 'mimetype'];
  if (!keys.length) { return null; }
  for (const key of keys) {
    for (const neededKey of neededKeys) {
      if (!files[key][neededKey]) return null;
    }
  }
  return true;
};

const client = new S3({
  accessKeyId,
  secretAccessKey,
  region,
});

/**
 * Upload files to AWS S3 bucket
 * @param {{}} files Files to be uploaded from request.files
 * @returns {Promise<string[]>} A new promise, list of URLs of files uploaded
 */
const uploadFiles = async (files = {}) => {
  const validation = filesAreCorrect(files);
  if (!validation) throw new Error(messages.errors.invalidFiles);
  const URLs = {};

  for (const key in files) {
    if (Object.hasOwnProperty.call(files, key)) {
      const file = files[key];
      const [name, extension] = file.name.split('.');

      const params = {
        Bucket: bucketName,
        Key: `public/${v4()}.${extension}`,
        Body: file.data,
        ContentType: file.mimetype,
      };

      try {
        const data = await client.upload(params).promise();
        URLs[key] = data.Location;
        return URLs;
      } catch (error) {
        throw error;
      }
    }
  }
};

/**
 * Get file data from its location URL
 * @param {string} location File location URL
 * @returns {Promise<{}>} New promise with file data
 */
const getFileFromURL = async (location) => {
  const key = getKeyFromLocationURL(location);
  if (!key) { throw new Error(messages.errors.invalidURL); }
  const params = {
    Bucket: bucketName,
    Key: key,
  };
  try {
    const data = await client.getObject(params).promise();
    return data;
  } catch (error) {
    if (error.code === 'NoSuchKey') { throw new Error(messages.errors.noExistingURL); }
  }
};

/**
 * Delete a file in storage from its location URL
 * @param {string} location File location URL
 * @returns {Promise<{}>} New promise
 */
const deleteFileFromURL = async (location) => {
  const key = getKeyFromLocationURL(location);
  if (!key) { throw new Error('Invalid URL'); }

  const params = {
    Bucket: bucketName,
    Key: key,
  };

  try {
    const data = await client.deleteObject(params).promise();
    return data;
  } catch (error) {
    if (error.code === 'NoSuchKey') { throw new Error(messages.errors.noExistingURL); }
  }
};

module.exports = { uploadFiles, getFileFromURL, deleteFileFromURL };
