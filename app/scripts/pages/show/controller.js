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
    .module('app.pages.show')
    .controller('PageShowController', [
      '$scope',
      Controller
    ]);
}());
