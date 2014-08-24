'use strict';

var bookletApp = angular.module('bookletApp');

bookletApp.service("taxonomySvc", function($http) {
    var _this = this;

    _this.taxonomy = [];
    _this.selectedDomain = -1;
    _this.selectedConstruct = -1;

    var getTaxonomy = function() {
        $http.get('data/taxonomy.json').success(function(data) {
            _this.taxonomy = addQuestionProperties(data);
        });
    };

    var setTaxonomy = function(data) {
        _this.taxonomy = addQuestionProperties(data);
    };

    var addQuestionProperties = function(data) {
        for (var domainIdx = 0; domainIdx < data.length; domainIdx++) {
            var domain = data[domainIdx];
            for (var constructIdx = 0; constructIdx < domain.constructs.length; constructIdx++) {
                var construct = domain.constructs[constructIdx];
                var numQuestions = (construct.questions === undefined) ? 0 : construct.questions.length;
                for (var questionIdx = 0; questionIdx < numQuestions; questionIdx++) {
                    var question = construct.questions[questionIdx];
                    var ref = domainIdx.toString() + '_' + 
                              constructIdx.toString() + '_' +
                              questionIdx.toString(); 
                    question.ref = ref;
                    question.selected = true;
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
        return _this.taxonomy[_this.selectedDomain].constructs[_this.selectedConstruct];
    };

    var getDomainTitle = function(domainName) {
        return domainName.split(' ').join('_');
    };

    var getConstructTitle = function(constructName) {
        constructName = constructName.split(' ').join('_');
        return constructName.split('&').join('%26');
    };

    var getDeselectedQuestions = function() {
        var result = [];
        var domains = getDomains();
        for (var domainIdx = 0; domainIdx < domains.length; domainIdx++) {
            var domain = domains[domainIdx];
            for (var constructIdx = 0; constructIdx < domain.constructs.length; constructIdx++) {
                var construct = domain.constructs[constructIdx];
                var numQuestions = (construct.questions === undefined) ? 0 : construct.questions.length;
                for (var questionIdx = 0; questionIdx < numQuestions; questionIdx++) {
                    var question = construct.questions[questionIdx];
                    if (!question.selected) {
                        result.push(question.ref);
                    }
                }
            }
        }
        return result;
    };

    var getGuide = function(deselections) {
        var guide = getDomains();
        if (deselections === undefined || deselections.length === 0) {
            return guide;
        }
        for (var domainIdx = 0; domainIdx < guide.length; domainIdx++) {
            var domain = guide[domainIdx];
            for (var constructIdx = 0; constructIdx < domain.constructs.length; constructIdx++) {
                var construct = domain.constructs[constructIdx];
                var numQuestions = (construct.questions === undefined) ? 0 : construct.questions.length;
                for (var questionIdx = 0; questionIdx < numQuestions; questionIdx++) {
                    var question = construct.questions[questionIdx];

                    // Remove deselected questions
                    if (deselections.indexOf(question.ref) > -1 ) {
                        construct.questions.splice(questionIdx, 1);
                    } 
                }
            }
        }
        return guide;
    };

    return {
        setTaxonomy: setTaxonomy,
        isTaxonomyLoaded: isTaxonomyLoaded,
        getDomains: getDomains,
        setSelectedDomain: setSelectedDomain,
        getSelectedDomain: getSelectedDomain,
        setSelectedConstruct: setSelectedConstruct,
        getSelectedConstruct: getSelectedConstruct,
        getDomainTitle: getDomainTitle,
        getConstructTitle: getConstructTitle,
        getDeselectedQuestions: getDeselectedQuestions,
        getGuide: getGuide
    };
});
