(function(){
var panelController = function($scope){
    $scope.NavBar = [
        { Title: 'Home', Url: '' },
        { 
            Title: 'Dropdown',
            SubMenus: [
                { Title: 'Option 1', Url: 'Opt1' },
                { Title: 'Option 2', Url: 'Opt2' }
            ]
        },
        { Title: 'Non-Dropdown', Url: 'Section' }
    ];
}

var app = angular.module('terrainEditor');
app.controller('PanelController', ['$scope', panelController]);
})();