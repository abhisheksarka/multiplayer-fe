'use strict';

(function () {
  function Directive () {
    return {
      scope: {
        gamePlay: '='
      },
      link: function ($scope, $element, $attributes) { },
      templateUrl: 'app/scripts/components/games_list/template.html',
      controller: 'GamesListController',
      controllerAs: 'gl'
    }
  }

  angular
    .module('app.components.gamesList')
    .directive('gamesList', [
      Directive
    ]);
}());
