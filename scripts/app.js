var app = angular.module('game', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/game.html',
            controller: 'game'
        })
        .when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'about'
        })
})
