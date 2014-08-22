'use strict';

bookletApp.controller('DomainsCtrl',
    function($scope, taxonomySvc) {
        taxonomySvc.setTaxonomy(theTaxonomy);
        $scope.domains = taxonomySvc.getDomains();

        $scope.setSelectedDomain = function(idx) {
            taxonomySvc.setSelectedDomain(idx);
        };
    }
);

bookletApp.controller('ConstructCtrl',
    function($scope, taxonomySvc) {
        $scope.selected_domain = taxonomySvc.getSelectedDomain();
        $scope.domain_title = taxonomySvc.getDomainTitle($scope.selected_domain.name);

        $scope.construct_title = function(construct_name) {
            return taxonomySvc.getConstructTitle(construct_name);
        };

        $scope.setSelectedConstruct = function(idx) {
            taxonomySvc.setSelectedConstruct(idx);
        };
    }
);

bookletApp.controller('QuestionCtrl',
    function($scope, taxonomySvc) {
        $scope.selected_domain = taxonomySvc.getSelectedDomain();
        $scope.selected_construct = taxonomySvc.getSelectedConstruct();
    }
);

bookletApp.controller('GuideCtrl',
    function($scope, $cookieStore, taxonomySvc) {
        $scope.saveGuide = function() {
            var deselections = taxonomySvc.getDeselectedQuestions();
            if (deselections.length > 0) {
                $cookieStore.put("deselections", deselections);
            }
        };

        $scope.guide = function() {
            taxonomySvc.setTaxonomy(theTaxonomy);
            var deselections = $cookieStore.get('deselections');
            $cookieStore.remove('deselections');
            return taxonomySvc.getGuide(deselections);
        };
    }
);
