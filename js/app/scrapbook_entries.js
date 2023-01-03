// service to fetch 'entries' from json data (via airtable API)


// 2023
app2023.factory('entries', ['$http', function($http) {
  return $http.get('https://api.airtable.com/v0/appoZnfYsHatwiaSU/entries_2023?api_key=keyjxzR8ckt48ealv&view=all_entries')
        .then(function(response) {
          // return data of the GET response
          return response.data;
        })
}]);


// 2022
app2022.factory('entries', ['$http', function($http) {
  return $http.get('https://api.airtable.com/v0/appoZnfYsHatwiaSU/entries_2022?api_key=keyjxzR8ckt48ealv&view=all_entries')
        .then(function(response) {
          // return data of the GET response
          return response.data;
        })
}]);

// 2021
app2021.factory('entries', ['$http', function($http) {
  return $http.get('https://api.airtable.com/v0/appoZnfYsHatwiaSU/entries_2021?api_key=keyjxzR8ckt48ealv&view=all_entries')
        .then(function(response) {
          // return data of the GET response
          return response.data;
        })
}]);

// 2020
app2020.factory('entries', ['$http', function($http) {
  return $http.get('https://api.airtable.com/v0/appoZnfYsHatwiaSU/entries_2020?api_key=keyjxzR8ckt48ealv&view=all_entries')
        .then(function(response) {
          // return data of the GET response
          return response.data;
        })
}]);


// 2019
app2019.factory('entries', ['$http', function($http) {
  return $http.get('https://api.airtable.com/v0/appoZnfYsHatwiaSU/entries_2019?api_key=keyjxzR8ckt48ealv&view=all_entries')
        .then(function(response) {
          // return data of the GET response
          return response.data;
        })
}]);

// 2018
app2018.factory('entries', ['$http', function($http) {
  return $http.get('https://api.airtable.com/v0/appoZnfYsHatwiaSU/entries_2018?api_key=keyjxzR8ckt48ealv&view=all_entries')
        .then(function(response) {
          // return data of the GET response
          return response.data;
        })
}]);

//app2019.factory('entries', ['$http', function($http) {
//  return $http.get('/js/app/2019/entries2019.json')
//        .then(function(response) {
//          // return data of the GET response
//          return response.data;
//        })
//}]);
