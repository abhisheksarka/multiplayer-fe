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
