/**
 * Controller for the landing page
 */

'use strict';

(function () {
  function Controller (
    $scope,
    $routeParams,
    $location,
    State
  ) {

    var ps = this;
    ps.selectedCity = $routeParams.city;
    ps.selectedType = $routeParams.type;
    ps.state = new State();

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
      'State',
      Controller
    ]);
}());
