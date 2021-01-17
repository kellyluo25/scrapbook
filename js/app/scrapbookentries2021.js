// service to fetch 'entries' from json data

//app2020.factory('entries', ['$http', function($http) {
//  return $http.get('/entries2020.json')
//        .then(function(response) {
//          // return data of the GET response
//          return response.data;
//        })
//}]);

app2021.factory('entries', ['$http', function($http) {
  return $http.get('https://api.airtable.com/v0/appoZnfYsHatwiaSU/entries_2021?api_key=keyjxzR8ckt48ealv&view=all_entries')
        .then(function(response) {
          // return data of the GET response
          return response.data;
        })
}]);
