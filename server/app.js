const express = require('express');
const bodyParser = require('body-parser');
const isPalindrome = require('./utils');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/ispalindrome', (req, res) => {
  const sentence = req.body.sentence;

  if (sentence && isPalindrome(sentence)) {
    res.status(200).send("It's a palindrome!");
  } else {
    res.status(400).send("It's not a palindrome!");
  }
});

app.get('/', (req, res) => {
  res.send("The server is ready!");
});

app.listen(4000, () => {
  console.log('Server listening on port 4000!');
});
