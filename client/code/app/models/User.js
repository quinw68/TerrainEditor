(function(){
    var User = function () {
        var UserSettings = {
            UserID: 1,
            CameraPosition: new THREE.Vector3(0, 0, 100),
            CameraLookAt: new THREE.Vector3(0,0,0)
        }
        return UserSettings;
    };
	angular.module('terrainEditor').factory('User', [User])
})();
