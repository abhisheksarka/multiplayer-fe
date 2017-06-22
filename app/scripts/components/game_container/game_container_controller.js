'use strict';

(function () {
  function Controller (
    $scope,
    State,
    GamePlayManager,
    GamePlay,
    User,
    Toast,
    $interval
  ) {
    var gcc = this,
        events = [
          {name: 'joined', fn: onJoined},
          {name: 'left', fn: onLeft},
          {name: 'started', fn: onStarted},
          {name: 'gameData', fn: onGameData}
        ],
        gpm = new GamePlayManager(GamePlay.current, events),
        socket = null;

    gcc.gamePlay = GamePlay.current;
    gcc.state = State.getInstance();
    gcc.players = [];

    gcc.config = {
      score: 0,
      unit: 'n/a',
      status: "hold",
      timeToPlay: 10
    };

    gcc.counters = {
      begin: 3,
      timeLeft: gcc.config.timeToPlay
    };

    gcc.start = function() {
      gcc.state.start();
      gpm.start();
    };

    function onStarted() {
      gcc.startCounter('begin');
    };

    gcc.startCounter = function(name) {
      var n = gcc.counters[name];
      gcc.state.start();

      $interval(function() {
        if (gcc.counters[name] != 0) {
          gcc.counters[name]--;
        } else {
          gcc.state.success();
        };
      }, 1000, n);
    };

    function onGameData(res) {
      var p = null;
      angular.forEach(gcc.players, function(player) {
        if (player.id == res.user.id) {
          p = player;
        };
      });
      if (p) {
        p.gameData = res.data;
      };
    };

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
        if (p.id == user.id) index = i;
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

    $scope.$watch(angular.bind(gcc, function() {
      return gcc.config;
    }), function (nv, ov) {
      if (nv.score != ov.score) {
        gpm.gameData(User.current(), gcc.config);
      };
    }, true);
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
      '$interval',
      Controller
    ]);
}());
