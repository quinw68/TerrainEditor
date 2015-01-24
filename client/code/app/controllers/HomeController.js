
var app = angular.module('TerrainEditor');
app.controller('HomeCtrl', ['$scope', function($scope){
	$scope.Author = "Quinton Williams";
	$scope.ShowScene = function(){
		require('/services/RenderService');
	}
	
}]);