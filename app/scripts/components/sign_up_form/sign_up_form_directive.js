'use strict';

(function () {
  function Directive () {
    return {
      scope: { },
      link: function ($scope, $element, $attributes) { },
      templateUrl: 'app/scripts/components/sign_up_form/template.html',
      controller: 'SignUpFormController',
      controllerAs: 'sufc'
    }
  }

  angular
    .module('app.components.signUpForm')
    .directive('signUpForm', [
      Directive
    ]);
}());
