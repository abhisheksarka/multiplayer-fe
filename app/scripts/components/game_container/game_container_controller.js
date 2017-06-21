'use strict';

(function () {
  function Controller (
    $scope,
    State,
    GamePlayManager,
    GamePlay,
    User,
    Toast
  ) {
    var gcc = this,
        events = [
          {name: 'joined', fn: onJoined},
          {name: 'left', fn: onLeft}
        ],
        gpm = new GamePlayManager(GamePlay.current, events),
        socket = null;

    gcc.gamePlay = GamePlay.current;
    gcc.state = State.getInstance();
    gcc.players = [];

    function establishConnection() {
      gpm.connect();
      gpm.join(User.current());
    };

    function onJoined(user) {
      gcc.players.push(user);
      notify(user, 'joined');
    };

    function onLeft(user) {
      var index = null;
      gcc.players.forEach(function(p, i) {
        if (p.id == user.id) {
          index = i;
        };
      });

      if (gcc.players[index]) {
        notify(gcc.players[index], 'left');
      };

      if (index > -1) {
        gcc.players.splice(index, 1);
      };
    };

    function notify(user, status) {
      Toast.notify(user.username + ' has ' + status);
    };

    function loadPlayers() {
      GamePlay.players(gcc.gamePlay.id, gcc.state)
      .then(function(res) {
        angular.forEach(res.info, function(d) {
          gcc.players.push(d);
        });
        establishConnection();
      });
    };
    loadPlayers();
  }

  angular
    .module('app.components.gameContainer')
    .controller('GameContainerController', [
      '$scope',
      'State',
      'ApiGamePlayManager',
      'ApiGamePlay',
      'ApiUser',
      'Toast',
      Controller
    ]);
}());
