const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  linkedin: {
    type: String,
    default: ''
  },
  education: {
    type: String,
    default: ''
  },
  workExperience: {
    type: String,
    default: ''
  },
  skills: {
    type: [String],
    default: []
  },
  basicInfo: {
    type: String,
    default: ''
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
}, {
  timestamps: true // adds createdAt and updatedAt fields
});

const User = mongoose.model('User', userSchema);

export default User