'use strict';

(function () {
  function Controller (
    $scope,
    MAP_STYLE,
    PolygonModel,
    ApiLocalityDetail,
    PolygonStatsBucket,
    Color,
    CITY_LAT_LNGS,
    $timeout
  ) {
    var dmc = this;

    dmc.mapStyle = MAP_STYLE;
    dmc.map = null;

    $scope.$on('mapInitialized', function (event, map) {
      google.maps.event.trigger(map, 'resize');
      dmc.map = map;
      populatePolygons();
    });

    $scope.$watch('selectedCity', function (nv, ov) {
      populatePolygons();
    });

    $scope.$watch("timelineConfig.selected", function(nv, ov){
      populatePolygons();
    });

    $scope.$watch('selectedType', function (nv, ov) {
      populatePolygons();
    });

    function populatePolygons () {
      if (!canRender()) { return; };
      $scope.state.start();

      var city = $scope.selectedCity,
          type = $scope.selectedType,
          timeline = $scope.timelineConfig.selected;

      ApiLocalityDetail.getLocalitiesAndStats(city, timeline)
      .then(function(data){
        buildPolygons(data);
        attachStats(data);
        buildBuckets();
        fillColor();
        goToLocation();
        $timeout(function () {
          $scope.state.success();
        }, 0, true);
      }, function () {
        $timeout(function () {
          $scope.state.error();
        }, 0, true);
      });
    };


    function goToLocation () {
      var latLng = CITY_LAT_LNGS[$scope.selectedCity.toLowerCase()];
      dmc.map.setCenter(new google.maps.LatLng(latLng.lat, latLng.lng));
      dmc.map.setZoom(11);
    };

    function buildPolygons (data) {
      PolygonModel.removeAll();
      angular.forEach(data.localityDetails, function (item) {
        item.polygonPath = google.maps.geometry.encoding.decodePath(item.polygon);
        var p = new PolygonModel(item, dmc.map);
        p.add();
      });
    };

    function attachStats (data) {
      angular.forEach(data.stats, function (item, key) {
        var p = PolygonModel.all[key.toLowerCase()];
        if (p) {
          p.attachStats(item);
        };
      });
    };

    function buildBuckets () {
      PolygonStatsBucket.generate($scope.selectedCity, $scope.selectedType);
    };

    function fillColor () {
      angular.forEach(PolygonModel.all, function (item) {
        var stats = item.stats || {params: { }};
        var color = Color.findColor(stats.params[$scope.selectedType]);
        if (color) {
          item.gPolygon.setOptions({
            fillColor: color
          });
        };
      });
    };

    function canRender() {
      return ($scope.selectedCity && $scope.selectedType && dmc.map);
    };
  }

  angular
    .module('app.components.distributionMap')
    .controller('DistributionMapController', [
      '$scope',
      'MAP_STYLE',
      'PolygonModel',
      'ApiLocalityDetail',
      'PolygonStatsBucket',
      'Color',
      'CITY_LAT_LNGS',
      '$timeout',
      Controller
    ]);
}());
