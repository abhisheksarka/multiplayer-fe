'use strict';

(function () {
  function Factory (API_ROOT_PATH, State, $q) {
    function Util () { };

    Util.fullPath = function (path) {
      return API_ROOT_PATH + path;
    };


    Util.handleResponse = function (defer, state) {
      return function(response) {
        var res = response.data
        if (res.success) {
          defer.resolve(res);
          state.success();
        } else {
          defer.reject(res);
          state.error(res.info);
        };
      }
    }

    return Util;
  };

  angular
    .module('app.api')
    .factory('ApiUtil', [
      'API_ROOT_PATH',
      'State',
      'Dialog',
      '$q',
      Factory
    ]);
}());
