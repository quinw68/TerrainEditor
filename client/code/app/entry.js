// This file automatically gets called first by SocketStream and must always exist

// Make 'ss' available to all modules and the browser console
window.ss = require('socketstream');
  
var app = angular.module('terrainEditor', []);
require('/controllers/HomeController');
require('/controllers/PanelController');
require('/services/RenderService');
require('/directives/scene');
ss.server.on('disconnect', function(){
  console.log('Connection down :-(');
});

ss.server.on('reconnect', function(){
  console.log('Connection back up :-)');
});

ss.server.on('ready', function(){

  // Wait for the DOM to finish loading
  jQuery(function(){
    // Load app
  });

});
