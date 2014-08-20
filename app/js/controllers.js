'use strict';

bookletApp.controller('DomainsCtrl',
    function($scope, taxonomySvc) {
        if (!taxonomySvc.isTaxonomyLoaded()) {
            taxonomySvc.getTaxonomy();
        }
        $scope.domains = taxonomySvc.getDomains();
    }
);

bookletApp.controller('ConstructCtrl',
    function($scope, $routeParams, taxonomySvc) {
        var selected_domain_idx = $routeParams.domainIdx;
        taxonomySvc.setSelectedDomain(selected_domain_idx);
        var selected_domain = taxonomySvc.getSelectedDomain();
        $scope.domain_title = taxonomySvc.getDomainTitle(selected_domain.name);
        $scope.construct_title = function(construct_name) {
            return taxonomySvc.getConstructTitle(construct_name);
        };
        $scope.selected_domain = selected_domain;
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
