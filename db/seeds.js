const Question = require('../models/Question');
const mongoose = require('./connection');

const db = mongoose.connection;

const manyQuestions = [
  {
    title: 'How to log something in the console?',
    description: `I'm having trouble using Javascript`,
    answers: ['Is this guy serious?', 'Use console.log fool'],
    votes: -10
  },
  {
    title: 'Give me reasons why I should become a coder?',
    description: `I'm interested in a career change`,
    answers: [
      'If you like high blood pressure and stress',
      'If you like to make it rain'
    ],
    votes: 0
  },
  {
    title: 'How do I tie my tie?',
    description: `I'm interested in dressing better`,
    answers: ['Use a for loop', 'Wrong website buddy'],
    votes: -2
  }
];

Question.insertMany(manyQuestions, (error, question) => {
  if (error) {
    console.log(error);
  } else {
    console.log(question);
  }
  db.close();
});
