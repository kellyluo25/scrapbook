// 2023
var app2023 = angular.module('Scrapbook2023', ['ngRoute', 'iso.directives', 'iso.services']);

app2023.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/', {
    templateUrl : '/js/app/entry.html',
    controller  : 'scrapbook_controller2023'
  })
})

// 2022
var app2022 = angular.module('Scrapbook2022', ['ngRoute', 'iso.directives', 'iso.services']);

app2022.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/', {
    templateUrl : '/js/app/entry.html',
    controller  : 'scrapbook_controller2022'
  })
})

// 2021
var app2021 = angular.module('Scrapbook2021', ['ngRoute', 'iso.directives', 'iso.services']);

app2021.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/', {
    templateUrl : '/js/app/entry.html',
    controller  : 'scrapbook_controller2021'
  })
})

// 2020 
var app2020 = angular.module('Scrapbook2020', ['ngRoute', 'iso.directives', 'iso.services']);

app2020.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/', {
    templateUrl : '/js/app/entry.html',
    controller  : 'scrapbook_controller2020'
  })
})

// 2019 
var app2019 = angular.module('Scrapbook2019', ['ngRoute', 'iso.directives', 'iso.services']);

app2019.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/', {
    templateUrl : '/js/app/entry.html',
    controller  : 'scrapbook_controller2019'
  })
})

// 2018 
var app2018 = angular.module('Scrapbook2018', ['ngRoute', 'iso.directives', 'iso.services']);

app2018.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/', {
    templateUrl : '/js/app/entry.html',
    controller  : 'scrapbook_controller2018'
  })
})


// TEST
//var apptest = angular.module('Scrapbooktest', ['ngRoute', 'iso.directives', 'iso.services']);
//
//apptest.config(function ($routeProvider, $locationProvider) {
//  $locationProvider.hashPrefix('');
//  $routeProvider
//  .when('/', {
//    templateUrl : '/js/app/entry_test.html',
//    controller  : 'ScrapbookControllertest'
//  })
//})