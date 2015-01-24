var mod = 
angular.module('TerrainEditor');
alert('instantiated');
mod.factory('RenderService', ['$scope', function($scope){
	// return {
	// alert('element added');
	// var scene = new THREE.Scene();
	// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

	// var renderer = new THREE.WebGLRenderer();
	// renderer.setSize( window.innerWidth, window.innerHeight );
	// element.appendChild( renderer.domElement );
	// alert('element added');
	// }
}]);
mod.controller('HomeCtrl').directive('scene', ['RenderService', function(RenderService){
	alert('directive');
	return function(scope, element, attr){

		alert('test');
	};
}]);