const mongoose = require('mongoose');

const UserSessionSchema = new mongoose.Schema({
  userID: {
    type: Number,
    default: -1
  },
  timeStamp: {
    type: Date,
    default: Date.now()
  },
  isDeleteed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('UserSession', UserSessionSchema);
