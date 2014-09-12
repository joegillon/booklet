'use strict';

var bookletApp = angular.module('bookletApp');

bookletApp.controller('NavCtrl', 
    function($scope, localStorageService, theTaxonomy, taxonomySvc) {

        $scope.reset = function() {
            taxonomySvc.setTaxonomy(theTaxonomy);
            $scope.domains = taxonomySvc.getDomains();
            localStorageService.remove('selectedTaxonomy');
        };
    }
);

bookletApp.controller('SelectionCtrl',
    function($scope, WIKI_URL, theTaxonomy, taxonomySvc) {
        taxonomySvc.setTaxonomy(theTaxonomy);
        $scope.domains = taxonomySvc.getDomains();

        $scope.wikiUrl = function(name) {
            return WIKI_URL + taxonomySvc.getTitle(name);
        };

    }
);

bookletApp.controller('GuideCtrl',
    function($scope, localStorageService, taxonomySvc) {
        $scope.saveGuide = function() {
            localStorageService.set("selectedTaxonomy", taxonomySvc.getDomains());
        };

        $scope.guide = function() {
            var selectedTaxonomy = localStorageService.get('selectedTaxonomy');
            return taxonomySvc.getGuide(selectedTaxonomy);
        };
    }
);
