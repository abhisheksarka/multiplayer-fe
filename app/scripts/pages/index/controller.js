/**
 * Controller for the landing page
 */

'use strict';

(function () {
  function Controller (
    $scope,
    $location,
    DATA_POINTS,
    CITY_LAT_LNGS
  ) {
    var pi = this;
    pi.show = function () {
      $location.path('/show/' + _.keys(CITY_LAT_LNGS)[0] + '/' + _.keys(DATA_POINTS)[0]);
    };
  }

  angular
  .module('app.pages.index')
  .controller('PageIndexController', [
    '$scope',
    '$location',
    'DATA_POINTS',
    'CITY_LAT_LNGS'
    Controller
  ]);
}());
