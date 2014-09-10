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

    var getGuide = function(selections) {
        if (selections === undefined || selections.length === 0) {
            return [];
        }

        var tax = _this.taxonomy;
        var curQuestion;

        var guide = [];
        var idx = 0;
        var indexes = getIndexes(selections[idx]);
        do {
            var curDomainIdx = indexes.domainIdx;
            var taxDomain = tax[curDomainIdx];
            var curDomain = {
                'name': taxDomain.name,
                'constructs': []
            };
            guide.push(curDomain);

            do {
                var curConstructIdx = indexes.constructIdx;
                var taxConstruct = taxDomain.constructs[curConstructIdx];
                var curConstruct = buildConstruct(taxConstruct);
                curDomain.constructs.push(curConstruct);

                if (indexes.subconstructIdx != -1) {
                    do {
                        var curSubconstructIdx = indexes.subconstructIdx;
                        var taxSubconstruct = taxConstruct.subconstructs[curSubconstructIdx];
                        var curSubconstruct = buildConstruct(taxSubconstruct); 
                        curConstruct.subconstructs.push(curSubconstruct);
                        do {
                            curQuestion = taxSubconstruct.questions[indexes.subconstructIdx];
                            curSubconstruct.questions.push(curQuestion);
                            idx++;
                            if (idx < selections.length) {
                                indexes = getIndexes(selections[idx]);
                            }
                        } while (idx < selections.length && indexes.subconstructIdx == curSubconstructIdx);
                    } while (idx < selections.length && indexes.constructIdx == curConstructIdx);
                } else {
                    do {
                        curQuestion = taxConstruct.questions[indexes.questionIdx];
                        curConstruct.questions.push(curQuestion);
                        idx++;
                        if (idx < selections.length) {
                            indexes = getIndexes(selections[idx]);
                        }
                    } while(idx < selections.length && indexes.constructIdx == curConstructIdx);
                }
            } while (idx < selections.length && indexes.domainIdx == curDomainIdx);
        } while (idx < selections.length);

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
