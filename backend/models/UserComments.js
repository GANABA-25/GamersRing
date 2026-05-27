const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userCommentsSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },

    userName: {
      type: String,
      require: true,
    },

    userEmail: {
      type: String,
      require: true,
    },

    gameId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    replies: [
      {
        replyMessage: {
          type: String,
          required: true,
        },
        replyUserName: {
          type: String,
          required: true,
        },
        replyUserEmail: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

const userComments = mongoose.model(
  "userComments",
  userCommentsSchema,
  "userComments"
);

module.exports = userComments;
