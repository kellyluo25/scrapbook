// 2019 
var app2019 = angular.module('Scrapbook2019', ['ngRoute', 'iso.directives', 'iso.services']);

app2019.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/', {
    templateUrl : '/js/app/2019/entry2019.html',
    controller  : 'ScrapbookController2019'
  })
})


// 2020 
var app2020 = angular.module('Scrapbook2020', ['ngRoute', 'iso.directives', 'iso.services']);

app2020.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/', {
    templateUrl : '/js/app/entry2020.html',
    controller  : 'ScrapbookController2020'
  })
})