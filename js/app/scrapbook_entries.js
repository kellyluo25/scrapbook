// service to fetch 'entries' from json data (via airtable API)
// patpFGSrzuVnqgqoY.a9ffeee621afc9228be8762773d73db8920da856ab056f5114a7fa9759c9ae87

const headers = {Authorization: 'Bearer patpFGSrzuVnqgqoY.a9ffeee621afc9228be8762773d73db8920da856ab056f5114a7fa9759c9ae87' }
// 2023
app2023.factory('entries', ['$http', function($http) {
  return $http.get('https://api.airtable.com/v0/appoZnfYsHatwiaSU/entries_2023?view=all_entries', {headers})
        .then(function(response) {
          // return data of the GET response
          return response.data;
        })
}]);


// 2022
app2022.factory('entries', ['$http', function($http) {
  return $http.get('https://api.airtable.com/v0/appoZnfYsHatwiaSU/entries_2022?view=all_entries', {headers})
        .then(function(response) {
          // return data of the GET response
          return response.data;
        })
}]);

// 2021
app2021.factory('entries', ['$http', function($http) {
  return $http.get('https://api.airtable.com/v0/appoZnfYsHatwiaSU/entries_2021?view=all_entries', {headers})
        .then(function(response) {
          // return data of the GET response
          return response.data;
        })
}]);

// 2020
app2020.factory('entries', ['$http', function($http) {
  return $http.get('https://api.airtable.com/v0/appoZnfYsHatwiaSU/entries_2020?view=all_entries', {headers})
        .then(function(response) {
          // return data of the GET response
          return response.data;
        })
}]);


// 2019
app2019.factory('entries', ['$http', function($http) {
  return $http.get('https://api.airtable.com/v0/appoZnfYsHatwiaSU/entries_2019?view=all_entries', {headers})
        .then(function(response) {
          // return data of the GET response
          return response.data;
        })
}]);

// 2018
app2018.factory('entries', ['$http', function($http) {
  return $http.get('https://api.airtable.com/v0/appoZnfYsHatwiaSU/entries_2018?view=all_entries', {headers})
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
