/**
 * Controller for the landing page
 */

'use strict';

(function () {
  function Controller (
    $scope,
    $routeParams,
    $location,
    State,
    $rootScope,
    MouseBox
  ) {

    var ps = this;

    ps.state = new State();
    setValues();

    function setValues() {
      ps.selectedCity = $routeParams.city;
      ps.selectedType = $routeParams.type;
    };

    function updateLocation() {
      $location.update_path('show/' + ps.selectedCity + '/' + ps.selectedType);
    };

    $scope.$watch(angular.bind(ps, function () {
      return ps.selectedCity;
    }), function (newVal, oldVal) {
      MouseBox.hide();
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
      '$rootScope',
      'MouseBox',
      Controller
    ]);
}());
