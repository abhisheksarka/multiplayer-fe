'use strict';

(function () {
  function Directive () {
    return {
      scope: {
        config: '=' // {score: 42, unit: 'clicks/minute', status: "start", timeToPlay: 10}
      },
      link: function ($scope, $element, $attributes) { },
      templateUrl: 'app/scripts/components/games/space_race/template.html',
      controller: 'SpaceRaceController',
      controllerAs: 'cc'
    }
  }

  angular
    .module('app.components.games.spaceRace')
    .directive('gamesSpaceRace', [
      Directive
    ]);
}());
