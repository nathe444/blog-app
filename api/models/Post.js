const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique:true
  },
  categories: {
    type: Array,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type:String,
    required:false
  },
  username: {
    type: String,
    required: true
  }
}, {timestamps: true});

module.exports = mongoose.model('Post', PostSchema);