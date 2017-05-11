'use strict';

(function () {
  function Factory (ApiUtil, $http, $q) {
    function LocalityDetail () { };

    LocalityDetail.cities = [ ];

    LocalityDetail.getCities = function () {
      return $http.get(ApiUtil.fullPath('/locality_details/cities'))
        .then(function (res) {
          res.data.data.forEach(function(item){
            LocalityDetail.cities.push(item);
          })
          return LocalityDetail.cities;
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
