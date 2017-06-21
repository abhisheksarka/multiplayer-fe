'use strict';

(function () {
  function Factory ($socket) {
    function GamePlayManager (gamePlay) {
      this.gamePlay = gamePlay;
    };
    var proto = GamePlayManager.prototype;

    proto.connect = function () {
      return $socket(this.ns());
    };

    proto.ns = function () {
      return '/gamePlay/' + this.gamePlay.id;
    };

    return GamePlayManager;
  };

  angular
    .module('app.api')
    .factory('ApiGamePlayManager', [
      '$socket',
      Factory
    ]);
}());
