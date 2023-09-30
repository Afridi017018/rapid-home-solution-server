const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../secret");

const authMiddleware = (req, res, next) => {
  try {
    
    const {Authorization} = req.headers;
    const token = authorization.split(" ")[1];
    const decryptedToken = jwt.verify(token, jwtSecret);
    req.userId = decryptedToken.userId;
    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = authMiddleware;