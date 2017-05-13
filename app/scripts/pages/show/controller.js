/**
 * Controller for the landing page
 */

'use strict';

(function () {
  function Controller (
    $scope,
    $routeParams,
    $location
  ) {

    var ps = this;
    ps.selectedCity = $routeParams.city;
    ps.selectedType = $routeParams.type;

  }

  angular
    .module('app.pages.show')
    .controller('PageShowController', [
      '$scope',
      '$routeParams',
      '$location',
      Controller
    ]);
}());
