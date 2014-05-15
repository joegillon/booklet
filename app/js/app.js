'use strict';

// Declare app level module which depends on filters, and services
var bookletApp = angular.module('bookletApp', [
  'ngRoute',
//  'bookletFilters',
//  'bookletServices',
//  'bookletDirectives',
  'bookletControllers'
]);

bookletApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/intro.html', controller: 'MyCtrl1'});
        $routeProvider.when('/domain', {templateUrl: 'partials/domain.html', controller: 'MyCtrl1'});
        //noinspection JSCheckFunctionSignatures
        $routeProvider.when('/selected_domain/:domain', {templateUrl: 'partials/selected_domain.html', controller: 'MyCtrl2'});
        $routeProvider.otherwise({redirectTo: '/', controller: 'MyCtrl1'});
    }
]);
