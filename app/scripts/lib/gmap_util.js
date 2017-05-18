'use strict';

(function () {
  function Factory () {
    function GmapUtil () { };

    GmapUtil.goToPolygon = function (polygonModel, zoom) {
      var bounds = new google.maps.LatLngBounds();

      polygonModel.map.setCenter(new google.maps.LatLng(polygonModel.lat, polygonModel.lng));
      polygonModel.map.setZoom(zoom);
    };

    GmapUtil.polygonScreenCoords = function(polygonModel) {
      var latLng = new google.maps.LatLng(polygonModel.lat, polygonModel.lng),
          map = polygonModel.map,
          topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast()),
          bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest()),
          scale = Math.pow(2, map.getZoom()),
          worldPoint = map.getProjection().fromLatLngToPoint(latLng);

      return new google.maps.Point((worldPoint.x - bottomLeft.x) * scale, (worldPoint.y - topRight.y) * scale);
    };

    GmapUtil.addMarker = function (polygonModel) {
      var map = polygonModel.gPolygon.map,
          latLng = {lat: polygonModel.lat, lng: polygonModel.lng},
          marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: 'https://cdn4.iconfinder.com/data/icons/universal-7/614/2_-_Down-48.png',
            animation: google.maps.Animation.BOUNCE
          });
      return marker;
    };

    return GmapUtil;
  };

  angular
    .module('app.lib')
    .factory('GmapUtil', [
      Factory
    ]);
}());
