'use strict';

(function () {
  function Controller (
    $scope,
    State,
    GamePlayManager,
    GamePlay,
    User
  ) {
    var gcc = this,
        events = [{name: 'joined', fn: onJoined}],
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
      Controller
    ]);
}());
