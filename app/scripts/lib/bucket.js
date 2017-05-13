'use strict';

(function () {
  function Factory () {
    function Bucket () { };

    Bucket.generate = function (data, bucketCount, min, max) {
      var i = 0, l = data.length;
      // If min and max are given, set them to the highest and lowest data values
      if (typeof min === 'undefined') {
          min = Infinity;
          max = -Infinity;
          for (i = 0; i < l; i++) {
              if (data[i] < min) min = data[i];
              if (data[i] > max) max = data[i];
          }
      };
      
      var inc = (max - min) / bucketCount,
          buckets = new Array(bucketCount);

      // Initialize buckets
      for (i = 0; i < bucketCount; i++) {
          buckets[i] = [];
      };

      // Put the numbers into buckets
      for (i = 0; i < l; i++) {
          // Buckets include the lower bound but not the higher bound, except the top bucket
          if (data[i] === max) buckets[bucketCount-1].push(data[i]);
          else buckets[((data[i] - min) / inc) | 0].push(data[i]);
      };

      return buckets;
    };


    return Bucket;
  };

  angular
    .module('app.lib')
    .factory('Bucket', [
      Factory
    ]);
}());
