var cookieParser = require('cookie-parser');
var createError = require('http-errors');
var express = require('express');
var indexRouter = require('./routes/index');
var logger = require('morgan');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require("mongoose");
var path = require('path');
var passport = require('passport');
var sassMiddleware = require('node-sass-middleware');
var session = require('express-session');
var usersRouter = require('./routes/users');
// ======== Requires go above this line
//Get the default connection
var mongoDB = 'mongodb://127.0.0.1/gamersocialmedia';
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
// Get Mongoose to use the global promise library
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log("connected to Database");
});
// set up mongoose and mongo db connection

var app = express();
//Bind connection to error event (to get notification of connection errors)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
// User defined routes goes here ====
app.use('/', indexRouter);
app.use('/users', usersRouter);
// End of user defined routes
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// set up session and passport
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.use(express.static(path.join(__dirname, 'public')));

// passport config
var User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




module.exports = app;
