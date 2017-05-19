'use strict';

(function () {
  function Directive () {
    return {
      scope: {
        selectedCity: '=',
        selectedType: '=',
        selectedTimeline: '=',
        state: '='
      },
      link: function ($scope, $element, $attributes) { },
      templateUrl: 'app/scripts/components/map_control/template.html',
      controller: 'MapControlController',
      controllerAs: 'mcc'
    }
  }

  angular
    .module('app.components.mapControl')
    .directive('mapControl', [
      Directive
    ]);
}());
