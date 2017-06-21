'use strict';

(function () {
  function Factory ($socket) {
    function GamePlayManager (gamePlay, events) {
      this.gamePlay = gamePlay;
      this.conn = null;
      this.events = events || [ ];
    };

    var proto = GamePlayManager.prototype;

    proto.ns = function () {
      return '/gamePlay/' + this.gamePlay.id;
    };

    proto.connect = function() {
      this.conn = $socket(this.ns());
      this.listen();
    };

    proto.join = function(user) {
      this.conn.emit('joined', user);
    };

    proto.start = function() {
      this.conn.emit('started');
    };

    proto.listen = function() {
      var self = this;
      angular.forEach(self.events, function(event) {
        self.conn.on(event.name, event.fn);
      });
    };

    return GamePlayManager;
  };

  angular
    .module('app.api')
    .factory('ApiGamePlayManager', [
      '$socket',
      '$rootScope',
      Factory
    ]);
}());
