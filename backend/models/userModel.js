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
  password: {
    type: String,
    required: true
  },
  linkedin: {
    type: String,
    default: ''
  },
  mobile: {
    type: Number,
    default: ''
  },
  basicInfo: {
    type: String,
    default: ''
  },
  avatar: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  data: {
    type: Date,
    default: Date.now
  }
}, );

const User = mongoose.model('User', userSchema);

export default User