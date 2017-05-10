import mongoose from 'mongoose';
import { isEmail } from 'validator';

export default mongoose.model('Guest', {
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: 'Emailadres moet ingevuld zijn.',
    validate: {
      isAsync: true,
      validator: isEmail,
      message: '{VALUE} is niet een emailadres. '
    }
  },
  guests: [{
    type: String,
  }],
  timestamp: {
    type: Date,
    default: () => new Date(),
  }
});