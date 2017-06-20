'use strict';

(function () {
  function Controller (
    $scope,
    Game,
    State
  ) {
    var gl = this;
    gl.games = [ ];
    gl.state = State.getInstance();

    function init() {
      Game.index(gl.state).then(function(res) {
        angular.forEach(res.info, function(v) {
          gl.games.push(v);
        });
      });
    };

    init();
  }

  angular
    .module('app.components.gamesList')
    .controller('GamesListController', [
      '$scope',
      'ApiGame',
      'State',
      Controller
    ]);
}());
