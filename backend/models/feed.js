import mongoose from 'mongoose'

const feedSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now(),
    required: true
  }
});

const Feed = mongoose.model('Feed', feedSchema);

export default Feed;