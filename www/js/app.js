var app = angular.module('app', ['ionic', 'ui.router', 'app.controllers','app.services']);
app.controllers = angular.module('app.controllers', []);
app.services = angular.module('app.services', []);


app.run(
  function ($rootScope, $localStorage, $ionicPlatform) {
    
    $rootScope.config = {};
    $rootScope.config.url='/api/distancematrix/json?origins=10+Downing+Street+London&destinations=';
    $rootScope.config.key ='your google maps key';
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins) {
        
        if (window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }
        
      }
      
      
    });
    
  });
