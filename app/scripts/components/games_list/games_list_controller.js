'use strict';

(function () {
  function Controller (
    $scope,
    $location,
    Game,
    GamePlay,
    State
  ) {
    var gl = this;
    gl.games = [ ];
    gl.state = State.getInstance();

    function init() {
      Game.index(gl.state).then(function(res) {
        angular.forEach(res.info, function(v) {
          v.state = new State();
          gl.games.push(v);
        });
      });
    };

    gl.join = function(game) {
      GamePlay.create(game.id, game.state).then(function(res) {
        GamePlay.current = res.info;
        $location.path('/play');
      });
    };

    init();
  }

  angular
    .module('app.components.gamesList')
    .controller('GamesListController', [
      '$scope',
      '$location',
      'ApiGame',
      'ApiGamePlay',
      'State',
      Controller
    ]);
}());
