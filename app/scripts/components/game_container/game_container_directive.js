'use strict';

(function () {
  function Directive ($compile, Game) {
    return {
      scope: { },
      link: function ($scope, $element, $attributes) {
        $scope.compileAndInject = function () {
          var el = angular.element(document.getElementById('game-injection')),
              gameName = Game.current.name.toLowerCase(),
              directiveName = 'games' + '-' + gameName.replace(/\s/g, '-');
          el.append($compile('<' + directiveName + ' config="gcc.config"></'+ directiveName +'>')($scope));
        };
      },
      templateUrl: 'app/scripts/components/game_container/template.html',
      controller: 'GameContainerController',
      controllerAs: 'gcc'
    }
  }

  angular
    .module('app.components.gameContainer')
    .directive('gameContainer', [
      '$compile',
      'ApiGame',
      Directive
    ]);
}());
