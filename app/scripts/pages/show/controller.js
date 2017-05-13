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


    function updateLocation() {
      $location.update_path('show/' + ps.selectedCity + '/' + ps.selectedType);
    };

    $scope.$watch(angular.bind(ps, function () {
      return ps.selectedCity;
    }), function (newVal, oldVal) {
      updateLocation();
    });

    $scope.$watch(angular.bind(ps, function () {
      return ps.selectedType;
    }), function (newVal, oldVal) {
      updateLocation();
    });
  };

  angular
    .module('app.pages.show')
    .controller('PageShowController', [
      '$scope',
      '$routeParams',
      '$location',
      Controller
    ]);
}());
