app.controllers.controller('MainCtrl', function ($scope, $filter) {
  
  $scope.agents = agents;
  $scope.isoNum = 0;
  var countryArr = [];
  countryArr.push($scope.agents[0].country)
  
  angular.forEach($scope.agents, function (item) {
    var lst = $filter('filter')($scope.agents, {country: item.country});
    angular.forEach(lst, function (agent) {
      if (countryArr.indexOf(agent.country) < 0) countryArr.push(agent.country);
    });
  });
  
  
  $scope.countryLst = [];
  angular.forEach(countryArr, function (country) {
    var agentLst = $filter('filter')($scope.agents, {country: country});
    var item = {};
    item.name = country;
    item.agents = agentLst;
    $scope.countryLst.push(item)
  });
  
  
  $scope.getIsolated = function (country) {
    country.isolated = [];
    angular.forEach(country.agents, function (agent) {
      var lst = $filter('filter')($scope.agents, {agent: agent.agent});
      if (lst.length === 1) {
        var item = {};
        item.name = lst[0].agent;
        item.details = lst[0];
        country.isolated.push(item);
      }
      if (country.isolated.length === 1) {
        country.isolatedStatus = "has 1 isolated agent ";
      }
      else if (country.isolated.length > 1) {
        country.isolatedStatus = "has " + country.isolated.length +
          " isolated agents ";
      }
      
      if($scope.isoNum < country.isolated.length){
        $scope.isoNum = country.isolated.length;
        $scope.isoCountry = lst[0].country;
      }
      
    });
  }
    
  $scope.getUnisolated = function (country) {
    country.unisolated = [];
    angular.forEach(country.agents, function (agent) {
      var lst = $filter('filter')($scope.agents, {agent: agent.agent});
      if (lst.length > 1) {
        var item = {};
        item.name = lst[0].agent;
        item.details = lst[0];
        country.unisolated.push(item);
      }
      if (country.unisolated.length === 1) {
        country.unisolatedStatus = "has 1 non-isolated agent ";
      }
      else if (country.unisolated.length > 1) {
        country.unisolatedStatus = "has " + country.unisolated.length +
          " non-isolated agents ";
      }
      
    });
    
  }
  
});


