'use strict';

bookletApp.service("taxonomySvc", function($http) {
    var _this = this;

    _this.taxonomy = [];
    _this.selectedDomain = -1;
    _this.selectedConstruct = -1;

    var getTaxonomy = function() {
        $http.get('data/taxonomy.json').success(function(data) {
            _this.taxonomy = preselectQuestions(data);
        });
    };

    var preselectQuestions = function(data) {
        for (var domainIdx = 0; domainIdx < data.length; domainIdx++) {
            for (var constructIdx = 0;
                 constructIdx < data[domainIdx].constructs.length;
                 constructIdx++) {
                for (var questionIdx = 0;
                     questionIdx < data[domainIdx].constructs[constructIdx].questions.length;
                     questionIdx++) {
                    data[domainIdx].constructs[constructIdx].questions[questionIdx].selected = true;
                }
            }
        }
        return data;
    };

    var isTaxonomyLoaded = function() {
        return _this.taxonomy.length > 0;
    };

    var getDomains = function() {
        return _this.taxonomy;
    };

    var setSelectedDomain = function(idx) {
        _this.selectedDomain = idx;
    };

    var getSelectedDomain = function() {
        return _this.taxonomy[_this.selectedDomain];
    };

    var setSelectedConstruct = function(idx) {
        _this.selectedConstruct = idx;
    };

    var getSelectedConstruct = function() {
        return _this.selectedDomain[_this.selectedConstruct];
    };

    var getDomainTitle = function(domainName) {
        return domainName.split(' ').join('_');
    };

    var getConstructTitle = function(constructName) {
        constructName = constructName.split(' ').join('_');
        return constructName.split('&').join('%26');
    };

    return {
        getTaxonomy: getTaxonomy,
        isTaxonomyLoaded: isTaxonomyLoaded,
        getDomains: getDomains,
        setSelectedDomain: setSelectedDomain,
        getSelectedDomain: getSelectedDomain,
        setSelectedConstruct: setSelectedConstruct,
        getSelectedConstruct: getSelectedConstruct,
        getDomainTitle: getDomainTitle,
        getConstructTitle: getConstructTitle
    }
});