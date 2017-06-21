'use strict';

(function () {
  function Factory (ApiUtil, $http, $q, GamePlay, GamePlayUser) {
    function Game () { };

    Game.index = function (state) {
      var defer = $q.defer();
      state.start();

      $http
      .get(ApiUtil.fullPath('/games'))
      .then(function (res) {
        ApiUtil.handleResponse(res, defer, state);
      }, function(res) {
        ApiUtil.handleResponse(res, defer, state);
      });
      return defer.promise;
    };

    Game.join = function (game, state) {
      var defer = $q.defer();

      GamePlay.create(game.id, state).then(function(gamePlay) {
        GamePlayUser.create(gamePlay.info, state).then(function(gamePlayUser) {
          defer.resolve({
            gamePlay: gamePlay.info,
            gamePlayUser: gamePlayUser.info
          });
        });
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
      'ApiGamePlay',
      'ApiGamePlayUser',
      Factory
    ]);
}());
