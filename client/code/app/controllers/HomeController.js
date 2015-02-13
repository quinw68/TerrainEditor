
var app = angular.module('terrainEditor');
app.controller('HomeController', ['$scope', function($scope){
	$scope.Author = "Quinton Williams";
	$scope.TopBar = {
		Height: 40
	}
	$scope.ShowScene = function(){
		require('/services/RenderService');
	}
	
}]);