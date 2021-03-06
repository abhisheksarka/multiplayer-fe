'use strict';

(function () {
  function Controller (
    $scope,
    $location,
    State
  ) {
    var cc = this,
        config = $scope.config,
        state = new State();

    $scope.config.unit = 'clicks';
    $scope.config.playTime = 10;

    cc.counter = 0;

    cc.increment = function() {
      cc.counter++;
    };

    $scope.$watch(angular.bind(cc, function () {
      return cc.counter;
    }), function (nv, ov) {
      $scope.config.score = nv;
    });
  }

  angular
    .module('app.components.games.clickIt')
    .controller('ClickItController', [
      '$scope',
      '$location',
      'State',
      Controller
    ]);
}());
