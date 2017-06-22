'use strict';

(function () {
  function Factory (ApiUtil, $http, $q) {
    function GamePlay () { };
    GamePlay.current = { };

    GamePlay.startCurrent = function(state) {
      var defer = $q.defer(),
          cb = ApiUtil.handleResponse(defer, state);

      state.start();
      $http
      .post(ApiUtil.fullPath('/gamePlay/' + GamePlay.current.id + '/start'))
      .then(cb, cb);
      return defer.promise;
    };

    GamePlay.create = function (gameId, state) {
      var defer = $q.defer(),
          cb = ApiUtil.handleResponse(defer, state);

      state.start();
      $http
      .post(ApiUtil.fullPath('/gamePlay'), {gameId: gameId})
      .then(cb, cb);
      return defer.promise;
    };

    GamePlay.players = function(gamePlayId, state) {
      var defer = $q.defer(),
          cb = ApiUtil.handleResponse(defer, state);

      state.start();
      $http
      .get(ApiUtil.fullPath('/gamePlay/' + gamePlayId + '/players'))
      .then(cb, cb);
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
