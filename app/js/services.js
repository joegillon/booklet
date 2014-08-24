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

    var setSelectedDomain = function(idx) {
        _this.selectedDomain = idx;
    };

    var getSelectedDomainIdx = function() {
        return _this.selectedDomain;
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

    var chooseConstruct = function(domainIdx, constructIdx) {
        var construct = _this.taxonomy[domainIdx].constructs[constructIdx];
        var numQuestions = (construct.questions === undefined) ? 0 : construct.questions.length;
        for (var questionIdx = 0; questionIdx < numQuestions; questionIdx++) {
            var question = construct.questions[questionIdx];
            question.selected = true;
        }
    };

    var chooseDomain = function(domainIdx) {
        var domain = _this.taxonomy[domainIdx];
        for (var constructIdx = 0; constructIdx < domain.constructs.length; constructIdx++) {
            chooseConstruct(domainIdx, constructIdx);
        }
    };

    var getSelectedQuestions = function() {
        var result = [];
        var domains = getDomains();
        for (var domainIdx = 0; domainIdx < domains.length; domainIdx++) {
            var domain = domains[domainIdx];
            for (var constructIdx = 0; constructIdx < domain.constructs.length; constructIdx++) {
                var construct = domain.constructs[constructIdx];
                var numQuestions = (construct.questions === undefined) ? 0 : construct.questions.length;
                for (var questionIdx = 0; questionIdx < numQuestions; questionIdx++) {
                    var question = construct.questions[questionIdx];
                    if (question.selected) {
                        result.push(question.ref);
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
        setSelectedDomain: setSelectedDomain,
        getSelectedDomainIdx: getSelectedDomainIdx,
        getSelectedDomain: getSelectedDomain,
        setSelectedConstruct: setSelectedConstruct,
        getSelectedConstruct: getSelectedConstruct,
        getDomainTitle: getDomainTitle,
        getConstructTitle: getConstructTitle,
        chooseConstruct: chooseConstruct,
        chooseDomain: chooseDomain,
        getSelectedQuestions: getSelectedQuestions,
        getGuide: getGuide
    };
});
