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

    sufc.signUp = function () {
      sufc.state.start();
      User.signUp(sufc.user, sufc.state).then(_signIn);
    };

    function _signIn() {
      User.signIn(sufc.user, sufc.state).then(_reload);
    };

    function _reload() {
      $window.location.reload();
    }
  }

  angular
    .module('app.components.signUpForm')
    .controller('SignUpFormController', [
      '$scope',
      'ApiUser',
      '$window',
      'State',
      Controller
    ]);
}());
