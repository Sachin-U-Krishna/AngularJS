(function () {
    'use strict';

    angular.module('DIApp', [])

    .controller('DIController', DIController);

    function DIController ($scope, $filter, $injector) {  // Injector is used internally by ANgulay JS
        $scope.name = "Yaakov";


        $scope.upper = function () {
            var upCase = $filter('uppercase');  // Creating a uppercase filter
            $scope.name = upCase($scope.name);  //Mapping the filter to the name variable
        };

        console.log($injector.annotate(DIController));  // This is how Angular JS denoted the arguments
    }

})();