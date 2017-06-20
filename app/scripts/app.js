'use strict';

/**
 * @ngdoc overview
 * @name mGameApp
 * @description
 * # mGameApp
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngTouch',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ngStorage',

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
      .otherwise({
        redirectTo: '/'
      });
  })
