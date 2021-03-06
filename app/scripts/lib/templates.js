angular.module('app.lib').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/scripts/components/game_container/template.html',
    "<div layout=\"row\" id=\"game-container\">\n" +
    "  <div flex=\"20\" class=\"game-players\" ng-if=\"gcc.config.status != 'ended'\">\n" +
    "    <md-list flex>\n" +
    "      <md-list-item ng-repeat=\"player in gcc.players\">\n" +
    "        <img ng-src=\"https://cdn2.iconfinder.com/data/icons/weird-social-icon-pack/70/twitch-128.png\" class=\"md-avatar\" alt=\"{{player.name}}\" />\n" +
    "        <p>\n" +
    "          {{ player.username }}<br>\n" +
    "          <strong>\n" +
    "            <small>\n" +
    "              <span ng-bind=\"player.gameData.score || 0\"></span>&nbsp;<span ng-bind=\"gcc.config.unit\"></span>\n" +
    "            </small>\n" +
    "          </strong>\n" +
    "        </p>\n" +
    "      </md-list-item>\n" +
    "    </md-list>\n" +
    "    <div layout-padding>\n" +
    "      <md-divider></md-divider>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div flex=\"80\" class=\"game-board\" ng-if=\"gcc.config.status != 'ended'\">\n" +
    "    <div class=\"curtain\" ng-if=\"gcc.counters.begin != 0\">\n" +
    "      <h1 class=\"md-display-4\" ng-bind=\"gcc.counters.begin\"></h1>\n" +
    "      <p ng-if=\"gcc.players.length < 2\">Waiting for at least one more player...</p>\n" +
    "      <md-input-container class=\"md-block\" ng-if=\"gcc.players.length >= 2\" ng-init=\"gcc.state.init()\">\n" +
    "        <md-button class=\"md-raised md-primary md-round\" ng-click=\"gcc.start()\" ng-disabled=\"gcc.state.isStart || gcc.state.isSuccess\">\n" +
    "          <span ng-if=\"gcc.state.isStart\">Please wait...</span>\n" +
    "          <span ng-if=\"gcc.state.isSuccess\">Game On</span>\n" +
    "          <span ng-if=\"!gcc.state.isSuccess && !gcc.state.isStart\">Start</span>\n" +
    "        </md-button>\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "    <div class=\"game\" ng-if=\"gcc.counters.begin == 0\" ng-init=\"gcc.startCounter('timeLeft')\">\n" +
    "      <p class=\"timer\">\n" +
    "        <span ng-bind=\"gcc.counters.timeLeft\"></span>\n" +
    "      </p>\n" +
    "      <div id=\"game-injection\"></div>\n" +
    "      <span ng-init=\"compileAndInject()\"></span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div flex=\"100\" class=\"game-results\" ng-if=\"gcc.config.status == 'ended'\">\n" +
    "    <div layout-padding layout=\"row\">\n" +
    "      <table>\n" +
    "        <tr>\n" +
    "          <th>Player</th>\n" +
    "          <th>Score</th>\n" +
    "        </tr>\n" +
    "        <tr ng-repeat=\"player in gcc.players\">\n" +
    "          <td ng-bind=\"player.username\"></td>\n" +
    "          <td ng-bind=\"player.gameData.score\"></td>\n" +
    "        </tr>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "    <div layout-padding layout=\"row\" layout-align=\"center\">\n" +
    "      <md-button href=\"#!/all_games\" class=\"md-raised md-primary\">Play more games</md-button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/components/games/click_it/template.html',
    "<div id=\"games-click-it\">\n" +
    "  <h1 class=\"md-display-3\">ClickIt</h1>\n" +
    "  <md-button class=\"md-fab md-primary md-hue-2\" aria-label=\"click\" ng-click=\"cc.increment()\">\n" +
    "    <md-icon>\n" +
    "      <i class=\"material-icons\">donut_small</i>\n" +
    "    </md-icon>\n" +
    "  </md-button>\n" +
    "  <p class=\"text\">\n" +
    "    <span ng-if=\"cc.counter == 0\">Click me as fast as you can</span>\n" +
    "    <span ng-if=\"cc.counter > 0\"><span ng-bind=\"cc.counter\"></span> Clicks</span>\n" +
    "  </p>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/components/games/space_race/template.html',
    "<div id=\"games-space-race\">\n" +
    "  <h1 class=\"md-display-3\">Space Race</h1>\n" +
    "  <md-button class=\"md-raised\" aria-label=\"keypress\" ng-keyup=\"cc.increment($event)\" focus-me=\"true\">\n" +
    "    The bar\n" +
    "  </md-button>\n" +
    "  <p class=\"text\">\n" +
    "    <span ng-if=\"cc.counter == 0\">Hit 'the bar', then press spacebar as fast as you can</span>\n" +
    "    <span ng-if=\"cc.counter > 0\"><span ng-bind=\"cc.counter\"></span> Presses</span>\n" +
    "  </p>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/components/games_list/template.html',
    "<div id=\"games-list\">\n" +
    "  <div ng-if=\"gl.state.isStart\">\n" +
    "    <md-progress-circular class=\"md-accent\" md-diameter=\"100px\"></md-progress-circular>\n" +
    "  </div>\n" +
    "  <md-list flex ng-if=\"gl.state.isSuccess\">\n" +
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
    "  <div layout=\"row\" flex layout-align=\"center\" ng-if=\"pg.init\">\n" +
    "    <games-list game-play=\"pg.gamePlay\"></games-list>\n" +
    "  </div>\n" +
    "  <div layout=\"row\" flex layout-align=\"center\" ng-if=\"pg.init\">\n" +
    "    <!-- <games-space-race config=\"{}\"></games-space-race> -->\n" +
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
    "        <a ng-click=\"pi.open('signUp')\" ng-if=\"pi.tabs.signIn\">Sign Up</a>\n" +
    "        <a ng-click=\"pi.open('signIn')\" ng-if=\"pi.tabs.signUp\">Sign In</a>\n" +
    "      </small>\n" +
    "    </p>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/pages/play/template.html',
    "<div class=\"page-play\">\n" +
    "  <game-container ng-if=\"pc.gamePlay.id\"></game-container>\n" +
    "</div>\n"
  );

}]);
