'use strict';

(function () {
  function Controller (
    $scope
  ) {
    var mcc = this;
  }

  angular
    .module('app.components.mapControl')
    .controller('MapControlController', [
      '$scope',
      Controller
    ]);
}());
