var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;



app.use(express.static('./client/build'));


//body parser middleware
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies


// app.get('/', function(req, res) {
//   res.sendFile('index.html');
// });



app.listen(port,function () {
  console.log('Running server on ' + port);
});