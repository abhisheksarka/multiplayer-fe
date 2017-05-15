'use strict';

(function () {
  function Factory () {

    function Service () { };
    Service.all = { };

    Service.state = {
      posX: null,
      posY: null,
      show: false
    };

    Service.data = {
      title: null,
      stats: { }
    };

    Service.config = {
      color: null
    }

    Service.show = function (posX, posY, data) {
      var s = Service.state,
          d = Service.data,
          c = Service.config

      s.posX = posX;
      s.posY = posY;

      d.title = data.title;
      d.stats = data.stats;

      c.color = data.color;

      s.show = true;
    };

    Service.hide = function () {
      var s = Service.state;

      s.show = false;
      s.posX = null;
      s.posY = null;
    };

    var proto = Service.prototype;

    return Service;
  };

  angular
    .module('app.components.mouseBox')
    .factory('MouseBox', [
      Factory
    ]);
}());
