'use strict';

(function () {
  function Factory () {
    function GamePlayManager (gamePlay) {
      this.gamePlay = gamePlay;
    };
    var proto = GamePlayManager.prototype;

    proto.connect = function () {
      return $socket(ns());
    };

    proto.ns = function () {
      return '/gamePlay/' + this.gamePlay.id;
    };

    return GamePlay;
  };

  angular
    .module('app.api')
    .factory('ApiGamePlayManager', [
      '$socket',
      Factory
    ]);
}());
