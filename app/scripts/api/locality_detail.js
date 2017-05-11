'use strict';

(function () {
  function Factory (ApiUtil, $http, $q) {
    function LocalityDetail () { };

    LocalityDetail.cities = [ ];
    LocalityDetail.localities = { };

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
      return $http.get(ApiUtil.fullPath('/locality_details/localities'), {params: {city: city}})
        .then(function (res) {
          var d = res.data.data;
          LocalityDetail.localities[city] = d;
          return d;
        });
    };

    return LocalityDetail;
  };

  angular
    .module('app.api')
    .factory('ApiLocalityDetail', [
      'ApiUtil',
      '$http',
      '$q',
      Factory
    ]);
}());
