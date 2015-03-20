(function(){
    var Terrain = function(){
        var terrain = {};

        // create the sphere's material
        var mat =
            new THREE.MeshLambertMaterial(
                {
                    color: 0xCC0000
                });

        // create a new mesh with
        // sphere geometry - we will cover
        // the sphereMaterial next!
        var geo = new THREE.PlaneGeometry(50,40);
        terrain.Mesh = new THREE.Mesh(geo, mat)
        return terrain;
    };

    angular.module('terrainEditor')
        .factory('Terrain', [Terrain]);
})();
