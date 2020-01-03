// controller 

// entries is the json service
app2019.controller('ScrapbookController2019', ['$scope', 'entries',
    function($scope, entries) {
      entries.then(function(data) {
        $scope.entries = data;
      });  
}]);
