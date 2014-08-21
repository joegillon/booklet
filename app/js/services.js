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

    var setTaxonomy = function(data) {
        _this.taxonomy = preselectQuestions(data);
    };

    var preselectQuestions = function(data) {
        for (var domainIdx = 0; domainIdx < data.length; domainIdx++) {
            for (var constructIdx = 0;
                 constructIdx < data[domainIdx].constructs.length;
                 constructIdx++) {
                var numQuestions = (data[domainIdx].constructs[constructIdx].questions === undefined) ?
                        0 : data[domainIdx].constructs[constructIdx].questions.length;
                for (var questionIdx = 0; questionIdx < numQuestions; questionIdx++) {
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
        return _this.taxonomy[_this.selectedDomain].constructs[_this.selectedConstruct];
    };

    var getDomainTitle = function(domainName) {
        return domainName.split(' ').join('_');
    };

    var getConstructTitle = function(constructName) {
        constructName = constructName.split(' ').join('_');
        return constructName.split('&').join('%26');
    };

    var buildGuide = function() {
        var domains = getDomains();
        var guide = {};
        for (var domainName in domains) {
            if (domains.hasOwnProperty(domainName)) {
                var domain = domains[domainName];
                for (var constructName in domain.constructs) {
                    if (domain.constructs.hasOwnProperty(constructName)) {
                        var construct = domain.constructs[constructName];
                        for (var questionNum in construct.questions) {
                            if (construct.questions.hasOwnProperty(questionNum)) {
                                var question = construct.questions[questionNum];
                                if (question.selected) {
                                    if (!(domainName in guide)) {
                                        guide[domainName] = {
                                            'name': domain.name,
                                            'constructs': {}
                                        };
                                    }
                                    if (!(constructName in guide[domainName].constructs)) {
                                        guide[domainName].constructs[constructName] = {
                                            'name': construct.name,
                                            'questions': {},
                                            'guidelines': construct.guidelines
                                        };
                                    }
                                    guide[domainName].constructs[constructName].questions[questionNum] = question;
                                }
                            }
                        }
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
        buildGuide: buildGuide
    }
});