var express = require('express');
var router = express.Router();

const sequenceGenerator = require('./sequenceGenerator');
const Message = require('../models/message');

router.get('/', (req, res, next) => {
  Message.find()
    .then(habit => {
      res.status(200).json(habit);
    })
    .catch(error => {
      res.status(500).json({
        message: 'An error occurred',
        error: error
      });
    });
});

router.post('/', (req, res, next) => {
  const maxMessageId = sequenceGenerator.nextId("habit");
  console.log('maxMessageId', maxMessageId)
  const message = new Message({
    id: maxMessageId,
    subject: req.body.subject,
    msgText: req.body.msgText,
    sender: '101' // TODO: Hard-coded value
  });

  message.save()
    .then(createdMessage => {
      res.status(201).json({
        message: 'Message added successfully',
        message: createdMessage
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'An error occurred',
        error: error
      });
    });
});

router.put('/:id', (req, res, next) => {
  Message.findOne({
      id: req.params.id
    })
    .then(message => {
      message.subject = req.body.subject;
      message.msgText = req.body.msgText;
      message.sender = '101'; // TODO: Hard-coded value

      Message.updateOne({
          id: req.params.id
        }, message)
        .then(result => {
          res.status(204).json({
            message: 'Message updated successfully'
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
        message: 'Message not found.',
        error: {
          message: 'Message not found'
        }
      });
    });
});

router.delete("/:id", (req, res, next) => {
  Message.findOne({
      id: req.params.id
    })
    .then(message => {
      Message.deleteOne({
          id: req.params.id
        })
        .then(result => {
          res.status(204).json({
            message: "Message deleted successfully"
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
        message: 'Message not found.',
        error: {
          message: 'Message not found'
        }
      });
    });
});

module.exports = router;

// https://byui.instructure.com/courses/164460/pages/w11-assignment-instructions
