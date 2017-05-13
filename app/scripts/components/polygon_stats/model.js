'use strict';

(function () {
  function Factory (Bucket, DATA_POINTS) {
    function Model (params) {
      this.params = { };
      _.keys(DATA_POINTS).forEach(function (item) {
        this.params[item] = params[item];
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
