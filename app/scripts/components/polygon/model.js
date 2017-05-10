'use strict';

(function () {
  function Factory (Color) {
    function Model (params, map) {
      this.gPolygon = new google.maps.Polygon(angular.extend(params, Model.defaults()));
      this.map = map;
      this.gPolygon.setMap(map);
    };

    var proto = Model.prototype;

    Model.defaults = function () {
      var color = Color.generate();

      return {
        strokeColor: color,
        strokeWeight: 0.5,
        strokeOpacity: 0.5,
        fillColor: color,
        fillOpacity: 0.35
      };
    };

    return Model;
  };

  angular
    .module('app.components.polygon')
    .factory('PolygonModel', [
      'Color',
      Factory
    ]);
}());
