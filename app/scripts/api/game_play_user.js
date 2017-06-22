'use strict';

(function () {
  function Factory (ApiUtil, $http, $q) {
    function GamePlayUser () { };

    GamePlayUser.create = function (gamePlay, state) {
      var defer = $q.defer();
      state.start();
      $http
      .post(ApiUtil.fullPath('/gamePlayUser'), {
        gamePlayId: gamePlay.id
      })
      .then(ApiUtil.handleResponse(defer, state));
      return defer.promise;
    };

    return GamePlayUser;
  };

  angular
    .module('app.api')
    .factory('ApiGamePlayUser', [
      'ApiUtil',
      '$http',
      '$q',
      Factory
    ]);
}());
