'use strict';

(function () {
  function Controller (
    $scope,
    $location,
    State
  ) {
    var cc = this,
        config = $scope.config;

    $scope.config.unit = 'clicks';
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
    .module('app.components.games.clickit')
    .controller('ClickitController', [
      '$scope',
      '$location',
      'State',
      Controller
    ]);
}());
