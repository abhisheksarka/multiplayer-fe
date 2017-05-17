'use strict';

(function () {
  function Controller (
    $scope,
    ApiLocalityDetail,
    DATA_POINTS,
    $timeout
  ) {
    var mcc = this;
    mcc.dataPoints = [ ];

    angular.forEach(DATA_POINTS, function (item, key) {
      mcc.dataPoints.push({
        value: key,
        view: item.name
      });
    });

    mcc.cities = ApiLocalityDetail.cities;
    ApiLocalityDetail.getCities();

    $scope.$watch('selectedType', function (nv, ov) {
      if (nv && nv != ov) {
        $scope.state.start();
        $timeout(
          function () {
            $scope.state.success();
          }, true
        );
      }
    });
  }

  angular
    .module('app.components.mapControl')
    .controller('MapControlController', [
      '$scope',
      'ApiLocalityDetail',
      'DATA_POINTS',
      '$timeout',
      Controller
    ]);
}());
