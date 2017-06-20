/**
 * Controller for the landing page
 */

'use strict';

(function () {
  function Controller (
    $scope,
    $location,
    User
  ) {
    var pi = this;

    $scope.$on('$routeChangeSuccess', function (event, next, current) {
      if (User.isSignedIn()) {
        $location.path('/all_games');
      } else {
        init();
      }
    });

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

    function init() {

    };
  }

  angular
  .module('app.pages.index')
  .controller('PageIndexController', [
    '$scope',
    '$location',
    'ApiUser',
    Controller
  ]);
}());
