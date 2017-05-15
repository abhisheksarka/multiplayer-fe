/**
 * Controller for the landing page
 */

'use strict';

(function () {
  function Controller (
    $scope,
    $location
  ) {
    var pi = this;
    pi.show = function () {
      $location.path('/show/bengaluru/search');
    };
  }

  angular
  .module('app.pages.index')
  .controller('PageIndexController', [
    '$scope',
    '$location',
    Controller
  ]);
}());
