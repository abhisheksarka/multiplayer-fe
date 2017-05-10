angular.module('app.lib').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/scripts/components/map_control/template.html',
    "<md-card md-theme=\"dark-grey\">\n" +
    "  <md-card-title>\n" +
    "    <md-card-title-text>\n" +
    "      <span class=\"md-headline\">\n" +
    "        <a href=\"/\"><span class=\"logo\"></span></a>\n" +
    "        <span>Localitics</span>\n" +
    "      </span>\n" +
    "    </md-card-title-text>\n" +
    "  </md-card-title>\n" +
    "  <md-card-content>\n" +
    "    <md-input-container>\n" +
    "      <label>Select City</label>\n" +
    "      <md-select name=\"favoriteColor\" ng-model=\"favoriteColor\" required md-no-float>\n" +
    "        <md-option>Bengaluru</md-option>\n" +
    "        <md-option>Delhi</md-option>\n" +
    "        <md-option>Ghaziabad</md-option>\n" +
    "        <md-option>Hyderabad</md-option>\n" +
    "        <md-option>Mumbai</md-option>\n" +
    "        <md-option>Pune</md-option>\n" +
    "        <md-option>Chennai</md-option>\n" +
    "        <md-option>Faridabad</md-option>\n" +
    "        <md-option>Gurgaon</md-option>\n" +
    "        <md-option>Noida</md-option>\n" +
    "        <md-option>Kolkata</md-option>\n" +
    "      </md-select>\n" +
    "    </md-input-container>\n" +
    "    &nbsp;&nbsp;\n" +
    "    <md-input-container>\n" +
    "      <label>Select Type</label>\n" +
    "      <md-select name=\"favoriteColor\" ng-model=\"type\" required>\n" +
    "        <md-option>Rent</md-option>\n" +
    "        <md-option>Search</md-option>\n" +
    "        <md-option>SAV</md-option>\n" +
    "      </md-select>\n" +
    "    </md-input-container>\n" +
    "  </md-card-content>\n" +
    "  <md-card-actions layout=\"row\" layout-align=\"start center\">\n" +
    "    <md-button class=\"md-raised\">Go</md-button>\n" +
    "  </md-card-actions>\n" +
    "</md-card>\n"
  );


  $templateCache.put('app/scripts/components/sidenav/template.html',
    "<md-sidenav\n" +
    "    class=\"md-sidenav-left\"\n" +
    "    md-component-id=\"left\"\n" +
    "    style=\"width: 360px; height: 100%;\"\n" +
    "    md-is-locked-open=\"$mdMedia('gt-sm')\" >\n" +
    "  <md-toolbar class=\"md-theme-indigo\">\n" +
    "    <h1 class=\"md-toolbar-tools\">Disabled Backdrop</h1>\n" +
    "  </md-toolbar>\n" +
    "  <md-content>\n" +
    "    <div layout-padding>\n" +
    "      <md-input-container>\n" +
    "      </md-input-container>\n" +
    "    </div>\n" +
    "  </md-content>\n" +
    "</md-sidenav>\n"
  );


  $templateCache.put('app/scripts/pages/index/template.html',
    "<div class=\"page-index\" layout-align=\"center\">\n" +
    "  <div layout=\"row\" flex layout-align=\"center center\">\n" +
    "    <div layout=\"column\" layout-align=\"center\">\n" +
    "      <br><br><br><br>\n" +
    "      <div class=\"logo-container\">\n" +
    "        <img src=\"https://www.polymer-project.org/images/logos/p-logo.png\"/>\n" +
    "      </div>\n" +
    "      <h1 class=\"md-display-2\">\n" +
    "        <span style=\"opacity: 0.1;\">&lt;</span>\n" +
    "          Localitics\n" +
    "        <span style=\"opacity: 0.1;\">&gt;</span>\n" +
    "      </h1>\n" +
    "      <p class=\"tag-line\">0.0.1 / Locality based data visualization</p>\n" +
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
    "  <div layout=\"column\" style=\"height:100%;z-index:10;\" ng-cloak>\n" +
    "    <section layout=\"row\" flex>\n" +
    "      <map-control class=\"md-whiteframe-24dp\"></map-control>\n" +
    "      <md-content flex>\n" +
    "        <div id=\"map-holder\" style=\"height:100%\">\n" +
    "          <ng-map\n" +
    "            styles=\"{{ps.mapStyle}}\"\n" +
    "            zoom=\"11\"\n" +
    "            keyboard-shortcuts=\"false\"\n" +
    "            center=\"12.9716, 77.5946\"\n" +
    "            map-type-id=\"ROADMAP\"\n" +
    "            map-type-control=\"false\"\n" +
    "            street-view-control=\"false\">\n" +
    "          </ng-map>\n" +
    "        </div>\n" +
    "      </md-content>\n" +
    "    </section>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
