/**
 * Controller for the landing page
 */

'use strict';

(function () {
  function Controller (
    $scope,
    $location,
    DATA_POINTS
  ) {
    var pi = this;
    pi.show = function () {
      $location.path('/show/bengaluru/' + _.keys(DATA_POINTS)[0]);
    };
  }

  angular
  .module('app.pages.index')
  .controller('PageIndexController', [
    '$scope',
    '$location',
    'DATA_POINTS',
    Controller
  ]);
}());
