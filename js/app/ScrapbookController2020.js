// controller 

// entries is the json service
app2020.controller('ScrapbookController2020', ['$scope', 'entries',
    function($scope, entries) {
      entries.then(function(data) {
        $scope.entries = data;
      });  
}]);