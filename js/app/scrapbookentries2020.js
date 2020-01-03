// service to fetch 'entries'

app2020.factory('entries', ['$http', function($http) {
  return $http.get('/entries2020.json')
        .then(function(response) {
          // return data of the GET response
          return response.data;
        })
}]);