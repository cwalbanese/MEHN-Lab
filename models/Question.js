const mongoose = require('../db/connection');

const QuestionSchema = new mongoose.Schema({
  question: String,
  answers: Array,
  votes: Number
});

const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;
