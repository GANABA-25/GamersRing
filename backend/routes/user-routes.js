const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const userController = require("../controller/user-controller");

router.get("/gameComments/:gameId", userController.getComments);

router.post(
  "/comment/:gameId",
  [
    body("comment")
      .trim()
      .isString()
      .isLength({ min: 1 })
      .withMessage("Comment message is required"),
    body("userName")
      .trim()
      .isString()
      .isLength({ min: 1 })
      .withMessage("UserName is required"),
    body("userEmail").trim().isEmail().withMessage("userEmail is required"),
  ],
  userController.postComment
);

router.post("/replyComment/:id", userController.replyComments);

module.exports = router;
