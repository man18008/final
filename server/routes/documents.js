var express = require('express');
var router = express.Router();

// Implement the calendars Routing File
const sequenceGenerator = require('./sequenceGenerator');
const calendar = require('../models/calendar');

// The router.get() method is responsible for getting the list of calendars in the calendars collection in the database
router.get('/', (req, res, next) => {
  calendar.find()
    .then(calendars => {
      res.status(200).json(calendars);
    })
    .catch(error => {
      res.status(500).json({
        message: 'An error occurred',
        error: error
      });
    });
});

// The router.post() method is responsible for adding a new calendar to the collection in the database.
router.post('/', (req, res, next) => {
  const maxcalendarId = sequenceGenerator.nextId("calendars");

  const calendar = new calendar({
    id: maxcalendarId,
    name: req.body.name,
    description: req.body.description,
    url: req.body.url
  });

  calendar.save()
    .then(createdcalendar => {
      res.status(201).json({
        message: 'calendar added successfully',
        calendar: createdcalendar
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'An error occurred',
        error: error
      });
    });
});

// The router.put() method is responsible for updating an existing calendar in the database.
router.put('/:id', (req, res, next) => {
  calendar.findOne({
      id: req.params.id
    })
    .then(calendar => {
      calendar.name = req.body.name;
      calendar.description = req.body.description;
      calendar.url = req.body.url;

      calendar.updateOne({
          id: req.params.id
        }, calendar)
        .then(result => {
          res.status(204).json({
            message: 'calendar updated successfully'
          })
        })
        .catch(error => {
          res.status(500).json({
            message: 'An error occurred',
            error: error
          });
        });
    })
    .catch(error => {
      res.status(500).json({
        message: 'calendar not found.',
        error: {
          calendar: 'calendar not found'
        }
      });
    });
});

// The router.delete() method is responsible for deleting an existing calendar in the database.
router.delete("/:id", (req, res, next) => {
  calendar.findOne({
      id: req.params.id
    })
    .then(calendar => {
      calendar.deleteOne({
          id: req.params.id
        })
        .then(result => {
          res.status(204).json({
            message: "calendar deleted successfully"
          });
        })
        .catch(error => {
          res.status(500).json({
            message: 'An error occurred',
            error: error
          });
        })
    })
    .catch(error => {
      res.status(500).json({
        message: 'calendar not found.',
        error: {
          calendar: 'calendar not found'
        }
      });
    });
});

module.exports = router;

// https://byui.instructure.com/courses/164460/pages/w11-assignment-instructions
