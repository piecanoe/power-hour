const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    required: true,
  },
  hours: {
    type: String,
    required: true,
  },
  outlet: {
    type: Boolean,
    required: true,
    default: false,
  },
  wifi: {
    type: Boolean,
    required: true,
    default: false,
  },
  bathroom: {
    type: Boolean,
    required: true,
    default: false,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
