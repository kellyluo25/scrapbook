// controller 

// entries is the json service
app2020.controller('ScrapbookController2020', ['$scope', 'entries',
    function($scope, entries) {
      entries.then(function(data) {
        // set 'entries' as data from controller 
        $scope.entries = data.records;
          
        console.log($scope.entries);
        
        function mediaCount(media_type) {
            return ($scope.entries.filter(entry => entry.fields.media === media_type)).length;
        };
        
        // set 'media totals' as counts for every media type
        $scope.media_totals = {
            "all": $scope.entries.length,
            "shows": mediaCount("shows"), 
            "films": mediaCount("films"),
            "books": mediaCount("books"),
            "audio": mediaCount("audio"),
        };
        
        console.log($scope.media_totals);
    });  
}]);