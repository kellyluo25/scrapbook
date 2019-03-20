var app = angular.module('ScrapbookApp', ['ngRoute']);

app.config(function ($routeProvider,$locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl : 'js/app/entry.html',
    controller  : 'ScrapbookController'
  })
    
  .otherwise({
      redirectTo: '/'
  })
  
  $locationProvider.html5Mode(true);
})
