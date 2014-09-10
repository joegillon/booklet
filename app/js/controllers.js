'use strict';

var bookletApp = angular.module('bookletApp');

bookletApp.controller('SelectionCtrl',
    function($scope, $cookieStore, theTaxonomy, taxonomySvc) {
        taxonomySvc.setTaxonomy(theTaxonomy);
        $scope.domains = taxonomySvc.getDomains();

        $cookieStore.remove('selections');

        $scope.reset = function() {
            taxonomySvc.setTaxonomy(theTaxonomy);
            $scope.domains = taxonomySvc.getDomains();

            $cookieStore.remove('selections');
        };

        $scope.getTitle = function(name) {
            return taxonomySvc.getTitle(name);
        };

    }
);

bookletApp.controller('DomainsCtrl',
    function($scope, $cookieStore, theTaxonomy, taxonomySvc) {
        taxonomySvc.setTaxonomy(theTaxonomy);
        $scope.domains = taxonomySvc.getDomains();

        $cookieStore.remove('selections');

        $scope.reset = function() {
            taxonomySvc.setTaxonomy(theTaxonomy);
            $scope.domains = taxonomySvc.getDomains();

            $cookieStore.remove('selections');
        };

        $scope.setCurrentDomain = function(idx) {
            taxonomySvc.setCurrentDomain(idx);
        };
    }
);

bookletApp.controller('ConstructCtrl2',
    function($scope, theTaxonomy, taxonomySvc) {
        taxonomySvc.setTaxonomy(theTaxonomy);
        $scope.domains = taxonomySvc.getDomains();
        $scope.domain = $scope.domains[2];
        $scope.constructs = $scope.domain.constructs;

        $scope.getTitle = function(name) {
            return taxonomySvc.getTitle(name);
        };

        $scope.setCurrentConstruct = function(idx) {
            taxonomySvc.setCurrentConstruct(idx);
        };

        $scope.setCurrentSubconstruct = function(idx) {
            taxonomySvc.setCurrentSubconstruct(idx);
        };
    }
);

bookletApp.controller('ConstructCtrl',
    function($scope, WIKI_URL, taxonomySvc) {
        $scope.domain = taxonomySvc.getCurrentDomain();
        $scope.constructs = $scope.domain.constructs;

        $scope.wikiUrl = function(name) {
            return WIKI_URL + taxonomySvc.getTitle(name);
        };

        $scope.getTitle = function(name) {
            return taxonomySvc.getTitle(name);
        };

        $scope.setCurrentConstruct = function(idx) {
            taxonomySvc.setCurrentConstruct(idx);
        };

        $scope.setCurrentSubconstruct = function(idx) {
            taxonomySvc.setCurrentSubconstruct(idx);
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
