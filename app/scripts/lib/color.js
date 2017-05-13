'use strict';

(function () {
  function Factory () {
    function Color () { };

    Color.colors = {
      red: '#F44336',
      orange: '#FF9800',
      green: '#4CAF50',
      lime: '#CDDC39',
      yellow: '#FFEB3B'
    };

    Color._last = null;

    Color.generate = function () {
      var cs = [];

      angular.forEach(Color.colors, function (item) {
        cs.push(item);
      });

      var c = (cs[Math.floor(Math.random()*cs.length)]);
      if (c == Color._last) {
        var i = cs.indexOf(c);
        if (i >= (cs.length -1)) {
          c = cs[0];
        } else {
          c = cs[i+1];
        };
      };
      Color._last = c;
      return c;
    };

    return Color;
  };

  angular
    .module('app.lib')
    .factory('Color', [
      Factory
    ]);
}());
