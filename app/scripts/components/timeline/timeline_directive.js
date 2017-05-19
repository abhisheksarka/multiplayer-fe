'use strict';

(function () {
  function Directive () {
    return {
      scope: {
        selectedTimeline: '='
      },
      link: function ($scope, $element, $attributes) { },
      templateUrl: 'app/scripts/components/timeline/template.html',
      controller: 'TimelineController',
      controllerAs: 'tc'
    }
  }

  angular
    .module('app.components.timeline')
    .directive('timeline', [
      Directive
    ]);
}());
