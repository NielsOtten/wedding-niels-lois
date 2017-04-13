import mongoose from 'mongoose';
import { isEmail } from 'validator';

export default mongoose.model('Guest', {
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: 'Email address is required',
    validate: {
      isAsync: true,
      validator: isEmail,
      message: '{VALUE} is not a valid email!'
    }
  },
  total: {
    type: Number,
    required: 'Total is required'
  },
  timestamp: {
    type: Date,
    default: () => new Date(),
  }
});