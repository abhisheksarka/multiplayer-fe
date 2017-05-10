angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/scripts/pages/index/template.html',
    "<div class=\"page-index\" layout-align=\"center\">\n" +
    "  <div layout=\"row\" flex layout-align=\"center center\">\n" +
    "    <div layout=\"column\" layout-align=\"center\">\n" +
    "      <br><br><br><br>\n" +
    "      <div class=\"logo-container\">\n" +
    "        <img src=\"https://www.polymer-project.org/images/logos/p-logo.png\"/>\n" +
    "      </div>\n" +
    "      <h1 class=\"md-display-3\">\n" +
    "        <span style=\"opacity: 0.1;\">&lt;</span>\n" +
    "          Lokal\n" +
    "        <span style=\"opacity: 0.1;\">&gt;</span>\n" +
    "      </h1>\n" +
    "      <img src=\"http://pyrexdesigns.com/images/hard%20slit%20separator.png\" style=\"height: 50px; margin-top: 25px; opacity: 0.5\"/>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <br><br>\n" +
    "  <section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\" layout-wrap>\n" +
    "    <md-button class=\"md-raised md-accent md-large md-round\" ng-click=\"pi.show($event)\">Go</md-button>\n" +
    "  </section>\n" +
    "  <div layout=\"row\" class=\"footer\" layout-align=\"center\">\n" +
    "    <small>\n" +
    "      © 2017 Nestaway Technologies Pvt Ltd. All rights reserved.\n" +
    "    </small>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/pages/show/template.html',
    "<div class=\"page-show\">\n" +
    "  <div layout=\"row\" layout-sm=\"column\" layout-align=\"space-around\" ng-if=\"ps.state.isStart\">\n" +
    "    <md-progress-linear md-mode=\"indeterminate\" class=\"md-accent\"></md-progress-linear>\n" +
    "  </div>\n" +
    "\n" +
    "  <div layout=\"column\" style=\"height:100%;z-index:10;\" ng-cloak>\n" +
    "    <section layout=\"row\" flex>\n" +
    "      <md-content flex>\n" +
    "        <div id=\"map-holder\" style=\"height:100%\">\n" +
    "          <ng-map zoom=\"13\" keyboard-shortcuts=\"false\" center=\"12.9716, 77.5946\" map-type-id=\"ROADMAP\" street-view-control-options=\"{position: 'LEFT_CENTER'}\">\n" +
    "\n" +
    "          </ng-map>\n" +
    "        </div>\n" +
    "      </md-content>\n" +
    "    </section>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
