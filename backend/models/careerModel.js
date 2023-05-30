import mongoose from 'mongoose'

const careerSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true
  },
  title: {
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
    type: String,
    default: "Negotiable"
  },
  type: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true,
  }
});

const Career = mongoose.model('Career', careerSchema);

export default Career