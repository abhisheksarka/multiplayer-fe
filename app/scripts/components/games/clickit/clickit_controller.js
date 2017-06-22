'use strict';

(function () {
  function Controller (
    $scope,
    $location,
    State
  ) {
    var cc = this,
        config = $scope.config;
        
    cc.counter = 0;

    cc.increment = function() {
      cc.counter++;
    };
  }

  angular
    .module('app.components.games.clickit')
    .controller('ClickitController', [
      '$scope',
      '$location',
      'State',
      Controller
    ]);
}());
