'use strict';

(function () {
  function Factory (ApiUtil, $http, $q, $timeout) {
    function Trend () { };


    Trend.getTrendFor = function (city, localityDetailId) {
      return $http.get(ApiUtil.fullPath('/locality_details/trend'), {
        params: {
          city: city,
          locality_detail_id: localityDetailId
        }
      })
      .then(function (res) {
        return res.data.data;
      });
    };


    return Trend;
  };

  angular
    .module('app.api')
    .factory('ApiTrend', [
      'ApiUtil',
      '$http',
      '$q',
      '$timeout',
      Factory
    ]);
}());
