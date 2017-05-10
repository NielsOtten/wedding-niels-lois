import mongoose from 'mongoose';

export default mongoose.model('Song', {
  spotifyId: {
    type: String,
    required: 'SpotifyID moet worden meegegeven. Waarom probeer je het stuk te maken, dat vind ik niet leuk :(',
  },
  name: {
    type: String,
    required: 'Name moet worden meegegeven.'
  },
  voting: {
    type: Number,
    default: 0
  },
  timestamp: {
    type: Date,
    default: () => new Date(),
  }
});