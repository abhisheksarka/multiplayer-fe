'use strict';

(function () {
  function Directive () {
    return {
      scope: {
        config: '=' // {score: 42, unit: 'clicks/minute', status: "start", timeToPlay: 10}
      },
      link: function ($scope, $element, $attributes) { },
      templateUrl: 'app/scripts/components/games/click_it/template.html',
      controller: 'ClickItController',
      controllerAs: 'cc'
    }
  }

  angular
    .module('app.components.games.clickIt')
    .directive('gamesClickIt', [
      Directive
    ]);
}());
