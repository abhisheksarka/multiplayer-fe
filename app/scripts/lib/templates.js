angular.module('app.lib').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/scripts/components/distribution_map/template.html',
    "<ng-map\n" +
    "  styles=\"{{dmc.mapStyle}}\"\n" +
    "  keyboard-shortcuts=\"false\"\n" +
    "  zoom=\"3\"\n" +
    "  map-type-id=\"ROADMAP\"\n" +
    "  map-type-control=\"false\"\n" +
    "  background-color=\"#333\"\n" +
    "  street-view-control=\"false\">\n" +
    "</ng-map>\n"
  );


  $templateCache.put('app/scripts/components/legend/template.html',
    "<div class=\"legend\">\n" +
    "  <div class=\"key\" ng-repeat=\"key in lc.keys\">\n" +
    "    <small>\n" +
    "      <i class=\"material-icons\" style=\"color: {{key.color}}\">stop</i>\n" +
    "      <span ng-bind=\"key.key\"></span>\n" +
    "      <span ng-if=\"key.min != Infinity && key.max != -Infinity\" class=\"details\">\n" +
    "        (<span ng-bind=\"key.min\"></span> - <span ng-bind=\"key.max\"></span>)&nbsp;(<span ng-bind=\"key.count\"></span>)\n" +
    "      </span>\n" +
    "    </small>\n" +
    "  </div>\n" +
    "</div>\n"
  );


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
    "      <md-select name=\"city\" ng-model=\"selectedCity\" required>\n" +
    "        <md-option ng-repeat=\"city in mcc.cities\" ng-value=\"city\">\n" +
    "          {{city}}\n" +
    "        </md-option>\n" +
    "      </md-select>\n" +
    "    </md-input-container>\n" +
    "    &nbsp;&nbsp;\n" +
    "    <md-input-container>\n" +
    "      <label>Select Type</label>\n" +
    "      <md-select name=\"favoriteColor\" ng-model=\"selectedType\" required>\n" +
    "        <md-option ng-repeat=\"point in mcc.dataPoints\" ng-value=\"point.value\">\n" +
    "          {{point.view}}\n" +
    "        </md-option>\n" +
    "      </md-select>\n" +
    "    </md-input-container>\n" +
    "    <legend ng-if=\"state.isSuccess\"></legend>\n" +
    "  </md-card-content>\n" +
    "  <!-- <md-card-actions layout=\"row\" layout-align=\"start center\">\n" +
    "    <md-button>Go</md-button>\n" +
    "  </md-card-actions> -->\n" +
    "</md-card>\n"
  );


  $templateCache.put('app/scripts/components/mouse_box/template.html',
    "<!-- <div id=\"mouse-box\" >\n" +
    "  <md-content flex layout-padding>\n" +
    "    <h3 class=\"md-title\" ng-bind=\"mbc.data.title\"></h3>\n" +
    "  </md-content>\n" +
    "</div> -->\n" +
    "<md-content flex ng-if=\"mbc.state.show\" style=\"top: {{mbc.state.posY+'px'}}; left: {{mbc.state.posX+'px'}}\" class=\"md-whiteframe-24dp\" id=\"mouse-box\">\n" +
    "  <md-card >\n" +
    "    <md-card-header>\n" +
    "      <md-card-header-text>\n" +
    "        <span class=\"md-title\" ng-bind=\"mbc.data.title\"></span>\n" +
    "      </md-card-header-text>\n" +
    "    </md-card-header>\n" +
    "\n" +
    "    <md-card-content>\n" +
    "\n" +
    "    </md-card-content>\n" +
    "  </md-card>\n" +
    "</md-content>\n"
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
    "      <map-control class=\"md-whiteframe-24dp\" selected-city=\"ps.selectedCity\" selected-type=\"ps.selectedType\" state=\"ps.state\"></map-control>\n" +
    "      <md-content flex>\n" +
    "        <div id=\"map-holder\" style=\"height:100%\">\n" +
    "          <distribution-map selected-city=\"ps.selectedCity\" selected-type=\"ps.selectedType\" state=\"ps.state\"></distribution-map>\n" +
    "        </div>\n" +
    "      </md-content>\n" +
    "    </section>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div id=\"loader-overlay\" ng-if=\"!ps.state.isSuccess\">\n" +
    "  <md-progress-circular class=\"md-hue-2 md-accent\" md-diameter=\"120px\"></md-progress-circular>\n" +
    "</div>\n"
  );

}]);
