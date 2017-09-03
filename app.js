var express = require('express');
var app = express();

app.use(express.static('js-todo'))

app.listen(8080);
console.log('Server listening');
