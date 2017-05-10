'use strict';

(function () {
  function Factory () {
    function Color () { };

    Color.colors = [
      '#009688',
      '#F44336',
      '#2196F3'
    ];

    Color._last = null;

    Color.generate = function () {
      var cs = Color.colors,
        c = (cs[Math.floor(Math.random()*cs.length)])
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
