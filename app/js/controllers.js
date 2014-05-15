'use strict';

/* Controllers */

var bookletControllers = angular.module('bookletControllers', []);

bookletControllers.controller('MyCtrl1',
    function($scope) {
        $scope.domainsLength = Object.keys(domains).length;
        $scope.domains = domains;
        $scope.intervention_characteristics = domains["Intervention Characteristics"];
    }
);

bookletControllers.controller('MyCtrl2',
    function($scope) {

    }
);

