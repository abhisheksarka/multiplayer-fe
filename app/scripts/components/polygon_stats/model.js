'use strict';

(function () {
  function Factory (Bucket, DATA_POINTS) {
    function Model (params) {
      var self = this;
      self.rawParams = params;
      self.params = { };
      angular.forEach(DATA_POINTS, function(item, key){
        if (item.formula) {
          self.params[key] = item.formula(params);
        } else {
          self.params[key] = params[key];
        }
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
