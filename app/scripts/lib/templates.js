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
    "  <div class=\"key\" ng-repeat=\"key in lc.keys\" ng-if=\"(key.min.toString() != 'Infinity' && key.max.toString() != 'Infinity')\">\n" +
    "    <small>\n" +
    "      <i class=\"material-icons\" style=\"color: {{key.color}}\">stop</i>\n" +
    "      <span ng-bind=\"key.key\"></span>\n" +
    "      <span class=\"details\">\n" +
    "        (<span ng-bind=\"key.min\"></span> - <span ng-bind=\"key.max\"></span>)&nbsp;(<span ng-bind=\"key.count\"></span>)\n" +
    "      </span>\n" +
    "    </small>\n" +
    "  </div>\n" +
    "  <div class=\"key\">\n" +
    "    <small>\n" +
    "      <i class=\"material-icons\" style=\"color: {{lc.defaultColor}}\">stop</i>\n" +
    "      <span>Data unavailable</span>\n" +
    "    </small>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/components/map_control/template.html',
    "<md-card md-theme=\"dark-grey\" id=\"map-control\">\n" +
    "  <md-card-title>\n" +
    "    <md-card-title-text>\n" +
    "      <span class=\"md-headline\">\n" +
    "        <a href=\"/\"><span class=\"logo\"></span></a>\n" +
    "        <span>Localitics</span>\n" +
    "      </span>\n" +
    "    </md-card-title-text>\n" +
    "  </md-card-title>\n" +
    "  <md-card-content ng-show=\"mcc.cities.length > 0\">\n" +
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
    "    <timeline timeline-config=\"timelineConfig\"></timeline>\n" +
    "    <br><br>\n" +
    "    <legend ng-if=\"state.isSuccess\"></legend>\n" +
    "    <br>\n" +
    "    <search ng-if=\"state.isSuccess\" selected-city=\"selectedCity\"></search>\n" +
    "  </md-card-content>\n" +
    "</md-card>\n"
  );


  $templateCache.put('app/scripts/components/mouse_box/template.html',
    "<!-- <div id=\"mouse-box\" >\n" +
    "  <md-content flex layout-padding>\n" +
    "    <h3 class=\"md-title\" ng-bind=\"mbc.data.title\"></h3>\n" +
    "  </md-content>\n" +
    "</div> -->\n" +
    "<md-content flex\n" +
    "  ng-if=\"mbc.state.show\"\n" +
    "  style=\"top: {{mbc.state.posY -30 + 'px'}}; left: {{mbc.state.posX +30 +'px'}}; border-top: 4px solid {{mbc.config.color}}\"\n" +
    "  class=\"md-whiteframe-24dp\"\n" +
    "  id=\"mouse-box\">\n" +
    "  <md-card md-theme=\"dark-grey\">\n" +
    "    <md-card-header>\n" +
    "      <md-card-header-text>\n" +
    "        <span class=\"md-title\" ng-bind=\"mbc.data.title\"></span>\n" +
    "      </md-card-header-text>\n" +
    "    </md-card-header>\n" +
    "    <md-card-content>\n" +
    "      <table>\n" +
    "        <tr ng-repeat=\"(key, value) in mbc.data.stats.params\">\n" +
    "          <td><span ng-bind=\"mbc.dataPoints[key].name\"></span> : </td>\n" +
    "          <td ng-bind=\"value || 'N/A'\"></td>\n" +
    "        </tr>\n" +
    "      </table>\n" +
    "    </md-card-content>\n" +
    "  </md-card>\n" +
    "</md-content>\n"
  );


  $templateCache.put('app/scripts/components/search/template.html',
    "<!-- md-search-text-change=\"ctrl.searchTextChange(ctrl.searchText)\" -->\n" +
    "<!-- md-selected-item-change=\"ctrl.selectedItemChange(item)\" -->\n" +
    "<div>\n" +
    "  <md-autocomplete\n" +
    "    md-theme=\"dark-grey\"\n" +
    "    md-selected-item=\"sc.selectedItem\"\n" +
    "    md-search-text=\"sc.searchText\"\n" +
    "    md-items=\"item in sc.querySearch(sc.searchText)\"\n" +
    "    md-item-text=\"item\"\n" +
    "    md-min-length=\"0\"\n" +
    "    md-selected-item-change=\"sc.selectedItemChange(item)\"\n" +
    "    placeholder=\"Find a locality\">\n" +
    "    <md-item-template>\n" +
    "      <span md-highlight-text=\"sc.searchText\" md-highlight-flags=\"^i\">{{item}}</span>\n" +
    "    </md-item-template>\n" +
    "    <md-not-found>\n" +
    "      No localities matching \"{{sc.searchText}}\" were found.\n" +
    "      <!-- <a ng-click=\"ctrl.newState(ctrl.searchText)\">Create a new one!</a> -->\n" +
    "    </md-not-found>\n" +
    "  </md-autocomplete>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/components/timeline/template.html',
    "<div>\n" +
    "  <small>\n" +
    "    <label>Timeline (<span ng-bind=\"timelineConfig.selected\"></span> weeks)</label>\n" +
    "  </small>\n" +
    "  <md-slider-container>\n" +
    "    <md-slider flex min=\"{{timelineConfig.min}}\" max=\"{{timelineConfig.max}}\" ng-model=\"timelineConfig.selected\" aria-label=\"red\" id=\"red-slider\">\n" +
    "    </md-slider>\n" +
    "  </md-slider-container>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/components/trend/template.html',
    "<div id=\"trend\">\n" +
    "  <div class=\"overlay\">\n" +
    "  </div>\n" +
    "  <div layout-align=\"center\">\n" +
    "    <md-progress-linear md-mode=\"indeterminate\" class=\"md-hue-2 md-accent\" style=\"margin-right: auto; margin-left: auto;\" ng-if=\"tc.state.isStart\"></md-progress-linear>\n" +
    "  </div>\n" +
    "  <div id=\"trend-display\" ng-if=\"tc.state.isSuccess\"></div>\n" +
    "  <div ng-if=\"tc.state.isSuccess\" id=\"trend-overlay\">\n" +
    "    <h2 id=\"trend-message\">\n" +
    "      Select a Data Point from the below list to get started\n" +
    "      <br>\n" +
    "      <i class=\"material-icons\">arrow_downward</i>\n" +
    "    </h2>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/scripts/components/trend/trend_dialog_template.html',
    "<md-dialog aria-label=\"{{tc.name + ' Trends'}}\" class=\"trend-dialog\">\n" +
    "  <md-toolbar md-theme=\"dark-grey\" class=\"md-accent\">\n" +
    "    <div class=\"md-toolbar-tools md-accent\">\n" +
    "      <h2 ng-bind=\"tdc.name + ' Trends'\"></h2>\n" +
    "      <!-- <span flex></span>\n" +
    "      <md-button class=\"md-icon-button\" ng-click=\"cancel()\">\n" +
    "        <md-icon md-svg-src=\"img/icons/ic_close_24px.svg\" aria-label=\"Close dialog\"></md-icon>\n" +
    "      </md-button> -->\n" +
    "    </div>\n" +
    "  </md-toolbar>\n" +
    "\n" +
    "  <md-dialog-content>\n" +
    "    <div class=\"md-dialog-content\">\n" +
    "      <trend trend-config=\"tdc.trendConfig\"></trend>\n" +
    "    </div>\n" +
    "  </md-dialog-content>\n" +
    "\n" +
    "  <!-- <md-dialog-actions layout=\"row\">\n" +
    "    <md-button href=\"http://en.wikipedia.org/wiki/Mango\" target=\"_blank\" md-autofocus>\n" +
    "      More on Wikipedia\n" +
    "    </md-button>\n" +
    "    <span flex></span>\n" +
    "    <md-button ng-click=\"answer('not useful')\">\n" +
    "     Not Useful\n" +
    "    </md-button>\n" +
    "    <md-button ng-click=\"answer('useful')\">\n" +
    "      Useful\n" +
    "    </md-button>\n" +
    "  </md-dialog-actions> -->\n" +
    "</md-dialog>\n"
  );


  $templateCache.put('app/scripts/pages/index/template.html',
    "<div class=\"page-index\" layout-align=\"center\">\n" +
    "  <div layout=\"row\" flex layout-align=\"center center\">\n" +
    "    <div layout=\"column\" layout-align=\"center\">\n" +
    "      <br><br><br><br>\n" +
    "      <div class=\"logo-container\">\n" +
    "        <img src=\"https://s3.amazonaws.com/localitics/images/logo_large.png\"/>\n" +
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
    "    <md-button class=\"md-raised md-large md-round\" ng-click=\"pi.show($event)\">Go</md-button>\n" +
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
    "      <map-control\n" +
    "        class=\"md-whiteframe-24dp\"\n" +
    "        selected-city=\"ps.selectedCity\"\n" +
    "        selected-type=\"ps.selectedType\"\n" +
    "        timeline-config=\"ps.timelineConfig\"\n" +
    "        state=\"ps.state\">\n" +
    "      </map-control>\n" +
    "      <md-content flex>\n" +
    "        <div id=\"map-holder\" style=\"height:100%\">\n" +
    "          <distribution-map\n" +
    "            selected-city=\"ps.selectedCity\"\n" +
    "            selected-type=\"ps.selectedType\"\n" +
    "            timeline-config=\"ps.timelineConfig\"\n" +
    "            state=\"ps.state\">\n" +
    "          </distribution-map>\n" +
    "        </div>\n" +
    "      </md-content>\n" +
    "    </section>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<mouse-box></mouse-box>\n" +
    "<div id=\"loader-overlay\" ng-if=\"!ps.state.isSuccess\">\n" +
    "  <!-- <div ng-if=\"ps.state.isStart\"> -->\n" +
    "    <md-progress-circular class=\"md-hue-2 md-accent\" md-diameter=\"120px\"></md-progress-circular>\n" +
    "    <h3>Crunching data...</h3>\n" +
    "  <!-- </div> -->\n" +
    "</div>\n"
  );

}]);
