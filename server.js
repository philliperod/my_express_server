const express = require('express');
const app = express();

app.get('/', function(request, response) {
  response.send('<h1>Hello, World<h1>');
});

app.get('/contact', function(request, response) {
  response.send('Contact me at phillipe@email.com');
});

app.get('/about', function(request, response) {
  response.send('Phillipe is a full stack developer');
});

app.get('/hobbies', function(request, response) {
  response.send('<ul><li>Coding<li>Listening to Music<li>Working Out<ul>');
});

app.listen(3000, function() {
  console.log('Listening at port 3000');
});
