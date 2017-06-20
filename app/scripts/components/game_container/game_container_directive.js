'use strict';

(function () {
  function Directive () {
    return {
      scope: { },
      link: function ($scope, $element, $attributes) { },
      templateUrl: 'app/scripts/components/game_container/template.html',
      controller: 'GameContainerController',
      controllerAs: 'gcc'
    }
  }

  angular
    .module('app.components.gameContainer')
    .directive('gameContainer', [
      Directive
    ]);
}());
