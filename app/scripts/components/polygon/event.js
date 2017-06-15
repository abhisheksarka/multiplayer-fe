'use strict';

(function () {
  function Factory (MouseBox, $rootScope, TrendDialog) {

    function Model (polygonModel) {
      this.polygonModel = polygonModel;
    };

    var proto = Model.prototype;

    proto.register = function () {
      this.registerMouseEvents();
      this.registerClick();
    };

    proto.registerMouseEvents = function () {
      var self = this,
          pm = self.polygonModel;

      google.maps.event.addListener(pm.gPolygon, 'mousemove', function (event) {
        self._showMouseBox(event);
        pm.focus();
      });

      google.maps.event.addListener(pm.gPolygon, 'mouseout', function (event) {
        self._hideMouseBox(event);
        pm.unfocus();
      });
    };

    proto.registerClick = function () {
      var self = this,
          pm = self.polygonModel;
      google.maps.event.addListener(pm.gPolygon, 'click', function (event) {
        TrendDialog.open(pm);
        pm.focus();
      });
    };

    proto._showMouseBox = function (event) {
      var self = this;
      MouseBox.show(
        event.ta.clientX, event.ta.clientY,
        {
          title: self.polygonModel.name,
          stats: self.polygonModel.stats,
          color: self.polygonModel.gPolygon.fillColor
        }
      );
      self._updateNgScope();
    };

    proto._hideMouseBox = function (event, self) {
      var self = this;
      MouseBox.hide();
      self._updateNgScope();
    };

    proto._updateNgScope = function () {
      // Since these events are triggered outside of angular
      // we need to update the scope since angular has no way to
      // figure that out. Not a good practice though
      $rootScope.$digest();
    };

    return Model;
  };

  angular
    .module('app.components.polygon')
    .factory('PolygonEvent', [
      'MouseBox',
      '$rootScope',
      'TrendDialog',
      Factory
    ]);
}());
