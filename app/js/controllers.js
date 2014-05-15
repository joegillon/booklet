'use strict';

/* Controllers */

var bookletControllers = angular.module('bookletControllers', []);

bookletControllers.controller('MyCtrl1',
    function($scope, $routeParams) {
        $scope.domainsLength = Object.keys(domains).length;
        $scope.domains = domains;
        $scope.selected_domain = domains[$routeParams.domain];
    }
);

bookletControllers.controller('MyCtrl2',
    function($scope) {

    }
);

