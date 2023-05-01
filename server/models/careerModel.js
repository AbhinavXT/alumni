const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  post: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  deadline: {
    type: Date,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  numApplications: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true // adds createdAt and updatedAt fields
});

const Career = mongoose.model('Career', careerSchema);

export default Career