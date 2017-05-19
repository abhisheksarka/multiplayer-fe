'use strict';

(function () {
  function Controller (
    $scope
  ) {
    var tc = this;
  }

  angular
    .module('app.components.timeline')
    .controller('TimelineController', [
      '$scope',
      Controller
    ]);
}());
