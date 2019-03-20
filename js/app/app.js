var app = angular.module('ScrapbookApp', ['ngRoute']);

app.config(function ($routeProvider,$locationProvider) {
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/', {
    templateUrl : 'js/app/entry.html',
    controller  : 'ScrapbookController'
  })
  .otherwise({
      redirectTo: '/'
  })
})
