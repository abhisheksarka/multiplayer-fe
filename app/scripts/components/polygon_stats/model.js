'use strict';

(function () {
  function Factory (Bucket, DATA_POINTS) {
    function Model (params) {
      var self = this;
      self.params = { };
      _.keys(DATA_POINTS).forEach(function (item) {
        self.params[item] = params[item];
      });
    };

    var proto = Model.prototype;

    return Model;
  };

  angular
    .module('app.components.polygonStats')
    .factory('PolygonStatsModel', [
      'Bucket',
      'DATA_POINTS',
      Factory
    ]);
}());
