'use strict';

(function () {
  function Factory (
    PolygonStatsModel,
    PolygonEvent,
    GmapUtil
  ) {
    function Model (params, map) {
      this.name = params.name;
      this.city = params.city;
      this.cid = this.name.toLowerCase();
      this.lat = params.latitude;
      this.lng = params.longitude;
      this.gPolygon = new google.maps.Polygon(angular.extend({path: params.polygonPath}, Model.defaults()));
      this.map = map;
      this.stats = null;
      this.event = new PolygonEvent(this);
      this.event.register();
    };

    Model.all = { };

    var proto = Model.prototype;

    Model.defaults = function () {
      var color = '#795548';

      return {
        strokeColor: '#000',
        strokeWeight: 0.5,
        strokeOpacity: 1,
        fillColor: color,
        fillOpacity: 0.8
      };
    };

    proto.remove = function ( ) {
      var self = this;

      delete(Model.all[self.cid]);
      self.gPolygon.setMap(null);

      return true;
    };

    proto.add = function ( ) {
      var self = this;

      Model.all[self.cid] = self;
      self.gPolygon.setMap(self.map);

      return true;
    };

    proto.attachStats = function (statsParams) {
      this.stats = new PolygonStatsModel(statsParams);
    }

    proto.focus = function () {
      this.gPolygon.setOptions({
        strokeWeight: 3,
        fillOpacity: 1
      });
    };

    proto.unfocus = function () {
      this.gPolygon.setOptions({
        strokeWeight: 0.5,
        fillOpacity: 0.8
      });
    };

    Model.removeAll = function () {
      angular.forEach(Model.all, function (item) {
        item.remove();
      });
    };

    return Model;
  };

  angular
    .module('app.components.polygon')
    .factory('PolygonModel', [
      'PolygonStatsModel',
      'PolygonEvent',
      'GmapUtil',
      Factory
    ]);
}());
