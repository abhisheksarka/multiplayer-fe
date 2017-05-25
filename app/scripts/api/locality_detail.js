'use strict';

(function () {
  function Factory (ApiUtil, $http, $q, $timeout, CITY_LAT_LNGS) {
    function LocalityDetail () { };

    LocalityDetail.cities = [ ];
    LocalityDetail.localities = { };
    LocalityDetail.localityStats = { };

    LocalityDetail.getCities = function () {
      return $http.get(ApiUtil.fullPath('/locality_details/cities'))
      .then(function (res) {
        var d = res.data.data;
        d.forEach(function(item){
          if (CITY_LAT_LNGS[item.toLowerCase()]) {
            LocalityDetail.cities.push(item);
          };
        })
        return d;
      });
    };

    LocalityDetail.getLocalities = function (city, days) {
      var defer = $q.defer(),
          l = LocalityDetail.localities[city];
      if (!_.isEmpty(l)) {
        defer.resolve({localityDetails: l, city: city, days: days});
      } else {
        $http.get(ApiUtil.fullPath('/locality_details/localities'), {params: {city: city}})
        .then(function (res) {
          var d = res.data.data;
          LocalityDetail.localities[city] = d;
          defer.resolve({localityDetails: d, city: city, days: days});
        }, function () {
          defer.reject();
        });
      };
      return defer.promise;
    };

    LocalityDetail.getStats = function (params) {
      var defer = $q.defer(),
          city = params.city,
          days = params.days;

      var cc = LocalityDetail.localityStats[city];
      if (_.isEmpty(cc)) {
        LocalityDetail.localityStats[city] = { };
      };

      var cdc = LocalityDetail.localityStats[city][days];
      if (_.isEmpty(cdc)) {
        LocalityDetail.localityStats[city][days] = { };
      };

      var c = LocalityDetail.localityStats[city][days];

      if (!_.isEmpty(c)) {
        defer.resolve({localityDetails: params.localityDetails, stats: c});
      } else {
        $http.get(ApiUtil.fullPath('/locality_details/localitics_data'), {params: {city: params.city, days: params.days}})
        .then(function (res) {
          var d = res.data.data;
          LocalityDetail.localityStats[city][days] = d;
          defer.resolve({localityDetails: params.localityDetails, stats: d});
        });
      };

      return defer.promise;
    };

    LocalityDetail.getLocalitiesAndStats = function (city, weeks) {
      var days = weeks*7;
      if (days >= 84) {
        days = 90;
      };

      return LocalityDetail.getLocalities(city, days).then(LocalityDetail.getStats);
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
      'CITY_LAT_LNGS',
      Factory
    ]);
}());
