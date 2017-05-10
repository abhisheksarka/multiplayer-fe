/**
 * Controller for the landing page
 */

'use strict';

(function () {
  function Controller (
    $scope
  ) {
    var pi = this;
  }

  angular
  .module('pageIndex')
  .controller('PageIndexController', [
    '$scope',
    Controller
  ]);
}());
