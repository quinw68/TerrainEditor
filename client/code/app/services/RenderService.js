(function() {
	var renderer = function(User, Terrain) {
		var renderer = {};

		/**
		 * Initializes the scene that we are going to start rendering
		 * @param  {element that the scene should be rendered in}
		 * @return {}
		 */
		renderer.initScene = function($element) {

			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

			// Make sure resize events side everything correctly
			var renderer = new THREE.WebGLRenderer();
			var height = window.innerHeight - $('#navbar').outerHeight(true);
			renderer.setSize($element.width(), height);
			$element.prepend(renderer.domElement);
			setResize(renderer, camera, $element);


            // add the sphere to the scene
            scene.add(Terrain.Mesh);

            // create a point light
            var pointLight =
                new THREE.PointLight(0xFFFFFF);

            // set its position
            pointLight.position.x = 10;
            pointLight.position.y = 50;
            pointLight.position.z = 130;

            // add to the scene
            scene.add(pointLight);
			scene.add(camera);
            camera.position = User.CameraPosition;
            camera.lookAt(User.CameraLookAt);
            renderer.render(scene, camera);
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
				stop: function(){
					window.removeEventListener('resize', callback);
				}
			};
		};
		return renderer;
	};
	angular.module('terrainEditor')
		.factory('Renderer', ['User', 'Terrain', renderer]);
})();