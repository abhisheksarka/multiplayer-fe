'use strict';

(function () {
  function Directive () {
    return {
      scope: { },
      link: function ($scope, $element, $attributes) { },
      templateUrl: 'app/scripts/components/mouse_box/template.html',
      controller: 'MouseBoxController',
      controllerAs: 'mbc'
    }
  }

  angular
    .module('app.components.mouseBox')
    .directive('mouseBox', [
      Directive
    ]);
}());
