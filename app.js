// My SocketStream 0.3 app

var http = require('http'),
    ss = require('socketstream');
//     mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1/terrain');
// db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(callback){
//   console.log('db conntected');
// });

// Define a single-page client called 'main'
ss.client.define('main', {
  view: 'app.html',
  css:  [
    'libs/reset.css', 
    'libs/bootstrap/bootstrap.min.css', 
    'libs/bootstrap/bootstrap-theme.min.css'
    ],
  code: [
  	'libs/jquery.min.js', 
  	'libs/three/three.min.js',
    'libs/bootstrap/bootstrap.js',
    'libs/angular/angular.js',
    'app'],
  tmpl: '*'
});

// Serve this client on the root URL
ss.http.route('/', function(req, res){
  res.serveClient('main');
});

// Code Formatters
//ss.client.formatters.add(require('ss-stylus'));

// Use server-side compiled Hogan (Mustache) templates. Others engines available
ss.client.templateEngine.use('angular');

// Minimize and pack assets if you type: SS_ENV=production node app.js
if (ss.env === 'production') ss.client.packAssets();

// Start web server
var server = http.Server(ss.http.middleware);
server.listen(3000);

// Start SocketStream
ss.start(server);