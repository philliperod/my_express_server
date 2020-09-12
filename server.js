const express = require('express');
const app = express();

app.get('/', function(request, response) {
  response.send('Here I am');
});

app.listen(3000, function() {
  console.log('Listening at port 3000');
});
