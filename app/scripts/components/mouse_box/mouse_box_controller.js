'use strict';

(function () {
  function Controller (
    $scope,
    MouseBox,
    DATA_POINTS
  ) {
    var mbc = this;
    mbc.state = MouseBox.state;
    mbc.data = MouseBox.data;
    mbc.dataPoints = DATA_POINTS;
  }

  angular
    .module('app.components.mouseBox')
    .controller('MouseBoxController', [
      '$scope',
      'MouseBox',
      'DATA_POINTS',
      Controller
    ]);
}());
