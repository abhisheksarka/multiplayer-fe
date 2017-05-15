'use strict';

(function () {
  function Controller (
    $scope,
    ApiLocalityDetail,
    PolygonModel
  ) {
    var sc = this,
        localitiesRaw = ApiLocalityDetail.localities[$scope.selectedCity];

    sc.selectedPolygon = null;
    sc.localities = localitiesRaw.map(function (item) { return item.name; });

    sc.querySearch = function(query) {
      var results = query ? sc.localities.filter(createFilterFor(query)) : sc.localities;
      return results;
    }

    sc.selectedItemChange = function (item) {
      if (sc.selectedPolygon) {
        sc.selectedPolygon.unfocus();
      };
      if (item) {
        sc.selectedPolygon = PolygonModel.all[angular.lowercase(item)];
        sc.selectedPolygon.focus();
        goToLocation();
      } else {
        sc.selectedPolygon.map.setZoom(11);
      }
    };


    function goToLocation () {
      var bounds= new google.maps.LatLngBounds(),
          polygonModel = sc.selectedPolygon;

      polygonModel.map.setCenter(new google.maps.LatLng(polygonModel.lat, polygonModel.lng));
      polygonModel.map.setZoom(12);
    };


    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(locality) {
        locality = angular.lowercase(locality);
        return (locality.indexOf(lowercaseQuery) === 0);
      };
    };
  }

  angular
    .module('app.components.search')
    .controller('SearchController', [
      '$scope',
      'ApiLocalityDetail',
      'PolygonModel',
      Controller
    ]);
}());
