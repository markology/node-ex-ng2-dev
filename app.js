var path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  compress = require('compression'),
  methodOverride = require('method-override'),
  bodyParser = require('body-parser'),
  express = require('express'),
  session = require('express-session'),
  compression = require('compression'),
  http = require('http'),
  app = express();

app.use(express.static(path.join(__dirname, '/')));

app.use(express.static(path.join(__dirname, '/node_modules/')));

var clients = {};

var server = http.createServer(app);
var io = require('socket.io')(server);

require('./config/app.socket.js')(io);
server.listen(8001);
io.set("origins", "*:*");

var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

app.set('views', __dirname + '/app/views');
app.set('view engine', 'ejs');

app.use(compression()); //use compression 
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ resave: true, saveUninitialized: true, secret: 'SOMERANDOMSECRETHERE', cookie: { maxAge: 999999999999999999 } }));

app.use(methodOverride());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var homeroutes = require('./app/routes/home')();
var apiroutes = require('./app/routes/api')();

app.use(express.static(__dirname + '/public/stylesheets'));
app.use('/images', express.static(__dirname + '/public/images/'));
app.use('/img', express.static(__dirname + '/public/img/'));
app.use('/uploads/', express.static(__dirname + '/public/uploads/'));
app.use('/mp3/', express.static(__dirname + '/public/mp3/'));
app.use('/fonts/', express.static(__dirname + '/public/fonts/'));

app.use(express.static(__dirname + '/public/javascripts'));
app.use('/', homeroutes);

app.use('/api/v1', apiroutes);
app.use('/home', homeroutes);
app.use('/404', homeroutes);


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.redirect('/404')
  });
}


app.use(function(err, req, res, next) {
  res.status(err.status || 500 || 404).send({ 'status': 'true' });
});

app.listen(3001, function() {

});
