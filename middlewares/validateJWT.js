const jwt = require("jsonwebtoken");

const validateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "No se ha proporcionado ningún token, por favor, inicie sesión",
    });
  }

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.data = data;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Token invalido, por favor, inicie sesión nuevamente",
    });
  }
  next();
};

module.exports = validateJWT;
