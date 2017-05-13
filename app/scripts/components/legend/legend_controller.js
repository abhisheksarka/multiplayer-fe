'use strict';

(function () {
  function Controller (
    $scope,
    Color,
    PolygonStatsBucket
  ) {
    var lc = this,
        c = Color.colors,
        b = PolygonStatsBucket.buckets;


    lc.keys = [
      {
        key: 'Maximum',
        color: c.maximum,
        min: _.min(b[4]),
        max: _.max(b[4]),
        count: b[4].length
      },
      {
        key: 'High',
        color: c.high,
        min: _.min(b[3]),
        max: _.max(b[3]),
        count: b[3].length
      },
      {
        key: 'Medium',
        color: c.medium,
        min: _.min(b[2]),
        max: _.max(b[2]),
        count: b[2].length
      },
      {
        key: 'Low',
        color: c.low,
        min: _.min(b[1]),
        max: _.max(b[1]),
        count: b[1].length
      },
      {
        key: 'Minimum',
        color: c.minimum,
        min: _.min(b[0]),
        max: _.max(b[0]),
        count: b[0].length
      }
    ];

  }

  angular
    .module('app.components.legend')
    .controller('LegendController', [
      '$scope',
      'Color',
      'PolygonStatsBucket',
      Controller
    ]);
}());
