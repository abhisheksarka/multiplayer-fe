/**
 * Controller for the landing page
 */

'use strict';

(function () {
  function Controller (
    $scope,
    MAP_STYLE
  ) {
    var ps = this;
    ps.mapStyle = MAP_STYLE;
  }

  angular
    .module('pageShow')
    .controller('PageShowController', [
      '$scope',
      'MAP_STYLE',
      Controller
    ]);
}());
