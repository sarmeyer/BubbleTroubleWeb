var app = angular.module('game', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html'
        })
        .when('/game', {
            templateUrl: 'partials/game.html'
        })
        .when('/about', {
            templateUrl: 'partials/about.html'
        })
})
