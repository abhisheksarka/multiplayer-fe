'use strict';

(function () {
  function Controller (
    $scope,
    MouseBox
  ) {
    var mbc = this;
    mbc.state = MouseBox.state;
    mbc.data = MouseBox.data;
  }

  angular
    .module('app.components.mouseBox')
    .controller('MouseBoxController', [
      '$scope',
      'MouseBox',
      Controller
    ]);
}());
