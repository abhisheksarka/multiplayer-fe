'use strict';

(function () {
  function Directive () {
    return {
      scope: { },
      link: function ($scope, $element, $attributes) { },
      templateUrl: 'app/scripts/components/sign_in_form/template.html',
      controller: 'SignInFormController',
      controllerAs: 'sufc'
    }
  }

  angular
    .module('app.components.signInForm')
    .directive('signInForm', [
      Directive
    ]);
}());
