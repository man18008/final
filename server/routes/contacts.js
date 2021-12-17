var express = require('express');
var router = express.Router();

const sequenceGenerator = require('./sequenceGenerator');
const todo = require('../models/todo');

router.get('/', (req, res, next) => {
  todo.find()
    .populate('group')
    .then(todos => {
      res.status(200).json(todos);
    })
    .catch(error => {
      res.status(500).json({
        message: 'An error occurred',
        error: error
      });
    });
});

router.post('/', (req, res, next) => {
  const maxtodoId = sequenceGenerator.nextId("todos");

  const todo = new todo({
    id: maxtodoId,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    imageUrl: req.body.imageUrl
  });

  todo.save()
    .then(createdtodo => {
      res.status(201).json({
        message: 'todo added successfully',
        todo: createdtodo
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
  todo.findOne({
      id: req.params.id
    })
    .then(todo => {
      todo.name = req.body.name;
      todo.email = req.body.email;
      todo.phone = req.body.phone;
      todo.imageUrl = req.body.imageUrl;

      todo.updateOne({
          id: req.params.id
        }, todo)
        .then(result => {
          res.status(204).json({
            message: 'todo updated successfully'
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
        message: 'todo not found.',
        error: {
          todo: 'todo not found'
        }
      });
    });
});

router.delete("/:id", (req, res, next) => {
  todo.findOne({
      id: req.params.id
    })
    .then(todo => {
      todo.deleteOne({
          id: req.params.id
        })
        .then(result => {
          res.status(204).json({
            message: "todo deleted successfully"
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
        message: 'todo not found.',
        error: {
          todo: 'todo not found'
        }
      });
    });
});

module.exports = router;

// https://byui.instructure.com/courses/164460/pages/w11-assignment-instructions
