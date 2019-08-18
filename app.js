var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
const port = require('./config/setting.json').port;
// var login = require('./login');

// var users = require('./routes/user');
var accounts = require('./routes/account');
var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// app.use('/login', login);
// app.use('/users', users);
app.use('/accounts', accounts);

// the __dirname is the current directory from where the script is running
// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, 'pattern-adventure/build')));

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'pattern-adventure/build', 'index.html'));
// });

app.use(express.static(path.join(__dirname, 'pattern-in-angular/dist/pattern-in-angular')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'pattern-in-angular/dist/pattern-in-angular/index.html'));
});

app.listen(port, () => console.log("app listening on port: ", port));


module.exports = app;
