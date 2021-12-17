const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  subject: {
    type: String
  },
  msgText: {
    type: String,
    required: true
  },
  sender: {
    type: mongoose.Schema.Types.String,
    ref: 'todo'
  }
});

module.exports = mongoose.model('todo', todoSchema);

//See link bellow code. The other model .js files are based on this.
//https://byui.instructure.com/courses/164460/pages/w11-assignment-instructions
