'use strict';

/* Controllers */

var bookletControllers = angular.module('bookletControllers', []);

bookletControllers.controller('DomainsCtrl',
    function($scope) {
        $scope.domainsLength = Object.keys(taxonomy).length;
        $scope.domains = taxonomy;
    }
);

bookletControllers.controller('SelectedDomainCtrl',
    function($scope, $rootScope, $routeParams) {
        $scope.selected_domain = taxonomy[$routeParams.domain];
        $rootScope.selected_domain = $scope.selected_domain;
        $scope.selected_domain_key = $routeParams.domain;
    }
);

bookletControllers.controller('QuestionCtrl',
    function($scope, $rootScope, $routeParams) {
        $scope.selected_domain = $rootScope.selected_domain;
        if ($scope.selected_domain !== undefined) {
            $scope.selected_construct = $rootScope.selected_domain.constructs[$routeParams.construct];
            $scope.selected_construct_key = $routeParams.construct;
        }
    }
);

bookletControllers.controller('GuideCtrl',
    function($scope, $cookieStore) {
        $scope.saveGuide = function() {
            $cookieStore.put("selections", taxonomy);
        }
        $scope.guide = buildGuide($cookieStore.get("selections"));
    }
);

function buildGuide(domains) {
    var guide = {};
    for (var domainName in domains) {
        if (domains.hasOwnProperty(domainName)) {
            var domain = domains[domainName];
            for (var constructName in domain.constructs) {
                if (domain.constructs.hasOwnProperty(constructName)) {
                    var construct = domain.constructs[constructName];
                    for (var questionNum in construct.questions) {
                        if (construct.questions.hasOwnProperty(questionNum)) {
                            var question = construct.questions[questionNum];
                            if (question.selected) {
                                if (!(domainName in guide)) {
                                    guide[domainName] = {
                                        'name': domain.name,
                                        'constructs': {}
                                    };
                                }
                                if (!(constructName in guide[domainName].constructs)) {
                                    guide[domainName].constructs[constructName] = {
                                        'name': construct.name,
                                        'questions': {}
                                    };
                                }
                                guide[domainName].constructs[constructName].questions[questionNum] = question;
                            }
                        }
                    }
                }
            }
        }
    }
    return guide;
}
