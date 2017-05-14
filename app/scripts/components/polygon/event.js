'use strict';

(function () {
  function Factory (MouseBox, $rootScope) {

    function Model (polygonModel) {
      this.polygonModel = polygonModel;
    };

    var proto = Model.prototype;

    proto.register = function () {
      this.registerMouseEvents();
    };

    proto.registerMouseEvents = function () {
      var self = this,
          pm = self.polygonModel,
          showMouseBox = _.debounce(self._showMouseBox, 100),
          hideMouseBox = _.debounce(self._hideMouseBox, 100);

      google.maps.event.addListener(pm.gPolygon, 'mouseover', function (event) {
        showMouseBox(event, self);
      });
      google.maps.event.addListener(pm.gPolygon, 'mouseout', function (event) {
        hideMouseBox(event, self);
      });
    };


    proto._showMouseBox = function (event, self) {
      MouseBox.show(event.Ba.clientX, event.Ba.clientY, { title: self.polygonModel.name });
      self._updateNgScope();
    };

    proto._hideMouseBox = function (event, self) {
      // MouseBox.hide();
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
      Factory
    ]);
}());
