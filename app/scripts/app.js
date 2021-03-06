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
    'LocalStorageModule',
    'btford.socket-io',

    'app.lib',
    'app.api',
    'app.components',
    'app.pages'
  ])
  .factory('$socket', function (socketFactory) {
    function SocketBuilder(ns) {
      return socketFactory({
        ioSocket: io.connect(window.GAME_DOME_CONFIG.ROOT_SOCKET_PATH + ns),
      });
    };
    return SocketBuilder;
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
    $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
  })
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('gamedome');
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/scripts/pages/index/template.html',
        controller: 'PageIndexController',
        controllerAs: 'pi'
      })
      .when('/all_games', {
        templateUrl: 'app/scripts/pages/all_games/template.html',
        controller: 'AllGamesController',
        controllerAs: 'pg'
      })
      .when('/play', {
        templateUrl: 'app/scripts/pages/play/template.html',
        controller: 'PlayController',
        controllerAs: 'pc'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider
    .interceptors
    .push([
      'localStorageService',
      function (localStorageService) {
        return {
          request: function(config, params) {
            try {
              var s = localStorageService.get('sessionData') || { };
              config.headers['Authorization'] = 'JWT ' + s.token;
            } catch (err) { }
            return config;
          }
        };
      }
    ]);
  }]);
