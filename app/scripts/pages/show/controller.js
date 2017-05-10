/**
 * Controller for the landing page
 */

'use strict';

(function () {
  function Controller (
    $scope
  ) {
    var ps = this;
  }

  angular
    .module('pageShow')
    .controller('PageShowController', [
      '$scope',
      Controller
    ]);
}());
