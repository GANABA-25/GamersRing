const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const AdminUserController = require("../controller/adminUser-controller");

router.post(
  "/createUser",
  [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").trim().isEmail().withMessage("email is required"),
    body("phoneNumber")
      .trim()
      .isNumeric()
      .isLength({ max: 10 })
      .withMessage("Phone Number Length should be ten"),
    body("password")
      .trim()
      .isLength({ min: 7 })
      .withMessage("Password Length should More than Seven")
      .matches(/[A-Z]/)
      .withMessage("Password must contain at least one uppercase letter")
      .matches(/[a-z]/)
      .withMessage("Password must contain at least one lowercase letter")
      .matches(/[0-9]/)
      .withMessage("Password must contain at least one number")
      .matches(/[\W_]/)
      .withMessage("Password must contain at least one special character"),
    body("confirmPassword")
      .trim()
      .isLength({ min: 7 })
      .withMessage("Password Length should More than Seven")
      .matches(/[A-Z]/)
      .withMessage("Password must contain at least one uppercase letter")
      .matches(/[a-z]/)
      .withMessage("Password must contain at least one lowercase letter")
      .matches(/[0-9]/)
      .withMessage("Password must contain at least one number")
      .matches(/[\W_]/)
      .withMessage("Password must contain at least one special character"),
  ],

  AdminUserController.singUp
);

router.post("/singIn", AdminUserController.SignIn);

module.exports = router;
