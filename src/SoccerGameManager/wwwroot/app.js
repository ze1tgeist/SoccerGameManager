(function (angular) {
    'use strict';

    angular.module('gameApp', [
    ]);
})(angular);
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

(function () {
    'use strict';

    angular
        .module('app')
        .factory('gameService', gameService);

    gameService.$inject = ['$http'];

    function gameService($http) {
        var service = {
            getData: getData
        };

        return service;

        function getData() { }
    }
})();