'use strict';

(function () {
  function Controller (
    $scope,
    MAP_STYLE,
    PolygonModel,
    ApiLocalityDetail
  ) {
    var dmc = this;

    dmc.mapStyle = MAP_STYLE;
    dmc.map = null;

    $scope.$on('mapInitialized', function (event, map) {
      google.maps.event.trigger(map, 'resize');
      dmc.map = map;
    });

    $scope.$watch('selectedCity', function (nv, ov) {
      if (nv && nv != ov) {
        populatePolygons(nv);
      }
    });

    function populatePolygons (city) {
      PolygonModel.removeAll();

      if (_.isEmpty(ApiLocalityDetail.localities[city])) {

        ApiLocalityDetail.getLocalities(city)
        .then(function(data){
          angular.forEach(data, function (item) {
            item.polygon = google.maps.geometry.encoding.decodePath(item.polygon);
            var p = new PolygonModel(item, dmc.map);
            p.add();
          });

          goToLocation();
        });
      } else {
        goToLocation();
      };
    };

    function goToLocation () {
      var bounds= new google.maps.LatLngBounds();
      angular.forEach(PolygonModel.all, function (item) {
        var paths = item.gPolygon.getPaths();
        paths.forEach(function (path) {
          var ar = path.getArray();
          for (var i=0, l=ar.length; i<l; i++){
             bounds.extend(ar[i]);
           };
         });
      });
      dmc.map.fitBounds(bounds)
      dmc.map.setZoom(11);
    };
  }

  angular
    .module('app.components.distributionMap')
    .controller('DistributionMapController', [
      '$scope',
      'MAP_STYLE',
      'PolygonModel',
      'ApiLocalityDetail',
      Controller
    ]);
}());
