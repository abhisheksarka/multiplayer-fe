angular.module('app.lib').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/scripts/components/game_container/template.html',
    "<div layout=\"row\" id=\"game-container\">\n" +
    "  <div flex=\"20\" class=\"game-players\">\n" +
    "    <md-list flex>\n" +
    "      <md-list-item ng-repeat=\"player in gcc.players\">\n" +
    "        <img ng-src=\"https://cdn2.iconfinder.com/data/icons/weird-social-icon-pack/70/twitch-128.png\" class=\"md-avatar\" alt=\"{{player.name}}\" />\n" +
    "        <p>\n" +
    "          {{ player.username }}\n" +
    "        </p>\n" +
    "      </md-list-item>\n" +
    "    </md-list>\n" +
    "    <div layout-padding>\n" +
    "      <p ng-if=\"gcc.players.length < 2\">Waiting for at least one more player...</p>\n" +
    "      <md-input-container class=\"md-block\" ng-if=\"gcc.players.length >= 2\" ng-init=\"gcc.state.init()\">\n" +
    "        <md-button class=\"md-raised md-accent md-round\" ng-click=\"gcc.start()\" ng-disabled=\"gcc.state.isSuccess\">\n" +
    "          <span ng-if=\"gcc.state.isStart\">Please wait...</span>\n" +
    "          <span ng-if=\"!gcc.state.isSuccess\">Start</span>\n" +
    "          <span ng-if=\"gcc.state.isSuccess\">Game On</span>\n" +
    "        </md-button>\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div flex=\"80\" lass=\"game-board\">\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/components/games_list/template.html',
    "<div id=\"games-list\">\n" +
    "  <md-list flex>\n" +
    "    <md-list-item ng-repeat=\"game in gl.games\">\n" +
    "      <img ng-src=\"https://cdn4.iconfinder.com/data/icons/gradient-ui-1/512/games-512.png\" class=\"md-avatar\" alt=\"{{game.name}}\" />\n" +
    "      <p>\n" +
    "        {{ game.name }}\n" +
    "        <br>\n" +
    "        <small>\n" +
    "          <span ng-if=\"game.status\">Available</span>\n" +
    "          <span ng-if=\"!game.status\">Coming soon</span>\n" +
    "        </small>\n" +
    "      </p>\n" +
    "      <md-button class=\"md-secondary md-accent md-round md-raised\" ng-disabled=\"!game.status || game.state.isStart\" ng-click=\"gl.join(game)\">\n" +
    "        <span ng-if=\"game.state.isStart\">Joining</span>\n" +
    "        <span ng-if=\"!game.state.isStart\">Join</span>\n" +
    "      </md-button>\n" +
    "    </md-list-item>\n" +
    "  </md-list>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/components/sign_in_form/template.html',
    "<div id=\"sign-in-form\">\n" +
    "  <form name=\"signInForm\">\n" +
    "    <md-input-container class=\"md-block\">\n" +
    "      <label>Username</label>\n" +
    "      <input ng-model=\"sufc.user.username\" required name=\"username\">\n" +
    "    </md-input-container>\n" +
    "\n" +
    "    <md-input-container class=\"md-block\">\n" +
    "      <label>Password</label>\n" +
    "      <input ng-model=\"sufc.user.password\" type=\"password\" required name=\"password\">\n" +
    "    </md-input-container>\n" +
    "\n" +
    "    <md-input-container class=\"md-block\" style=\"text-align:center;\">\n" +
    "      <md-button class=\"md-raised md-accent md-round\" ng-click=\"sufc.signIn($event)\" ng-disabled=\"!signInForm.$valid || sufc.state.isStart\">Sign in</md-button>\n" +
    "    </md-input-container>\n" +
    "  </form>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/components/sign_up_form/template.html',
    "<div id=\"sign-up-form\">\n" +
    "  <form name=\"signUpForm\">\n" +
    "    <md-input-container class=\"md-block\">\n" +
    "      <label>Username</label>\n" +
    "      <input ng-model=\"sufc.user.username\" required name=\"username\">\n" +
    "    </md-input-container>\n" +
    "\n" +
    "    <md-input-container class=\"md-block\">\n" +
    "      <label>Password</label>\n" +
    "      <input ng-model=\"sufc.user.password\" type=\"password\" required name=\"password\">\n" +
    "    </md-input-container>\n" +
    "\n" +
    "    <md-input-container class=\"md-block\" style=\"text-align:center;\">\n" +
    "      <md-button class=\"md-raised md-primary md-round\" ng-click=\"sufc.signUp($event)\" ng-disabled=\"!signUpForm.$valid || sufc.state.isStart\">Sign up</md-button>\n" +
    "    </md-input-container>\n" +
    "  </form>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/pages/all_games/template.html',
    "<div class=\"page-all-games\">\n" +
    "  <div layout=\"row\" flex layout-align=\"center\">\n" +
    "    <h1 class=\"md-display-3\">Available Games</h1>\n" +
    "  </div>\n" +
    "  <div layout=\"row\" flex layout-align=\"center\">\n" +
    "    <games-list game-play=\"pg.gamePlay\"></games-list>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/pages/index/template.html',
    "<div class=\"page-index\" layout-align=\"center\">\n" +
    "  <div layout=\"row\" flex layout-align=\"center\">\n" +
    "    <sign-up-form ng-if=\"pi.tabs.signUp\"></sign-up-form>\n" +
    "    <sign-in-form ng-if=\"pi.tabs.signIn\"></sign-in-form>\n" +
    "  </div>\n" +
    "  <div layout=\"row\" layout-align=\"center\">\n" +
    "    <p>\n" +
    "      <small>\n" +
    "        <a ng-click=\"pi.open('signUp')\">Sign Up</a>&nbsp;|&nbsp;<a ng-click=\"pi.open('signIn')\">Sign In</a>\n" +
    "      </small>\n" +
    "    </p>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/pages/play/template.html',
    "<div class=\"page-all-play\">\n" +
    "  <game-container ng-if=\"pc.gamePlay.id\"></game-container>\n" +
    "</div>\n"
  );

}]);
