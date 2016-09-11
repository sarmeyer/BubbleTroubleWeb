var app = angular.module('game', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/game', {
            templateUrl: 'partials/game.html'
        })
        .when('/about', {
            templateUrl: 'partials/about.html'
        })
})
