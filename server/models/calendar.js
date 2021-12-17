const mongoose = require('mongoose');

const calendarSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  url: {
    type: String,
    required: true
  },
  children: {
    type: [{
      id: String,
      name: String,
      url: String
    }]
  }
});

module.exports = mongoose.model('calendar', calendarSchema);

//Notes:
//The children property in the calendars collection is an array of child calendars that are related to the calendar.
