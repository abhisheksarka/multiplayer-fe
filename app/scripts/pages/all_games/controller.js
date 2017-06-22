/**
 * Controller for the games page
 */

'use strict';

(function () {
  function Controller (
    $scope,
    $location,
    User,
    Game,
    State
  ) {
    var pg = this;

    pg.games = [ ];
    pg.state = State.getInstance();
    pg.gamePlay = { };
    pg.init = false;

    $scope.$on('$routeChangeSuccess', function (event, next, current) {
      if (!User.isSignedIn()) {
        $location.path('/');
      } else {
        init();
      };
    });

    function init() {
      pg.init = true;
    };
  }

  angular
  .module('app.pages.allGames')
  .controller('AllGamesController', [
    '$scope',
    '$location',
    'ApiUser',
    'ApiGame',
    'State',
    Controller
  ]);
}());
