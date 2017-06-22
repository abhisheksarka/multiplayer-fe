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


    /**
     * Config that every game module reads and acts accordingly to changes in
     * the data that the container will do
     */
    gcc.config = {
      score: 0,
      unit: 'n/a',
      status: 'init',
      timeToPlay: 10
    };


    /**
     * Config to maintain counter when before game start and after the timer
     *  after game start
     */
    gcc.counters = {
      begin: 3,
      timeLeft: gcc.config.timeToPlay
    };


    /**
     * Load players who have joined already
     */
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


    /**
     * emit an event indicating game start
     */
    gcc.start = function() {
      gcc.state.start();
      gpm.start();
    };


    /**
     * emit game data for the player
     */
    function emitGameData() {
      $scope.$watch(angular.bind(gcc, function() {
        return gcc.config;
      }), function (nv, ov) {
        if (nv.score != ov.score) {
          gpm.gameData(User.current(), gcc.config);
        };
      }, true);
    };
    emitGameData();


    /**
     * when we get a message that game has started
     * start 3, 2, 1 counter
     */
    function onStarted() {
      gcc.startCounter('begin');
    };


    /**
     * when we receive game data message we bind it to the player
     * so that it can be displayed to all other players
     */
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


    /**
     * when we receive message that a new user has joined
     */
    function onJoined(user) {
      gcc.players.push(user);
      notify(user, 'joined');
    };


    /**
     * when we receive message that an existing user has left
     */
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


    /**
     * Handler counters using $timeout
     */
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


    /**
     * Connect with the server via socket and tell the
     * server the current user has joined
     */
    function establishConnection() {
      gpm.connect();
      gpm.join(User.current());
    };


    /**
     * Just show a notification for activities
     */
    function notify(user, status) {
      Toast.notify(user.username + ' has ' + status);
    };


    /**
     * Sort players by ranking
     */
    function sortPlayers() {
      gcc.players = _.sortBy(gcc.players, function(p) {
        var g = p.gameData || { };
        return -(g.score || 0);
      });
    };


    /**
     * End game when timer ends
     */
    $scope.$watch(angular.bind(gcc, function() {
      return gcc.counters.timeLeft;
    }), function (nv, ov) {
      if (nv == 0 && ov == 1) {
        sortPlayers();
        gcc.config.status = "ended";
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
