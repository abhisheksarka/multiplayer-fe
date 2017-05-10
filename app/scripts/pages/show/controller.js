/**
 * Controller for the landing page
 */

'use strict';

(function () {
  function Controller (
    $scope,
    MAP_STYLE,
    All_POLYGONS,
    PolygonModel
  ) {
    var ps = this;
    ps.mapStyle = MAP_STYLE;
    ps.selectedCity = "Bengaluru";

    $scope.$on('mapInitialized', function (event, map) {
      google.maps.event.trigger(map, 'resize');
      angular.forEach(All_POLYGONS, function (p) {
        var path = google.maps.geometry.encoding.decodePath(p.polygon)
        new PolygonModel({path: path}, map);
      });
    });
  }

  angular
    .module('app.pages.show')
    .controller('PageShowController', [
      '$scope',
      'MAP_STYLE',
      'All_POLYGONS',
      'PolygonModel',
      Controller
    ]);
}());
