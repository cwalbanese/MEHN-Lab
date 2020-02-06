const express = require('express');
const Question = require('../models/Question');

const router = express.Router();

router.get('/', (req, res) => {
  Question.find({})
    .then(questions => {
      res.render('index', { questions });
    })
    .catch(console.error);
});

router.get('/:id', (req, res) => {
  Question.find({ _id: req.params.id })
    .then(question => {
      res.render('post', { question });
    })
    .catch(console.error);
});

router.post('/', (req, res) => {
  Question.create({
    title: req.body.title,
    description: req.body.description
  }).then(created => {
    res.redirect('/posts');
  });
});

module.exports = router;
