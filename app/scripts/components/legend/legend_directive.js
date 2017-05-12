'use strict';

(function () {
  function Directive () {
    return {
      scope: {
        selectedCity: '='
      },
      link: function ($scope, $element, $attributes) { },
      templateUrl: 'app/scripts/components/legend/template.html',
      controller: 'LegendController',
      controllerAs: 'lc'
    }
  }

  angular
    .module('app.components.legend')
    .directive('legend', [
      Directive
    ]);
}());
