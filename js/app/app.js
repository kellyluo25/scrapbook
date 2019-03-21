var app = angular.module('ScrapbookApp', ['ngRoute', 'iso.directives', 'iso.services']);

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/', {
    templateUrl : 'js/app/entry.html',
    controller  : 'ScrapbookController'
  })
})

// linebreaks filter \n
app.filter('linebreaks', function () {
    return function(text) {
        return text.replace(/\n/g,'<br />'); 
    }
});