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

    pi.tabs = {
      signUp: true,
      signIn: false
    };

    pi.open = function (tabName) {
      angular.forEach(pi.tabs, function (v, k) {
        pi.tabs[k] = false;
      });
      pi.tabs[tabName] = true;
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
