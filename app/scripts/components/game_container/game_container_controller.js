'use strict';

(function () {
  function Controller (
    $scope,
    State,
    GamePlayManager,
    GamePlay
  ) {
    var gcc = this,
        gpm = new GamePlayManager(GamePlay.current);

    gcc.state = State.getInstance();

    function init() {
      gpm.connect();
    };

    init();
  }

  angular
    .module('app.components.gameContainer')
    .controller('GameContainerController', [
      '$scope',
      'State',
      'ApiGamePlayManager',
      'ApiGamePlay',
      Controller
    ]);
}());
