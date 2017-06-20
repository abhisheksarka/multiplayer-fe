/**
 * Controller for the games page
 */

'use strict';

(function () {
  function Controller (
    $scope,
    $location,
    User
  ) {
    var pg = this;
    $scope.$on('$routeChangeSuccess', function (event, next, current) {
      if (!User.isSignedIn()) {
        $location.path('/');
      } else {
        init();
      };
    });

    function init() {

    };
  }

  angular
  .module('app.pages.allGames')
  .controller('AllGamesController', [
    '$scope',
    '$location',
    'ApiUser',
    Controller
  ]);
}());
