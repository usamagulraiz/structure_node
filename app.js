var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// body parser ek middleware ki tarah hy ye req mein say body ko nikal k hmein req.body mein provide krta hy
// ham body ko kisi bh tarah [arase kr skty like json/url-encoded/formdata etc
// url encoded is like key value pairs jo url ki tarah encoded hoty like below
// key1=value1&key2=value2&key3=value3

const bodyParser = require('body-parser')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors = require('cors')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type', 'Authorization', 'Access-Control-Allow-Headers'
  ],

};

// api calls ko log krwany k lie,dev/short/tiny/common/combined
//  dev ik string hy jinka mtlb hy coloured format mein dikhaye ga iski op bh options hoty hein
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// // 
// The express.static function in Express is used to serve static files, such as HTML, CSS, JavaScript,
//   images, and other assets, from a directory on the server.It sets up a middleware that handles incoming
//  requests for static files and sends the corresponding file back to the client.
// __dirname is a special Node.js variable that represents the current directory of the file in which it is used.
// path.join is a function provided by the path module in Node.js, used for joining path segments into a complete path.
// 'public' is the name of the directory from which the static files will be served.
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOpts))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.listen('4000', () => console.log("Listening to " + '4000'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {

  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
