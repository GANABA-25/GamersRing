const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    image1: {
      type: String,
      required: true,
    },
    image2: {
      type: String,
      required: true,
    },
    image3: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    downloadDescription: {
      type: String,
      required: true,
    },
    minimumSystemRequirement: {
      type: String,
      required: true,
    },
    recommendedSystemRequirement: {
      type: String,
      required: true,
    },
    platform: {
      type: String,
      required: true,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Games = mongoose.model("Games", gameSchema, "AllGames");

module.exports = Games;
