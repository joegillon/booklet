'use strict';

// Declare app level module which depends on filters, and services
var bookletApp = angular.module('bookletApp', [
  'ngRoute',
  'LocalStorageModule'
]);

bookletApp.constant('WIKI_URL', "http://cfirwiki.net/wiki/index.php?title=");

bookletApp.config(['$routeProvider',
    function($routeProvider) {
        //noinspection JSCheckFunctionSignatures
        $routeProvider.when('/',
            {
                templateUrl: 'partials/intro.html'
            }
        );
        //noinspection JSCheckFunctionSignatures
        $routeProvider.when('/guide_select',
            {
                templateUrl: 'partials/guide_select.html'
            }
        );
        //noinspection JSCheckFunctionSignatures
        $routeProvider.when('/guide',
            {
                templateUrl: 'partials/guide_howto.html'
            }
        );
        //noinspection JSCheckFunctionSignatures
        $routeProvider.otherwise(
            {
                redirectTo: '/'
            }
        );
    }
]);
