/**
 * Created by jonnygold on 24/12/2016.
 */
app.controllers.controller('DistanceCtrl', function ($scope, $rootScope, $filter, $httpServices, $q) {
  
  
  $scope.init = function () {
    $scope.agents = [];
    $scope.distances = [];
    
    angular.forEach(agents, function (agent) {
  
      $scope.getDistances(agent).then(function (distance) {
        agent.distance = distance;
        agent.date = new Date(agent.date);
        $scope.agents.push(agent);
      });
      
    });
    
  }
  
  
  $scope.getVals = function(agent){
  
    var lowest = agent.distance.replace(/km|,/g, "");
    var highest = lowest;
    var tmp;
    
    angular.forEach($scope.distances, function (distance) {
      tmp = distance.replace(/km|,/g, "");
      if (tmp < lowest) lowest = tmp;
      if (tmp > highest) highest = tmp;
      
    });
    
    $scope.highest = highest;
    $scope.lowest = lowest;
    
  }
  
  $scope.checkVals = function(agent){
    
    if(agent.distance.replace(/km|,/g, "")===$scope.highest){
      agent.style = "color:red;"
    }
    else if(agent.distance.replace(/km|,/g, "")===$scope.lowest){
      agent.style =  "color:green;"
    }
    else {
      agent.style = "color:black;"
    }
    
  }
  
  
  $scope.getDistances = function (agent) {
    var deferred = $q.defer();
    
    var place = agent.address + ' ' + agent.country;
    var url = $rootScope.config.url + place.replace(/ |,/g, "+") + $rootScope.config.key;
    $httpServices.getHttpLst(url).then(function (data) {
      if (agent.country === 'Brazil') {
        var bAgent = $filter('filter')(agentsBrazil, {address: agent.address})[0];
        $scope.distances.push(bAgent.distance);
        deferred.resolve(bAgent.distance);
      }
      else {
        $scope.distances.push(data.rows[0].elements[0].distance.text);
        deferred.resolve(data.rows[0].elements[0].distance.text);
      }
      
    });
      
    
    
    return deferred.promise;
  }
  
});
