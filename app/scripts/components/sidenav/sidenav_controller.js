'use strict';

(function () {
  function Controller (
    $scope
  ) {
    var sc = this;
  };

  angular
  .module('app.components.sidenav')
  .controller('SidenavController', [
    '$scope',
    Controller
  ]);
}());
