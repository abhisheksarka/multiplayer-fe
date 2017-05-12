'use strict';

(function () {
  function Factory (Bucket) {
    function Model (name, params) {
      this.name = name;
      this.params = params;
    };

    var proto = Model.prototype;

    Model.all = { };
    Model.keys = { };

    proto.add = function ( ) {
      var self = this;
      Model.all[self.name] = self;
      return true;
    };

    proto.remove = function ( ) {
      var self = this;
      delete(Model.all[self.name]);
      return true;
    };

    return Model;
  };

  angular
    .module('app.components.polygonStat')
    .factory('PolygonStatModel', [
      Factory,
      'Bucket',
    ]);
}());
