// entries is the json service

// 2021
app2021.controller('scrapbook_controller2021', ['$scope', 'entries',
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


// 2020
app2020.controller('scrapbook_controller2020', ['$scope', 'entries',
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

// 2019 
app2019.controller('scrapbook_controller2019', ['$scope', 'entries',
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

// 2018
app2018.controller('scrapbook_controller2018', ['$scope', 'entries',
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