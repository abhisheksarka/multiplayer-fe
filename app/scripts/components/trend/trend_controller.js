'use strict';

(function () {
  function Controller (
    $scope,
    State,
    ApiTrend,
    TREND_DATA_POINTS,
    $timeout
  ) {
    var tc = this,
        INVERTED_TREND_DATA_POINTS = _.invert(TREND_DATA_POINTS);
    tc.state = new State();

    function load() {
      tc.state.start();
      ApiTrend
      .getTrendFor($scope.trendConfig.city, $scope.trendConfig.localityDetailId)
      .then(function (res) {
        tc.state.success();
        $timeout(function() {
          buildChart(res)
        });
      }, function () {
        tc.state.error();
      });
    };

    function toC3(data) {
      var columns = [];
      columns.push(['x']);

      angular.forEach(TREND_DATA_POINTS, function (v, k) {
        columns.push([v]);
      });

      angular.forEach(data, function (d) {
        angular.forEach(columns, function (c, i) {
          var date = new Date(d.date);
          if (i == 0) {
            c.push(date);
          } else {
            c.push((d[INVERTED_TREND_DATA_POINTS[c[0]]] || 0));
          };
        })
      });
      return columns;
    };

    function buildChart(data) {
      c3.generate({
        bindto: '#trend-display',
        data: {
          x: 'x',
          columns: toC3(data),
          hide: true
        },
        zoom: {
          enabled: true,
          rescale: true
        },
        axis: {
          x: {
            type: 'timeseries',
            tick: {
              format: '%Y-%m-%d'
            }
          }
        },
        grid: {
          x: {
            show: true
          },
          y: {
            show: true
          }
        }
      });
      $scope.onRendered();
    };

    load();
  };

  angular
    .module('app.components.trend')
    .controller('TrendController', [
      '$scope',
      'State',
      'ApiTrend',
      'TREND_DATA_POINTS',
      '$timeout',
      Controller
    ]);
}());
