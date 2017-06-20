'use strict';

(function () {
  function Factory (ApiUtil, $http, $q, $localStorage) {
    function User () { };

    User.signUp = function (user) {
      var defer = $q.defer();
      $http
      .post(ApiUtil.fullPath('/user/create'), user)
      .then(function (res) {
        ApiUtil.handleResponse(res, defer);
      }, function(res) {
        ApiUtil.handleResponse(res, defer);
      });
      return defer.promise;
    };

    User.signIn = function (user) {
      var defer = $q.defer();
      $http
      .post(ApiUtil.fullPath('/auth/login'), user)
      .then(function (res) {
        ApiUtil.handleResponse(res, defer);
        User._createSession(res.token);
      }, function(res) {
        ApiUtil.handleResponse(res, defer);
      });
      return defer.promise;
    };

    User._createSession = function (sessionToken) {
      $localStorage.sessionToken = sessionToken;
    };

    return User;
  };

  angular
    .module('app.api')
    .factory('ApiUser', [
      'ApiUtil',
      '$http',
      '$q',
      '$localStorage',
      Factory
    ]);
}());
