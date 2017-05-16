'use strict';

(function () {
  function Controller (
    $scope,
    ApiLocalityDetail,
    PolygonModel,
    MouseBox,
    GmapUtil
  ) {
    var sc = this;

    sc.selectedPolygon = null;

    sc.querySearch = function(query) {
      var localities = ApiLocalityDetail.localities[$scope.selectedCity].map(function (item) { return item.name; });
      var results = query ? localities.filter(createFilterFor(query)) : localities;
      return results;
    }

    sc.selectedItemChange = function (item) {
      if (sc.selectedPolygon) { sc.selectedPolygon.unfocus(); }

      if (item) {
        sc.selectedPolygon = PolygonModel.all[angular.lowercase(item)];
        sc.selectedPolygon.focus();
        GmapUtil.goToPolygon(sc.selectedPolygon, 12);
        var coords = GmapUtil.polygonScreenCoords(sc.selectedPolygon);
        MouseBox.show(
          coords.x, coords.y,
          {
            title: sc.selectedPolygon.name,
            stats: sc.selectedPolygon.stats,
            color: sc.selectedPolygon.gPolygon.fillColor
          }
        );
      } else {
        sc.selectedPolygon.map.setZoom(11);
      }
    };


    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(locality) {
        locality = angular.lowercase(locality);
        return (locality.indexOf(lowercaseQuery) === 0);
      };
    };
  }

  angular
    .module('app.components.search')
    .controller('SearchController', [
      '$scope',
      'ApiLocalityDetail',
      'PolygonModel',
      'MouseBox',
      'GmapUtil',
      Controller
    ]);
}());
