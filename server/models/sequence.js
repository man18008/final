const mongoose = require('mongoose');

const sequenceSchema = mongoose.Schema({
  maxcalendarId: {
    type: String,
    required: true
  },
  maxtodoId: {
    type: String,
    required: true
  },
  maxhabitId: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Sequence', sequenceSchema);
