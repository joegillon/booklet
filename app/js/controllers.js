'use strict';

/* Controllers */

var bookletControllers = angular.module('bookletControllers', []);

bookletControllers.controller('MyCtrl1',
    function($scope) {
        $scope.domains = domains;
    }
);

bookletControllers.controller('MyCtrl2',
    function($scope) {

    }
);
