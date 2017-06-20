'use strict';

(function () {
  function Controller (
    $scope,
    State,
    $socket
  ) {
    var gcc = this;
    gcc.state = State.getInstance();

    function init() {

    };

    init();
  }

  angular
    .module('app.components.gameContainer')
    .controller('GameContainerController', [
      '$scope',
      'State',
      '$socket',
      Controller
    ]);
}());
