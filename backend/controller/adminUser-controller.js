const AdminUser = require("../models/AdminUser");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY;

exports.singUp = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array(),
    });
  }

  const { name, email, password, phoneNumber, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({
      message: "Password does not match",
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    const adminUser = new AdminUser({
      name,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    await adminUser.save();

    return res.status(200).json({
      message: "User crated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.SignIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await AdminUser.findOne({ email: email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Incorrect password",
      });
    }

    const token = jwt.sign(
      {
        email: user.email,
        userId: user._id.toString(),
      },
      secretKey,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "SignIn successful",
      token: token,
      userId: user._id.toString(),
      expiresIn: 3600,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
