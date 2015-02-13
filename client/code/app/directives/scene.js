(function(){
angular.module('terrainEditor').directive('teScene', ['renderer', function(renderer) {

	function link(scope, element, attrs) {
		renderer.initScene(element);
	}

	return {
		link: link
	};
 }])
})();