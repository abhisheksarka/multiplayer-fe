'use strict';

(function () {
  function Controller (
    $scope,
    MAP_STYLE,
    PolygonModel,
    ApiLocalityDetail
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

    function populatePolygons () {
      if (!canRender()) { return; };
      $scope.state.start();

      var city = $scope.selectedCity,
          type = $scope.selectedType;

      ApiLocalityDetail.getLocalitiesAndStats(city)
      .then(function(data){
        PolygonModel.removeAll();

        angular.forEach(data.localityDetails, function (item) {
          item.polygon = google.maps.geometry.encoding.decodePath(item.polygon);
          var p = new PolygonModel(item, dmc.map);
          p.add();
        });

        angular.forEach(data.stats, function (item) {
          var p = PolygonModel.all[item.name];
          if (p) {
            p.attachStats(item);
          };
        });

        goToLocation();
        $scope.state.success();
      }, function () { $scope.state.error(); });
    };


    function goToLocation () {
      var bounds= new google.maps.LatLngBounds();
      angular.forEach(PolygonModel.all, function (item) {
        var paths = item.gPolygon.getPaths();
        paths.forEach(function (path) {
          var ar = path.getArray();
          for (var i=0, l=ar.length; i<l; i++){
             bounds.extend(ar[i]);
           };
         });
      });
      dmc.map.fitBounds(bounds)
      dmc.map.setZoom(11);
    };

    function canRender() {
      return ($scope.selectedCity && $scope.selectedType && dmc.map);
    }
  }

  angular
    .module('app.components.distributionMap')
    .controller('DistributionMapController', [
      '$scope',
      'MAP_STYLE',
      'PolygonModel',
      'ApiLocalityDetail',
      Controller
    ]);
}());
