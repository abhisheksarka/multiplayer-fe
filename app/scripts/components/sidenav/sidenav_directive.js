'use strict';

(function () {
  function Directive () {
    return {
      scope: { },
      link: function ($scope, $element, $attributes) { },
      templateUrl: 'app/scripts/components/sidenav/template.html',
      controller: 'SidenavController',
      controllerAs: 'sc'
    }
  }

  angular
  .module('app.components.sidenav')
  .directive('sidenav', [
    Directive
  ]);
}());
