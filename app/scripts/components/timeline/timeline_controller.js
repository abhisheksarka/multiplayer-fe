'use strict';

(function () {
  function Controller (
    $scope,
    $rootScope
  ) {
    var tc = this;
  }

  angular
    .module('app.components.timeline')
    .controller('TimelineController', [
      '$scope',
      '$rootScope',
      Controller
    ]);
}());
