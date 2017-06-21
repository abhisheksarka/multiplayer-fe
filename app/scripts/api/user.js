'use strict';

(function () {
  function Factory (ApiUtil, $http, $q, localStorageService) {
    function User () { };

    User.signUp = function (user, state) {
      var defer = $q.defer();
      $http
      .post(ApiUtil.fullPath('/user'), user)
      .then(function (res) {
        ApiUtil.handleResponse(res, defer, state);
      }, function(res) {
        ApiUtil.handleResponse(res, defer, state);
      });
      return defer.promise;
    };

    User.signIn = function (user, state) {
      var defer = $q.defer();
      $http
      .post(ApiUtil.fullPath('/auth/login'), user)
      .then(function (res) {
        ApiUtil.handleResponse(res, defer, state);
        User._createSession(res.data.info);
      }, function(res) {
        ApiUtil.handleResponse(res, defer, state);
      });
      return defer.promise;
    };

    User._createSession = function (sessionData) {
      localStorageService.set("sessionData", sessionData);
    };

    User.isSignedIn = function () {
      var s = localStorageService.get("sessionData") || { };
      return (s.token ? true : false);
    };

    User.current = function () {
      var s = localStorageService.get("sessionData") || { };
      return {
        id: s.id,
        username: s.username
      };
    }

    return User;
  };

  angular
    .module('app.api')
    .factory('ApiUser', [
      'ApiUtil',
      '$http',
      '$q',
      'localStorageService',
      Factory
    ]);
}());
