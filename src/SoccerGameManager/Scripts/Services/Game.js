(function () {
    'use strict';

    angular
        .module('gameApp')
        .factory('Game', gameService);

    gameService.$inject = ['$http'];

    function gameService($http) {
        var service = {
            getData: getData
        };

        return service;

        function getData() { }
    }
})();