const express = require('express');
const app = express();
const questionsController = require('./controllers/questions');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
const path = require('path');
app.use(express.static(path.join(__dirname, '/public')));

app.use('/posts', questionsController);

app.listen(8080, () => {
  console.log('actively listening on port 8080');
});
