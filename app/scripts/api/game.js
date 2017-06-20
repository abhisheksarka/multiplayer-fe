'use strict';

(function () {
  function Factory (ApiUtil, $http, $q) {
    function Game () { };

    Game.index = function (state) {
      var defer = $q.defer();
      state.start();
      
      $http
      .get(ApiUtil.fullPath('/game/index'))
      .then(function (res) {
        ApiUtil.handleResponse(res, defer, state);
      }, function(res) {
        ApiUtil.handleResponse(res, defer, state);
      });
      return defer.promise;
    };

    return Game;
  };

  angular
    .module('app.api')
    .factory('ApiGame', [
      'ApiUtil',
      '$http',
      '$q',
      Factory
    ]);
}());
