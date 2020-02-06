const mongoose = require('../db/connection');

const QuestionSchema = new mongoose.Schema({
  title: String,
  description: String,
  answers: Array,
  votes: Number
});

const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;
