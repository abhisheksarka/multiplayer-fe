'use strict';

(function () {
  function Controller (
    $scope,
    Color
  ) {
    var lc = this,
        c = Color.colors;

    lc.keys = [
      {
        key: 'Very High',
        color: c.red
      },
      {
        key: 'High',
        color: c.orange
      },
      {
        key: 'Medium',
        color: c.green
      },
      {
        key: 'Low',
        color: c.lime
      },
      {
        key: 'Very Low',
        color: c.yellow
      }
    ];

  }

  angular
    .module('app.components.legend')
    .controller('LegendController', [
      '$scope',
      'Color',
      Controller
    ]);
}());
