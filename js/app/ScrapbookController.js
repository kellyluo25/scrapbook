// controller 

app.controller('ScrapbookController', ['$scope', 'entries',
    function($scope, entries) {
      entries.then(function(data) {
        $scope.entries = data;
      });  
}]);
