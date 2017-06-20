'use strict';

(function () {
  function Controller (
    $scope,
    User,
    $window,
    State
  ) {
    var sufc = this;
    sufc.user = { };
    sufc.state = State.getInstance();

    sufc.signIn = function () {
      sufc.state.start();
      User.signIn(sufc.user, sufc.state).then(function () {
        $window.location.reload();
      });
    }
  }

  angular
    .module('app.components.signInForm')
    .controller('SignInFormController', [
      '$scope',
      'ApiUser',
      '$window',
      'State',
      Controller
    ]);
}());
