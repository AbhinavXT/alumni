import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const requestSchema = new mongoose.Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  type: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: ''
  },
  state: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true 
});

const Request = mongoose.model('Request', requestSchema);

export default Request