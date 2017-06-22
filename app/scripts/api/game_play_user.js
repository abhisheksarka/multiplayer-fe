'use strict';

(function () {
  function Factory (ApiUtil, $http, $q) {
    function GamePlayUser () { };

    GamePlayUser.create = function (gamePlay, state) {
      var defer = $q.defer(),
          cb = ApiUtil.handleResponse(defer, state);
      state.start();
      $http
      .post(ApiUtil.fullPath('/gamePlayUser'), {
        gamePlayId: gamePlay.id
      })
      .then(cb, cb);
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
