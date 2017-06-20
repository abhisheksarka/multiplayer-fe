'use strict';

(function () {
  function Factory (ApiUtil, $http, $q, localStorageService) {
    function User () { };

    User.signUp = function (user, state) {
      var defer = $q.defer();
      $http
      .post(ApiUtil.fullPath('/user/create'), user)
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
        User._createSession(res.data.info.token);
      }, function(res) {
        ApiUtil.handleResponse(res, defer, state);
      });
      return defer.promise;
    };

    User._createSession = function (sessionToken) {
      localStorageService.set("sessionToken", sessionToken);
    };

    User.isSignedIn = function () {
      return (localStorageService.get("sessionToken") ? true : false);
    };

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
