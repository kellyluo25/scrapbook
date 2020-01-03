// service to fetch 'entries'

app2019.factory('entries', ['$http', function($http) {
  return $http.get('/js/app/2019/entries2019.json')
        .then(function(response) {
          // return data of the GET response
          return response.data;
        })
}]);