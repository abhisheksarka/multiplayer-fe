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

    'pageIndex',
    'pageShow'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/scripts/pages/index/template.html',
        controller: 'PageIndexController',
        controllerAs: 'pi'
      })
      .when('/show', {
        templateUrl: 'app/scripts/pages/show/template.html',
        controller: 'PageShowController',
        controllerAs: 'ps'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
