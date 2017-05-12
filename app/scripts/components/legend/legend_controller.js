'use strict';

(function () {
  function Controller (
    $scope
  ) {
    var lc = this;
  }

  angular
    .module('app.components.legend')
    .controller('LegendController', [
      '$scope',
      Controller
    ]);
}());
