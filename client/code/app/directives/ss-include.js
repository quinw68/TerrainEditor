(function(){
	var mod = angular.module('TerrainEditor');

	mod.directive('ssInclude', function(){
		var link = function(scope, element, attrs){
			var html = ss.tmpl[attrs.template].render(scope[attrs.dependency]);
			element.html(html);
		};

		return {
			link: link
		}
	});
})();