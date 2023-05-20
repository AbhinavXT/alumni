const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Feed = mongoose.model('FeedPost', feedSchema);

export default Feed;