'use strict';

var bookletApp = angular.module('bookletApp');

bookletApp.controller('DomainsCtrl',
    function($scope, $cookieStore, theTaxonomy, taxonomySvc) {
        taxonomySvc.setTaxonomy(theTaxonomy);
        $scope.domains = taxonomySvc.getDomains();

        $cookieStore.remove('selections');

        $scope.setCurrentDomain = function(idx) {
            taxonomySvc.setCurrentDomain(idx);
        };
    }
);

bookletApp.controller('ConstructCtrl',
    function($scope, taxonomySvc) {
        $scope.domain = taxonomySvc.getCurrentDomain();
        $scope.domainTitle = taxonomySvc.getDomainTitle();
        $scope.constructs = $scope.domain.constructs;

        $scope.constructTitle = function(constructName) {
            return taxonomySvc.getConstructTitle(constructName);
        };

        $scope.setCurrentConstruct = function(idx) {
            taxonomySvc.setCurrentConstruct(idx);
        };
    }
);

bookletApp.controller('QuestionCtrl',
    function($scope, taxonomySvc) {
        $scope.currentDomain = taxonomySvc.getCurrentDomain();
        $scope.currentConstruct = taxonomySvc.getCurrentConstruct();
    }
);

bookletApp.controller('GuideCtrl',
    function($scope, $cookieStore, theTaxonomy, taxonomySvc) {
        $scope.saveGuide = function() {
            var selections = taxonomySvc.getSelectedQuestions();
            if (selections.length > 0) {
                $cookieStore.put("selections", selections);
            }
        };

        $scope.guide = function() {
            taxonomySvc.setTaxonomy(theTaxonomy);
            var selections = $cookieStore.get('selections');
            return taxonomySvc.getGuide(selections);
        };
    }
);
