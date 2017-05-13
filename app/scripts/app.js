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

    'app.lib',
    'app.api',
    'app.components',
    'app.pages'
  ])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
    $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/scripts/pages/index/template.html',
        controller: 'PageIndexController',
        controllerAs: 'pi'
      })
      .when('/show/:city/:type', {
        templateUrl: 'app/scripts/pages/show/template.html',
        controller: 'PageShowController',
        controllerAs: 'ps'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
