'use strict';

(function () {
  function Controller (
    $scope,
    polygonModel
  ) {
    var tdc = this;
    tdc.name = polygonModel.name;

    tdc.trendConfig = {
      city: polygonModel.city,
      localityDetailId: polygonModel.lid
    };
    
  }

  angular
    .module('app.components.trend')
    .controller('TrendDialogController', [
      '$scope',
      'polygonModel',
      Controller
    ]);
}());
