'use strict';

(function () {
  function Factory ($mdToast) {

    function Toast () { };

    Toast.notify = function (msg) {
      $mdToast.show(
        $mdToast.simple().position('top right').textContent(msg).hideDelay(3000)
      );
    };

    return Toast;
  };

  angular
    .module('app.lib')
    .factory('Toast', [
      '$mdToast',
      Factory
    ]);
}());
