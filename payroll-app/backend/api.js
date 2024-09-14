const express = require('express');
const app = express();
const authController = require('./authController');

app.post('/api/login', authController.login);
app.post('/api/signup', authController.signup);

app.listen(8080, () => {
  console.log('API listening on port 8080');
});