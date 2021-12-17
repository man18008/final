var Sequence = require('../models/sequence');

var maxcalendarId;
var maxtodoId;
var maxhabitId;
var sequenceId = null;

function SequenceGenerator() {

  Sequence.findOne()
    .exec(function(err, sequence) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }

      sequenceId = sequence._id;
      maxcalendarId = sequence.maxcalendarId;
      maxtodoId = sequence.maxtodoId;
      maxhabitId = sequence.maxhabitId;
    });
}

SequenceGenerator.prototype.nextId = function(collectionType) {

  var updateObject = {};
  var nextId;

  switch (collectionType) {
    case 'calendars':
      maxcalendarId++;
      updateObject = {maxcalendarId: maxcalendarId};
      nextId = maxcalendarId;
      break;
    case 'habit':
      maxtodoId++;
      updateObject = {maxtodoId: maxtodoId};
      nextId = maxtodoId;
      break;
    case 'habits':
      maxhabitId++;
      updateObject = {maxhabitId: maxhabitId};
      nextId = maxhabitId;
      break;
    default:
      return -1;
  }

  Sequence.update({_id: sequenceId}, {$set: updateObject},
    function(err) {
      if (err) {
        console.log("nextId error = " + err);
        return null
      }
    });

  return nextId;
}

module.exports = new SequenceGenerator();

// See Below Link for code
// https://byui.instructure.com/courses/164460/pages/w11-assignment-instructions
