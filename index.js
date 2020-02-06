const express = require('express');
const app = express();
const questionsController = require('./controllers/questions');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');

app.use('/posts', questionsController);

app.listen(8080, () => {
  console.log('actively listening on port 8080');
});
