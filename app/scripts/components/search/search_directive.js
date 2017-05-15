'use strict';

(function () {
  function Directive () {
    return {
      scope: {
        selectedCity: '='
      },
      link: function ($scope, $element, $attributes) { },
      templateUrl: 'app/scripts/components/search/template.html',
      controller: 'SearchController',
      controllerAs: 'sc'
    }
  }

  angular
    .module('app.components.search')
    .directive('search', [
      Directive
    ]);
}());
