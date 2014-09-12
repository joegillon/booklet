'use strict';

var bookletApp = angular.module('bookletApp');

bookletApp.service("taxonomySvc", function($http) {
    var _this = this;

    _this.taxonomy = [];
    _this.currentDomain = -1;
    _this.currentConstruct = -1;
    _this.currentSubconstruct = -1;

    var getTaxonomy = function() {
        $http.get('data/taxonomy.json').success(function(data) {
            _this.taxonomy = addQuestionProperties(data);
        });
    };

    var setTaxonomy = function(data) {
        _this.taxonomy = addQuestionProperties(data);
    };

    var addQuestionProperties = function(data) {
        for (var didx = 0; didx < data.length; didx++) {
            var domain = data[didx];
            domain.selected = false;
            for (var cidx = 0; 
                     cidx < domain.constructs.length; 
                     cidx++) {
                var construct = domain.constructs[cidx];
                initConstruct(construct, didx, cidx);
                if (construct.subconstructs !== undefined) {
                    for (var sidx = 0; 
                             sidx < construct.subconstructs.length; 
                             sidx++) {
                        var subconstruct = construct.subconstructs[sidx];
                        initConstruct(subconstruct, didx, cidx, sidx);
                    }
                }
            }
        }
        return data;
    };

    var initConstruct = function(construct, didx, cidx, sidx) {
        construct.selected = false;
        if (construct.questions === undefined) {
            return;
        }
        for (var qidx = 0; qidx < construct.questions.length; qidx++) {
            var question = construct.questions[qidx];
            var ref = didx.toString() + '_' + 
                      cidx.toString() + '_' +
                      (sidx === undefined ? '' : sidx.toString()) + '_' +
                      qidx.toString(); 
            question.ref = ref;
            question.selected = false;
        }
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
        return _this.taxonomy
                [_this.currentDomain].
                    constructs[_this.currentConstruct];
    };

    var setCurrentSubconstruct = function(idx) {
        _this.currentSubconstruct = idx;
    };

    var getCurrentSubconstruct = function() {
        return _this.taxonomy
            [_this.currentDomain].
                constructs[_this.currentConstruct].
                    subconstructs[_this.currentSubconstruct];
    };

    var getTitle = function(name) {
        name = name.split('&').join('%26');
        return name.split(' ').join('_');
    };

    var getSelectedQuestions = function() {
        var result = [];
        var domains = getDomains();
        for (var didx = 0; didx < domains.length; didx++) {
            var domain = domains[didx];
            for (var cidx = 0; cidx < domain.constructs.length; cidx++) {
                var construct = domain.constructs[cidx];
                var ques = getConstructQuestions(
                            construct, 
                            domain.selected,
                            construct.selected);
                result = result.concat(ques);
                if (construct.subconstructs !== undefined) {
                    for (var sidx = 0;
                             sidx < construct.subconstructs.length;
                             sidx++) {
                        var subconstruct = construct.subconstructs[sidx];
                        ques = getConstructQuestions(
                                subconstruct, 
                                domain.selected, 
                                construct.selected,
                                subconstruct.selected
                                );
                        result = result.concat(ques);
                    }
                }
            }
        }
        return result;
    };

    var getConstructQuestions = function(construct, dsel, csel, ssel) {
        var result = [];
        if (construct.questions === undefined) {
            return result;
        }
        ssel = ssel || false;
        for (var qidx = 0; qidx < construct.questions.length; qidx++) {
            var question = construct.questions[qidx];
            if (dsel || csel || ssel || question.selected) {
                result.push(question.ref);
            }
        }
        return result;
    };

    var getGuide = function(selectedTaxonomy) {
        var guide = [];
        var qidx, question;

        for (var dIdx=0; dIdx<selectedTaxonomy.length; dIdx++) {
            var taxDomain = selectedTaxonomy[dIdx];
            if (taxDomain.selected) {
                guide.push(taxDomain);
            } 
            else {
                var guideDomain = {
                    name: taxDomain.name,
                    constructs: []
                };
                for (var cIdx=0; cIdx<taxDomain.constructs.length; cIdx++) {
                    var taxConstruct = taxDomain.constructs[cIdx];
                    if (taxConstruct.selected) {
                        guideDomain.constructs.push(taxConstruct);
                    }
                    else {
                        var guideConstruct = {
                            name: taxConstruct.name,
                            questions: []
                        };
                        if (taxConstruct.questions) {
                            for (qidx=0; qidx<taxConstruct.questions.length; qidx++) {
                                question = taxConstruct.questions[qidx];
                                if (question.selected) {
                                    guideConstruct.questions.push(question);
                                }
                            }
                        }
                        if (taxConstruct.subconstructs) {
                            guideConstruct.subconstructs = [];
                            for (var sidx=0; sidx<taxConstruct.subconstructs.length; sidx++) {
                                var taxSubconstruct = taxConstruct.subconstructs[sidx];
                                if (taxSubconstruct.selected) {
                                    guideConstruct.subconstructs.push(taxSubconstruct);
                                }
                                else {
                                    var guideSubconstruct = {
                                        name: taxSubconstruct.name,
                                        questions: []
                                    };
                                    for (qidx=0; qidx<taxSubconstruct.questions.length; qidx++) {
                                        question = taxSubconstruct.questions[qidx];
                                        if (question.selected) {
                                            guideSubconstruct.questions.push(question);
                                        }
                                    }
                                    if (guideSubconstruct.questions.length > 0) {
                                        guideConstruct.subconstructs.push(guideSubconstruct);
                                    }
                                }
                            }
                            if (guideConstruct.questions.length > 0 || 
                                    guideConstruct.subconstructs.length > 0) {
                                guideDomain.constructs.push(guideConstruct);
                            }
                        }
                    }
                }
                if (guideDomain.constructs.length > 0) {
                    guide.push(guideDomain);
                }
            }
        }
        return guide;
    };

    var getIndexes = function(selection) {
        var indexes = selection.split('_');
        return {
            domainIdx: parseInt(indexes[0]),
            constructIdx: parseInt(indexes[1]),
            subconstructIdx: indexes[2] ? parseInt(indexes[2]) : -1,
            questionIdx: parseInt(indexes[3])
        };
    };

    var buildConstruct = function(taxConstruct) {
        var myConstruct = {
            'name': taxConstruct.name,
            'questions': []
        };
        if ('intro' in taxConstruct) {
            myConstruct.intro = taxConstruct.intro;
        }
        if ('guidelines' in taxConstruct) {
            myConstruct.guidelines = taxConstruct.guidelines;
        }
        return myConstruct;
    };

    return {
        setTaxonomy: setTaxonomy,
        getDomains: getDomains,
        setCurrentDomain: setCurrentDomain,
        getCurrentDomainIdx: getCurrentDomainIdx,
        getCurrentDomain: getCurrentDomain,
        setCurrentConstruct: setCurrentConstruct,
        getCurrentConstruct: getCurrentConstruct,
        setCurrentSubconstruct: setCurrentSubconstruct,
        getCurrentSubonstruct: getCurrentSubconstruct,
        getTitle: getTitle,
        getSelectedQuestions: getSelectedQuestions,
        getGuide: getGuide
    };
});
