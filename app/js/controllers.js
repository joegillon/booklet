'use strict';

/* Controllers */

var bookletControllers = angular.module('bookletControllers', []);

bookletControllers.controller('DomainsCtrl',
    function($scope) {
        $scope.domainsLength = Object.keys(domains).length;
        $scope.domains = domains;
    }
);

bookletControllers.controller('SelectedDomainCtrl',
    function($scope, $rootScope, $routeParams) {
        $scope.selected_domain = domains[$routeParams.domain];
        $rootScope.selected_domain = $scope.selected_domain;
        $scope.selected_domain_key = $routeParams.domain;
    }
);

bookletControllers.controller('QuestionCtrl',
    function($scope, $rootScope, $routeParams) {
        $scope.selected_domain = $rootScope.selected_domain;
        $scope.selected_construct = $rootScope.selected_domain.constructs[$routeParams.construct];
        $scope.selected_construct_key = $routeParams.construct;
    }
);
