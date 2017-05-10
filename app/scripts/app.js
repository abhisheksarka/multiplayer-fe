'use strict';

/**
 * @ngdoc overview
 * @name lokalApp
 * @description
 * # lokalApp
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngTouch',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMap',
    'ngMaterial',
    'angularMoment',
    'ngLocationUpdate',

    'pageIndex'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/scripts/pages/index/template.html',
        controller: 'PageIndexController',
        controllerAs: 'pi'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
