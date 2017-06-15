'use strict';

(function () {
  function Directive () {
    return {
      scope: {
        trendConfig: '='
      },
      link: function ($scope, $element, $attributes) {
        $scope.onRendered = function () {
          angular.element(document.getElementsByClassName("c3-legend-item")).on('click',function (){
            angular.element(document.getElementById("trend-overlay")).remove();
          });
        };
      },
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
