'use strict';

var bookletApp = angular.module('bookletApp');

bookletApp.controller('DomainsCtrl',
    function($scope, theTaxonomy, taxonomySvc) {
        taxonomySvc.setTaxonomy(theTaxonomy);
        $scope.domains = taxonomySvc.getDomains();

        $scope.setSelectedDomain = function(idx) {
            taxonomySvc.setSelectedDomain(idx);
        };
    }
);

bookletApp.controller('ConstructCtrl',
    function($scope, taxonomySvc) {
        $scope.selectedDomain = taxonomySvc.getSelectedDomain();
        $scope.domainTitle = taxonomySvc.getDomainTitle($scope.selectedDomain.name);

        $scope.constructTitle = function(constructName) {
            return taxonomySvc.getConstructTitle(constructName);
        };

        $scope.setSelectedConstruct = function(idx) {
            taxonomySvc.setSelectedConstruct(idx);
        };

        $scope.chooseDomain = function() {
            taxonomySvc.chooseDomain(taxonomySvc.getSelectedDomainIdx());
        };

        $scope.chooseConstruct = function(idx) {
            taxonomySvc.chooseConstruct(taxonomySvc.getSelectedDomainIdx(), idx);
        };
    }
);

bookletApp.controller('QuestionCtrl',
    function($scope, taxonomySvc) {
        $scope.selectedDomain = taxonomySvc.getSelectedDomain();
        $scope.selectedConstruct = taxonomySvc.getSelectedConstruct();
        $scope.selected = !$scope.selected;
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
