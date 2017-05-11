'use strict';

(function () {
  function Controller (
    $scope,
    ApiLocalityDetail
  ) {
    var mcc = this;

    mcc.cities = ApiLocalityDetail.cities;
    ApiLocalityDetail.getCities();
  }

  angular
    .module('app.components.mapControl')
    .controller('MapControlController', [
      '$scope',
      'ApiLocalityDetail',
      Controller
    ]);
}());
