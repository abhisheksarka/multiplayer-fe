'use strict';

(function () {
  function Factory (API_ROOT_PATH, State, Dialog) {
    function Util () { };

    Util.fullPath = function (path) {
      return API_ROOT_PATH + path;
    };

    Util.sharedState = State.getInstance({name: 'api'});

    Util.canRequest = function () {
      var state = Util.sharedState;
      if (state.isInit || state.isSuccess) { return true; };

      if (state.isStart) {
        Dialog.notify("");
        return false;
      };

      if (state.isError) {
        Dialog.notify("");
        return false;
      };
    };

    Util.reset = function () {
      Util.sharedState.init();
    };

    return Util;
  };

  angular
    .module('app.api')
    .factory('ApiUtil', [
      'API_ROOT_PATH',
      'State',
      'Dialog',
      Factory
    ]);
}());
