'use strict';

(function () {
  function Factory ($mdToast) {
    var states = {
      init: 'Init',
      start: 'Start',
      success: 'Success',
      error: 'Error'
    };

    function State (opts) {
      opts = opts || { };
      this.state = states.init;
      this.name = opts.name;
      this.setIsValues(this.state);
      if (!opts.skipRegister) {
        State.queue.push(this);
      };
    };

    State.instance = null;

    State.getInstance = function (opts) {
      if (!State.instance) {
        State.instance = new State(opts);
      };

      return State.instance;
    };

    State.queue = [ ];
    var proto = State.prototype;

    proto.start = function (msg) {
      var self = this;
      self.state = states.start;
      self.setIsValues(self.state);
      State.queue.push(self);
      self.showMessage(msg);
    };

    proto.success = function (msg) {
      this.state = states.success;
      this.setIsValues(this.state);
      this.showMessage(msg);
    };

    proto.error = function (msg) {
      msg = msg || 'Failed to process this request. Try again?';
      this.state = states.error;
      this.setIsValues(this.state);
      this.showMessage(msg);
    };

    proto.init = function (msg) {
      this.state = states.init;
      this.setIsValues(this.state);
    };

    proto.setIsValues = function (state) {
      var self = this;
      angular.forEach(states, function (s) {
        self['is' + s] = (s == state);
      });
    };

    proto.showMessage = function (msg) {
      if (!msg) { return; }
      $mdToast.show(
        $mdToast.simple().position('top left right').textContent(msg).hideDelay(3000)
      );
    };

    return State;
  };

  angular
    .module('app.lib')
    .factory('State', [
      '$mdToast',
      Factory
    ]);
}());
