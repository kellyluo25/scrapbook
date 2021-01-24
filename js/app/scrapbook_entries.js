// service to fetch 'entries' from json data

//app2019.factory('entries', ['$http', function($http) {
//  return $http.get('/js/app/2019/entries2019.json')
//        .then(function(response) {
//          // return data of the GET response
//          return response.data;
//        })
//}]);

app2018.factory('entries', ['$http', function($http) {
  return $http.get('https://api.airtable.com/v0/appoZnfYsHatwiaSU/entries_2018?api_key=keyjxzR8ckt48ealv&view=all_entries')
        .then(function(response) {
          // return data of the GET response
          return response.data;
        })
}]);

app2019.factory('entries', ['$http', function($http) {
  return $http.get('https://api.airtable.com/v0/appoZnfYsHatwiaSU/entries_2019?api_key=keyjxzR8ckt48ealv&view=all_entries')
        .then(function(response) {
          // return data of the GET response
          return response.data;
        })
}]);

app2020.factory('entries', ['$http', function($http) {
  return $http.get('https://api.airtable.com/v0/appoZnfYsHatwiaSU/entries_2020?api_key=keyjxzR8ckt48ealv&view=all_entries')
        .then(function(response) {
          // return data of the GET response
          return response.data;
        })
}]);

app2021.factory('entries', ['$http', function($http) {
  return $http.get('https://api.airtable.com/v0/appoZnfYsHatwiaSU/entries_2021?api_key=keyjxzR8ckt48ealv&view=all_entries')
        .then(function(response) {
          // return data of the GET response
          return response.data;
        })
}]);
