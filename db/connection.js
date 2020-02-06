const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/posts', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false // <-- Add this
});

module.exports = mongoose;
