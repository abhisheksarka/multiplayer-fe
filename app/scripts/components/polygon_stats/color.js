'use strict';

(function () {
  function Factory (PolygonStatsBucket) {
    function Color () { };

    Color.colors = {
      minimum: '#FFEB3B',
      low: '#8BC34A',
      medium: '#4CAF50',
      high: '#FF9800',
      maximum: '#F44336'
    };

    Color.default = '#795548';

    Color.findColor = function (value) {
      var bucket = PolygonStatsBucket.findBucket(value);
      return _.values(Color.colors)[bucket];
    };

    return Color;
  };

  angular
    .module('app.components.polygonStats')
    .factory('Color', [
      'PolygonStatsBucket',
      Factory
    ]);
}());
