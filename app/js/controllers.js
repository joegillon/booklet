'use strict';

var bookletApp = angular.module('bookletApp');

bookletApp.controller('NavCtrl', 
    function($scope, $route, theTaxonomy, taxonomySvc) {
        $scope.reset = function() {
            taxonomySvc.setTaxonomy(theTaxonomy);
            $scope.domains = taxonomySvc.getDomains();

            // $cookieStore.remove('selections');
        };
    }
);

bookletApp.controller('SelectionCtrl',
    function($scope, WIKI_URL, theTaxonomy, taxonomySvc) {
        taxonomySvc.setTaxonomy(theTaxonomy);
        $scope.domains = taxonomySvc.getDomains();

        // $cookieStore.remove('selectedTaxonomy');

        $scope.wikiUrl = function(name) {
            return WIKI_URL + taxonomySvc.getTitle(name);
        };

    }
);

bookletApp.controller('GuideCtrl',
    function($scope, localStorageService, taxonomySvc) {
        $scope.saveGuide = function() {
            // var selections = taxonomySvc.getSelectedQuestions();
            // if (selections.length > 0) {
            //     $cookieStore.put("selections", selections);
            // }
            localStorageService.set("selectedTaxonomy", taxonomySvc.getDomains());
        };

        $scope.guide = function() {
            // taxonomySvc.setTaxonomy(theTaxonomy);
            var selectedTaxonomy = localStorageService.get('selectedTaxonomy');
            return taxonomySvc.getGuide(selectedTaxonomy);
        };
    }
);
