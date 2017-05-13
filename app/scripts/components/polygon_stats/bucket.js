'use strict';

(function () {
  function Factory (Bucket, PolygonModel) {

    function Model() { };

    var proto = Model.prototype;

    Model.buckets = [];
    Model.min = null;
    Model.max = null;

    Model.generate = function (city, type) {
      var res = [ ];

      angular.forEach(PolygonModel.all, function (item, key) {
        if (item.city == city) {
          item.stats = item.stats || { params: { }};
          res.push(item.stats.params[type]);
        };
      });

      Model.min = _.min(res);
      Model.max = _.max(res);
      Model.buckets = Bucket.generate(res, 5, Model.min, Model.max);
    };

    Model.findBucket = function (value) {
      var bucket;

      Model.buckets.forEach( function (item, i) {
        var max = _.max(item),
            min = _.min(item);

        if (value >= min && value <= max) {
          bucket = i;
        };
      });

      return bucket;
    };

    return Model;
  };

  angular
    .module('app.components.polygonStats')
    .factory('PolygonStatsBucket', [
      'Bucket',
      'PolygonModel',
      Factory
    ]);
}());
