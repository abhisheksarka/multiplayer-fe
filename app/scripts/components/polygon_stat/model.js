'use strict';

(function () {
  function Factory (Bucket) {
    function Model (name, params) {
      this.name = name;
      this.params = params;
    };

    var proto = Model.prototype;

    Model.all = { };

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

    Model.getBuckets = function () {
      var B = Bucket;
      Bucket.generate(data, 5, Model.min, Model.max);
    };

    return Model;
  };

  angular
    .module('app.components.polygonStat')
    .factory('PolygonStatModel', [
      'Bucket',
      Factory
    ]);
}());
