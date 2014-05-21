'use strict';

// Declare app level module which depends on filters, and services
var bookletApp = angular.module('bookletApp', [
  'ngRoute',
  'bookletFilters',
//  'bookletServices',
//  'bookletDirectives',
  'bookletControllers'
]);

bookletApp.config(['$routeProvider',
    function($routeProvider) {
        //noinspection JSCheckFunctionSignatures
        $routeProvider.when('/', {templateUrl: 'partials/intro.html'});
        //noinspection JSCheckFunctionSignatures
        $routeProvider.when('/domain', {templateUrl: 'partials/domain.html'});
        //noinspection JSCheckFunctionSignatures
        $routeProvider.when('/selected_domain/:domain', {templateUrl: 'partials/selected_domain.html'});
        //noinspection JSCheckFunctionSignatures
        $routeProvider.when('/questions/:construct', {templateUrl: 'partials/questions.html'});
        //noinspection JSCheckFunctionSignatures
        $routeProvider.otherwise({redirectTo: '/'});
    }
]);
