'use strict';

(function () {
  function Factory ($mdDialog) {

    function Service () { };
    var proto = Service.prototype;

    Service.open = function (polygonModel) {
      $mdDialog.show({
        locals: {
          polygonModel: polygonModel
        },
        controller: 'TrendDialogController',
        controllerAs: 'tdc',
        templateUrl: 'app/scripts/components/trend/trend_dialog_template.html',
        parent: angular.element(document.body),
        clickOutsideToClose: true,
        fullscreen: true // Only for -xs, -sm breakpoints.
      });
    };

    return Service;
  };

  angular
    .module('app.components.trend')
    .factory('TrendDialog', [
      '$mdDialog',
      Factory
    ]);
}());
