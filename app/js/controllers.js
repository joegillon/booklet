'use strict';

bookletApp.controller('DomainsCtrl',
    function($scope, $rootScope, $http) {
        $http.get('data/taxonomy.json').success(function(data) {
            $rootScope.taxonomy = data;
            $scope.domains = data;
            $scope.domainsLength = $scope.domains.length;
        });
    }
);

bookletApp.controller('SelectedDomainCtrl',
    function($scope, $rootScope, $routeParams) {
        $scope.selected_domain_idx = $routeParams.domainIdx;
        $scope.selected_domain = $rootScope.taxonomy[$scope.selected_domain_idx];
        $rootScope.selected_domain = $scope.selected_domain;
        $scope.domain_title = $scope.selected_domain.name.split(' ').join('_');
        $scope.construct_title = function(construct_name) {
            construct_name = construct_name.split(' ').join('_');
            return construct_name.split('&').join('%26');
        }
    }
);

bookletApp.controller('QuestionCtrl',
    function($scope, $rootScope, $routeParams) {
        $scope.selected_domain = $rootScope.selected_domain;
        if ($scope.selected_domain !== undefined) {
            $scope.selected_construct = $rootScope.selected_domain.constructs[$routeParams.constructIdx];

            // Pre-select all questions
            for (var i = 0; i < $scope.selected_construct.questions.length; i++) {
                $scope.selected_construct.questions[i].selected = true;
            }
        }
    }
);

bookletApp.controller('GuideCtrl',
    function($scope, $rootScope, $cookieStore) {
        $scope.saveGuide = function() {
            $cookieStore.put("selections", $rootScope.taxonomy);
        };

        var buildGuide = function(domains) {
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
                                                'questions': {},
                                                'guidelines': construct.guidelines
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
        };

        $scope.guide = buildGuide($cookieStore.get("selections"));
    }
);
