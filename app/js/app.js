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
        //noinspection JSCheckFunctionSignatures
        $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
        //noinspection JSCheckFunctionSignatures
        $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
        $routeProvider.otherwise({redirectTo: '/view1'});
    }
]);
