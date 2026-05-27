const UserComment = require("../models/UserComments");
const Games = require("../models/Games");
const { validationResult } = require("express-validator");

exports.getComments = async (req, res, next) => {
  const gameId = req.params.gameId;

  try {
    const fetchedComments = await UserComment.find({ gameId });

    if (!fetchedComments || fetchedComments.length === 0) {
      return res.status(404).json({
        message: "No comments found for the specified game.",
      });
    }

    return res.status(200).json({
      message: "Fetched comments successfully.",
      comments: fetchedComments,
    });
  } catch (error) {
    next(error);
  }
};

exports.postComment = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array(),
    });
  }
  const gameId = req.params.gameId;
  const { comment, userName, userEmail } = req.body;

  try {
    const gameExists = await Games.findById(gameId);

    if (!gameExists) {
      return res.status(404).json({
        message: "Cannot post comment: The specified game was not found.",
      });
    }

    const postComment = new UserComment({
      comment,
      userName,
      userEmail,
      gameId: gameId,
    });

    const savedComment = await postComment.save();

    return res.status(201).json({
      message: "Comment posted successfully.",
      comment: savedComment,
    });
  } catch (error) {
    next(error);
  }
};

exports.replyComments = async (req, res, next) => {
  const commentId = req.params.id;
  const { replyMessage, replyUserName, replyUserEmail } = req.body;

  try {
    const commentExists = await UserComment.findById(commentId);

    if (!commentExists) {
      return res.status(404).json({
        message:
          "Cannot reply to comment: The specified comment was not found.",
      });
    }

    const reply = {
      replyMessage,
      replyUserName,
      replyUserEmail,
      createdAt: new Date(),
    };

    const updatedComment = await UserComment.findByIdAndUpdate(
      commentId,
      { $push: { replies: reply } },
      { new: true }
    );

    return res.status(200).json({
      message: "Reply added successfully.",
      comment: updatedComment,
    });
  } catch (error) {
    next(error);
  }
};
