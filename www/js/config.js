app.config(function($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('main', {
            url: "/main",
            templateUrl: "templates/main.html",
            controller: "MainCtrl"
        }).state('distance', {
            url: "/distance",
            templateUrl: "templates/distance.html",
            controller: "DistanceCtrl"
          });


    $urlRouterProvider.otherwise("/main");


});
