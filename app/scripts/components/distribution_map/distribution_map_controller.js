'use strict';

(function () {
  function Controller (
    $scope,
    MAP_STYLE,
    PolygonModel
  ) {
    var dmc = this;

    dmc.mapStyle = MAP_STYLE;
    dmc.selectedCity = "Bengaluru";

    $scope.$on('mapInitialized', function (event, map) {
      google.maps.event.trigger(map, 'resize');
      // angular.forEach(All_POLYGONS, function (p) {
      //   var path = google.maps.geometry.encoding.decodePath(p.polygon)
      //   new PolygonModel({path: path}, map);
      // });
    });
  }

  angular
    .module('app.components.distributionMap')
    .controller('DistributionMapController', [
      '$scope',
      'MAP_STYLE',
      'PolygonModel',
      Controller
    ]);
}());
