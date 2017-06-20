'use strict';

(function () {
  function Controller (
    $scope,
    User
  ) {
    var sufc = this;
    sufc.user = { };

    sufc.signIn = function () {
      User.signIn(sufc.user);
    }
  }

  angular
    .module('app.components.signInForm')
    .controller('SignInFormController', [
      '$scope',
      'ApiUser',
      Controller
    ]);
}());
