const mongoose = require("mongoose");

// schema describes the way your data looks
const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  date: {
    type: Date,
    deafult: Date.now,
  },
});

// model의 이름은 Posts고 Schema는 PostSchema다.
module.exports = mongoose.model("Posts", PostSchema);
