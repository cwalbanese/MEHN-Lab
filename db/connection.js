const mongoose = require('mongoose');
const db = mongoose.connection;

const mongoURI = 'mongodb://localhost:27017/posts';

mongoose.connect(
  mongoURI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  () => {
    console.log('connection with MongoDB is established');
  }
);

db.on('error', err => console.log(err.message + ' is MongoDB not running?'));
db.on('connected', () => console.log('MongoDB connected on: ', mongoURI));
db.on('disconnected', () => console.log('MongoDB disconnected'));

module.exports = mongoose;
