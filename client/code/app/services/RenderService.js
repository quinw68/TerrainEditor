(function() {
	var renderer = function() {
		var renderer = {};

		/**
		 * Initializes the scene that we are going to start rendering
		 * @param  {element that the scene should be rendered in}
		 * @return {}
		 */
		renderer.initScene = function($element) {

			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

			var renderer = new THREE.WebGLRenderer();
			var height = window.innerHeight - $('#navbar').outerHeight(true);
			renderer.setSize($element.width(), height);
			$element.append(renderer.domElement);
			setResize(renderer, camera, $element);
		};

		/// Helper functions
		var setResize = function(renderer, camera, element) {
			var callback	= function(){
				var height = window.innerHeight - $('#navbar').outerHeight(true);
				// notify the renderer of the size change
				renderer.setSize( element.width(), height );
				// update the camera
				camera.aspect	= element.width() / height;
				camera.updateProjectionMatrix();
			}
			// bind the resize event
			window.addEventListener('resize', callback, false);
			// return .stop() the function to stop watching window resize
			return {
				stop	: function(){
					window.removeEventListener('resize', callback);
				}
			};
		};
		return renderer;
	};
	angular.module('terrainEditor')
		.factory('renderer', renderer);
})();