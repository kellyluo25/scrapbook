// entries is the json service

// 2021
app_longform.controller('longform_controller', ['$scope', 'entries',
    function($scope, entries) {
      entries.then(function(data) {
        // set 'entries' as data from controller 
        $scope.entries = data.records;
          
        console.log($scope.entries);

    });  
}]);
