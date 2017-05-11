'use strict';

(function () {
  function Factory ($mdDialog) {

    function Dialog () { };

    Dialog.error = function (msg) {
      return $mdDialog.show(
        $mdDialog.alert().title('Error').ok('Got it!').textContent(msg)
      );
    };

    Dialog.notify = function (msg) {
      return $mdDialog.show(
        $mdDialog.alert().title('Notice').ok('Got it!').textContent(msg)
      );
    };

    Dialog.confirm = function (msg) {
      var confirm = $mdDialog.confirm()
        .title('Are you sure?')
        .textContent(msg)
        .ok('Proceed')
        .cancel('Cancel');
      return $mdDialog.show(confirm);
    };

    Dialog.prompt = function (value) {
      var prompt = $mdDialog.prompt()
        .ok('Proceed')
        .initialValue(value)
        .cancel('Cancel');
      return $mdDialog.show(prompt);
    };

    return Dialog;
  };

  angular
    .module('app.lib')
    .factory('Dialog', [
      '$mdDialog',
      Factory
    ]);
}());
