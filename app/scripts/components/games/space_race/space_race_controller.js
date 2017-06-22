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

    $scope.config.unit = 'presses';
    $scope.config.timeToPlay = 10000;

    cc.counter = 0;

    cc.increment = function(e) {
      if (e.which == 32) {
        cc.counter++;
      };
    };

    $scope.$watch(angular.bind(cc, function () {
      return cc.counter;
    }), function (nv, ov) {
      $scope.config.score = nv;
    });
  }

  angular
    .module('app.components.games.spaceRace')
    .controller('SpaceRaceController', [
      '$scope',
      '$location',
      'State',
      Controller
    ]);
}());
