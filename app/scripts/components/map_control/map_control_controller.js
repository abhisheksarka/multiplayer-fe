'use strict';

(function () {
  function Controller (
    $scope,
    ApiLocalityDetail,
    DATA_POINTS
  ) {
    var mcc = this;
    mcc.dataPoints = [ ];

    angular.forEach(DATA_POINTS, function (item, key) {
      mcc.dataPoints.push({
        value: key,
        view: item
      });
    });

    mcc.cities = ApiLocalityDetail.cities;
    ApiLocalityDetail.getCities();
  }

  angular
    .module('app.components.mapControl')
    .controller('MapControlController', [
      '$scope',
      'ApiLocalityDetail',
      'DATA_POINTS',
      Controller
    ]);
}());
