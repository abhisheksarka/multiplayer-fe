'use strict';

(function () {
  function Factory (ApiUtil, $http, $q) {
    function GamePlay () { };
    GamePlay.current = { };
    
    GamePlay.create = function (gameId, state) {
      var defer = $q.defer();
      state.start();
      $http
      .post(ApiUtil.fullPath('/gamePlay'), {gameId: gameId})
      .then(function (res) {
        ApiUtil.handleResponse(res, defer, state);
      }, function(res) {
        ApiUtil.handleResponse(res, defer, state);
      });
      return defer.promise;
    };

    return GamePlay;
  };

  angular
    .module('app.api')
    .factory('ApiGamePlay', [
      'ApiUtil',
      '$http',
      '$q',
      Factory
    ]);
}());
