'use strict';

(function () {
  function Directive () {
    return {
      scope: {
        selectedCity: '=',
        selectedType: '=',
        timelineConfig: '=',
        state: '='
      },
      link: function ($scope, $element, $attributes) { },
      templateUrl: 'app/scripts/components/distribution_map/template.html',
      controller: 'DistributionMapController',
      controllerAs: 'dmc'
    }
  }

  angular
    .module('app.components.distributionMap')
    .directive('distributionMap', [
      Directive
    ]);
}());
