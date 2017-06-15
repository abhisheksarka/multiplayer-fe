window.LOCALITICS_CONFIG = {
  API_ROOT_PATH: '/api/v3',
  DATA_POINTS: {
    hotnessIndex: {
      name: 'Hotness Index',
      formula: function (params) {
        var val = ((params['searches'] || 0)/params.area);
        return parseFloat(val.toFixed(2));
      }
    },
    liquidityIndex: {
      name: 'Liquidity Index',
      formula: function (params) {
        var val = (params['liquidity_index'] || 0);
        return parseFloat(val.toFixed(2));
      }
    },
    distributionIndex: {
      name: 'Distribution Index',
      formula: function (params) {
        var val = (params['distribution_index'] || 0);
        return parseFloat(val.toFixed(2));
      }
    },
    conversionIndex: {
      name: 'Conversion Index',
      formula: function (params) {
        var val = (params['conversion_index'] || 0);
        return parseFloat(val.toFixed(2));
      }
    },
    sharedRent: {
      name: 'Shared Rent',
      formula: function (params) {
        var val = (params['shared_rent'] || 0);
        return parseFloat(val.toFixed(2));
      }
    },
    oneBhkRent: {
      name: 'One BHK Rent',
      formula: function (params) {
        var val = (params['1_bhk'] || 0);
        return parseFloat(val.toFixed(2));
      }
    },
    twoBhkRent: {
      name: 'Two BHK Rent',
      formula: function (params) {
        var val = (params['2_bhk'] || 0);
        return parseFloat(val.toFixed(2));
      }
    },
    threeBhkRent: {
      name: 'Three BHK Rent',
      formula: function (params) {
        var val = (params['3_bhk'] || 0);
        return parseFloat(val.toFixed(2));
      }
    }
  },
  CITY_LAT_LNGS: {
    bengaluru: {lat: 12.9716, lng: 77.5946},
    delhi: {lat: 28.7041, lng: 77.1025},
    gurgaon: {lat: 28.4595, lng: 77.0266},
    ghaziabad: {lat: 28.6692, lng: 77.4538},
    hyderabad: {lat: 17.3850, lng: 78.4867},
    faridabad: {lat: 28.4089, lng: 77.3178},
    pune: {lat: 18.5204, lng: 73.8567},
    noida: {lat: 28.5355, lng: 77.3910},
    mumbai: {lat: 19.0760, lng: 72.877}
  },
  TREND_DATA_POINTS: {
    conversion_index: 'Conversion Index',
    liquidity_index: 'Liquidity Index',
    distribution_index: 'Distribution Index',
    searches: 'Searches',
    bookings: 'Bookings',
    scheduled_savs: 'Scheduled Savs',
    savs: 'Created Savs',
    empty_beds: 'Empty Beds'
  }
}
