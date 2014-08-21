'use strict';

bookletApp.controller('DomainsCtrl',
    function($scope, $http, taxonomySvc) {
        $http.get('data/taxonomy.json').success(function(data) {
            taxonomySvc.setTaxonomy(data);
            $scope.domains = taxonomySvc.getDomains();
        });

        $scope.setSelectedDomain = function(idx) {
            taxonomySvc.setSelectedDomain(idx);
        }
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
        }
    }
);

bookletApp.controller('QuestionCtrl',
    function($scope, taxonomySvc) {
        $scope.selected_domain = taxonomySvc.getSelectedDomain();
        $scope.selected_construct = taxonomySvc.getSelectedConstruct();
    }
);

bookletApp.controller('GuideCtrl',
    function($scope, $window, ngDialog, taxonomySvc) {
        $scope.guide = taxonomySvc.buildGuide();
        $scope.showGuide = function() {
            // ngDialog.open({
            //     template: 'theGuide.html',
            //     className: 'ngdialog-theme-default',
            //     scope: $scope
            // });
            $window.open('http://www.nhl.com');
        };
    }
);
