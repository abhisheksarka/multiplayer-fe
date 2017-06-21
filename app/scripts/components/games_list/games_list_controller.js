'use strict';

(function () {
  function Controller (
    $scope,
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
      });
    };

    init();
  }

  angular
    .module('app.components.gamesList')
    .controller('GamesListController', [
      '$scope',
      'ApiGame',
      'ApiGamePlay',
      'State',
      Controller
    ]);
}());
