(function (angular) {
    'use strict';

    angular
        .module('gameApp')
        .controller('gameController', gameController);

    gameController.$inject = ['$scope']; 

    function gameController($scope) {
        $scope.paused = false;

        $scope.test = "abcd";

        activate();

        function activate() {
        }
    }
})(angular);
