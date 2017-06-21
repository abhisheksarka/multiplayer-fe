/**
 * Controller for the games page
 */

'use strict';

(function () {
  function Controller (
    $scope,
    $location,
    GamePlay,
    User
  ) {
    var pc = this;
    pc.gamePlay = GamePlay.current;

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
  .module('app.pages.play')
  .controller('PlayController', [
    '$scope',
    '$location',
    'ApiGamePlay',
    'ApiUser',
    Controller
  ]);
}());
