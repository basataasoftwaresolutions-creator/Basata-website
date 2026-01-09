const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const {
  register,
  getAllUser,
  login,
  checkEmail,
  getUserbyemail,
  getMe,
} = require("../Controllers/userController");
const auth = require("../middlewares/auth");
const {
  ValidationErrors,
  validateregister,
  validateLogin,
} = require("../validation/validate");

router.post("/register", validateregister, ValidationErrors, register);

router.post('/check-email', checkEmail);

router.get('/by-email', getUserbyemail)

router.get( "/", getAllUser );

router.get("/me", auth(), getMe);

router.post("/login", validateLogin , ValidationErrors, login);


module.exports = router;
