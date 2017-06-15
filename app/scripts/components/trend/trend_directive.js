'use strict';

(function () {
  function Directive () {
    return {
      scope: {
        trendConfig: '='
      },
      link: function ($scope, $element, $attributes) { },
      templateUrl: 'app/scripts/components/trend/template.html',
      controller: 'TrendController',
      controllerAs: 'tc'
    }
  }

  angular
    .module('app.components.trend')
    .directive('trend', [
      Directive
    ]);
}());
