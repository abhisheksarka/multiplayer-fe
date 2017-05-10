'use strict';

(function () {
  function Factory () {
    function Model (params, map) {
      this.gPolygon = new google.maps.Polygon(angular.extend(params, Model.defaults));
      this.map = map;
      this.gPolygon.setMap(map);
    };

    var proto = Model.prototype;

    Model.defaults = {
      strokeColor: '#ff4081',
      strokeWeight: 0.5,
      strokeOpacity: 0.5,
      fillColor: "#ff4081",
      fillOpacity: 0.35
    };
    return Model;
  };

  angular
    .module('app.components.polygon')
    .factory('PolygonModel', [
      Factory
    ]);
}());
