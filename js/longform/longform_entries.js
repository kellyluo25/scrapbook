// service to fetch 'entries' from json data (via airtable API)

// 2021
app_longform.factory('entries', ['$http', function($http) {
  return $http.get('https://api.airtable.com/v0/app5lKJ3fALLBkCtj/reads?api_key=keyjxzR8ckt48ealv')
        .then(function(response) {
          // return data of the GET response
          return response.data;
        })
}]);
