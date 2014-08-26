'use strict';

var bookletApp = angular.module('bookletApp');

bookletApp.service("taxonomySvc", function($http) {
    var _this = this;

    _this.taxonomy = [];
    _this.currentDomain = -1;
    _this.currentConstruct = -1;

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
            domain.selected = false;
            for (var constructIdx = 0; constructIdx < domain.constructs.length; constructIdx++) {
                var construct = domain.constructs[constructIdx];
                construct.selected = false;
                var numQuestions = (construct.questions === undefined) ? 0 : construct.questions.length;
                for (var questionIdx = 0; questionIdx < numQuestions; questionIdx++) {
                    var question = construct.questions[questionIdx];
                    var ref = domainIdx.toString() + '_' + 
                              constructIdx.toString() + '_' +
                              questionIdx.toString(); 
                    question.ref = ref;
                    question.selected = false;
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

    var setCurrentDomain = function(idx) {
        _this.currentDomain = idx;
    };

    var getCurrentDomainIdx = function() {
        return _this.currentDomain;
    };

    var getCurrentDomain = function() {
        return _this.taxonomy[_this.currentDomain];
    };

    var setCurrentConstruct = function(idx) {
        _this.currentConstruct = idx;
    };

    var getCurrentConstruct = function() {
        return _this.taxonomy[_this.currentDomain].constructs[_this.currentConstruct];
    };

    var getDomainTitle = function(domainName) {
        if (typeof domainName === 'undefined') {
            domainName = getCurrentDomain().name;
        }
        return domainName.split(' ').join('_');
    };

    var getConstructTitle = function(constructName) {
        if (typeof constructName === 'undefined') {
            constructName = _this.currentConstruct.name;
        }
        constructName = constructName.split(' ').join('_');
        return constructName.split('&').join('%26');
    };

    var getSelectedQuestions = function() {
        var result = [];
        var domains = getDomains();
        for (var didx = 0; didx < domains.length; didx++) {
            var domain = domains[didx];
            for (var cidx = 0; cidx < domain.constructs.length; cidx++) {
                var construct = domain.constructs[cidx];
                if (construct.questions !== undefined) {
                    for (var qidx = 0; qidx < construct.questions.length; qidx++) {
                        var question = construct.questions[qidx];
                        if (domain.selected || 
                            construct.selected || 
                            question.selected) {
                            result.push(question.ref);
                        }
                    }
                }
            }
        }
        return result;
    };

    var getGuide = function(selections) {
        if (selections === undefined || selections.length === 0) {
            return {};
        }
        var guide = _this.taxonomy;

        for (var idx = 0; idx < selections.length; idx++) {

            var indexes = selections[idx].split('_');
            var domainIdx = parseInt(indexes[0]);
            var constructIdx = parseInt(indexes[1]);
            var questionIdx = parseInt(indexes[2]);

            var domain = guide[domainIdx];
            domain.selected = true;

            var construct = domain.constructs[constructIdx];
            construct.selected = true;

            var question = construct.questions[questionIdx];
            question.selected = true;
        }
        return guide;
    };

    return {
        setTaxonomy: setTaxonomy,
        isTaxonomyLoaded: isTaxonomyLoaded,
        getDomains: getDomains,
        setCurrentDomain: setCurrentDomain,
        getCurrentDomainIdx: getCurrentDomainIdx,
        getCurrentDomain: getCurrentDomain,
        setCurrentConstruct: setCurrentConstruct,
        getCurrentConstruct: getCurrentConstruct,
        getDomainTitle: getDomainTitle,
        getConstructTitle: getConstructTitle,
        getSelectedQuestions: getSelectedQuestions,
        getGuide: getGuide
    };
});
