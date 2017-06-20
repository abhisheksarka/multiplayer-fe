'use strict';

(function () {
  function Controller (
    $scope,
    User
  ) {
    var sufc = this;
    sufc.user = { };

    sufc.signUp = function () {
      User.signUp(sufc.user);
    }
  }

  angular
    .module('app.components.signUpForm')
    .controller('SignUpFormController', [
      '$scope',
      'ApiUser',
      Controller
    ]);
}());
