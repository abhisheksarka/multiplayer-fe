'use strict';

(function () {
  function Factory (ApiUtil, $http, $q, $timeout) {
    function LocalityDetail () { };

    LocalityDetail.cities = [ ];
    LocalityDetail.localities = { };
    LocalityDetail.localityStats = { };

    LocalityDetail.getCities = function () {
      return $http.get(ApiUtil.fullPath('/locality_details/cities'))
      .then(function (res) {
        var d = res.data.data;
        d.forEach(function(item){
          LocalityDetail.cities.push(item);
        })
        return d;
      });
    };

    LocalityDetail.getLocalities = function (city) {
      var defer = $q.defer(),
          l = LocalityDetail.localities[city];
      if (!_.isEmpty(l)) {
        defer.resolve({localityDetails: l, city: city});
      } else {
        $http.get(ApiUtil.fullPath('/locality_details/localities'), {params: {city: city}})
        .then(function (res) {
          var d = res.data.data;
          LocalityDetail.localities[city] = d;
          defer.resolve({localityDetails: d, city: city});
        }, function () {
          defer.reject();
        });
      };
      return defer.promise;
    };

    LocalityDetail.getStats = function (params) {
      var defer = $q.defer(),
          city = params.city,
          s = LocalityDetail.localityStats[city];

      if (!_.isEmpty(s)) {
        defer.resolve({localityDetails: params.localityDetails, stats: s});
      } else {
        $http.get(ApiUtil.fullPath('/locality_details/localitics_data'), {params: {city: params.city}})
        .then(function (res) {
          var d = res.data.data;
          LocalityDetail.localityStats[city] = d;
          defer.resolve({localityDetails: params.localityDetails, stats: d});
        });
      };
      return defer.promise;
    };

    LocalityDetail.getLocalitiesAndStats = function (city) {
      return LocalityDetail.getLocalities(city).then(LocalityDetail.getStats);
    };


    return LocalityDetail;
  };

  angular
    .module('app.api')
    .factory('ApiLocalityDetail', [
      'ApiUtil',
      '$http',
      '$q',
      '$timeout',
      Factory
    ]);
}());
