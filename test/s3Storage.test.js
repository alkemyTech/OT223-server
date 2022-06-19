require('dotenv').config()
const { getFileFromURL, deleteFileFromURL, uploadFiles } = require('../services/s3Storage')

describe('Testing s3Storage service', () => {
  
  let fileLocation = ''

  describe('uploadFiles tests', () => {
    const fileData = Buffer.from('This is testing text', 'utf-8');
    const files = {
      file: {
        name: 'testfile.txt',
        data: fileData,
        mimetype: 'text/plain',
      },
    };
  
    
    test('Uploading file returns object containing location url', async () => {
      const uploads = await uploadFiles(files)
      fileLocation = uploads.file
      expect(uploads).toEqual(
        expect.objectContaining({
          file: expect.stringContaining('http'),
        })
        );
      })
      
      test('Sending wrong files throws error', async () => {
        delete files.file.data;
        await expect(() => uploadFiles(files)).rejects.toThrow(
          'Provide valid files'
        );
      })
    })
  
    describe('Testing getFilesFromURL', () => {
      
      test('Fails to send not well formed URL', async () => {
        await expect(() => getFileFromURL('some wrong url 123')).rejects.toThrow(
          'Invalid URL'
        );
        await expect(() => getFileFromURL('https://amazon.com/')).rejects.toThrow(
          'Invalid URL'
        );
      })
      
      test('sending unexistant file throws error', async () =>  {
        await expect(() =>
          getFileFromURL('https://amazon.com/public/unexistant')
        ).rejects.toThrow('URL provided does not exist');
      })
      
      test('returns existing file data', async () => {
        const data = await getFileFromURL(fileLocation)
        expect(data).toEqual(expect.objectContaining({ Body: expect.anything() }))
      })
    })

    describe('Testing deleteFileFromURL', () => {
      test('Fails to send not well formed URL', async () => {
        await expect(() =>
          deleteFileFromURL('some wrong url 123')
        ).rejects.toThrow('Invalid URL');
        await expect(() =>
          deleteFileFromURL('https://amazon.com/')
        ).rejects.toThrow('Invalid URL');
      });


      test('deletes file', async () => {
        const data = await deleteFileFromURL(fileLocation);
        expect(data).toEqual({});
      });
    });
  


})
