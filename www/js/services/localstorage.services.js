//Service for perstiting, managing, and retreiving data from local storage.
app.services.service('$localStorage', ['$window', function ($window) {
 return {
  set: function (key, value) {
   $window.localStorage[key] = value;
  },
  get: function (key, defaultValue) {
   return $window.localStorage[key] || defaultValue;
  },
  setObject: function (key, value) {
   $window.localStorage[key] = JSON.stringify(value);
  },
  setObjectVal: function (key, value) {
   $window.localStorage[key] = value.toString();
  },
  getObject: function (key) {
   return JSON.parse($window.localStorage[key] || '[]');
  },
  delete: function (key) {
   return $window.localStorage.removeItem(key);
  }
 }
}]);


