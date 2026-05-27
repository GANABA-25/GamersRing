const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AdminUserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  games: [
    {
      type: Schema.Types.ObjectId,
      ref: "Games",
    },
  ],
});

module.exports = mongoose.model("AdminUsers", AdminUserSchema);
