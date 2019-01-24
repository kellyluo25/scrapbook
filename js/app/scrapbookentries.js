// service

app.factory('entries', ['$http', function($http) {
  return $http.get('entries.json')
        .then(function(response) {
          // return data of the GET response
          return response.data;
        })
}]);