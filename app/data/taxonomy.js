var domains = {
	"Intervention_Characteristics": {
        "id": 1,
        "name": "Intervention Characteristics",
		"description": "Key attributes of interventions influence the success of implementation.",
		"constructs": {
            "Intervention_Source": {
                "id": 1,
				"name": "Intervention Source",
				"description": "Perception of key stakeholders about whether the intervention is externally or internally developed.",
				"questions": [
                    {
                        "number": "1_1_1",
                        "text": "How did your site become involved in XXX?",
                        "probes": [
                            "How was the decision made to participate in XXX?",
                            "Who participated in the decision-making process?"
                        ],
                        "selected": true
                    }
                ]
			},
            "Evidence_Strength_Quality": {
                "id": 2,
				"name": "Evidence Strength & Quality",
				"description": "Stakeholders’ perceptions of the quality and validity of evidence supporting the belief that the intervention will have desired outcomes.",
				"questions" : [
					{
					    "number": "1_1_2",
					    "text": "What kind of information or evidence were you aware of that showed whether or not XXX would work?",
					    "probes": [
							"Information from your own research, consensus guidelines, published literature, or other sources? From co- workers? From supervisors?",
							"To what degree did the evidence influence your perception of XXX?"
					    ],
                        "selected": true
				    }
				]
			},
            "Relative_Advantage": {
                "id": 3,
				"name": "Relative Advantage",
				"description": "Stakeholders’ perception of the advantage of implementing the intervention versus an alternative solution."
			},
            "Adaptability": {
                "id": 4,
				"name": "Adaptability",
				"description": "The degree to which an intervention can be adapted, tailored, " +
								"refined, or reinvented to meet local needs.",
				"questions": [
					{
						"number": "1_4_1",
						"text": "Did you feel you had enough flexibility (the ability to change aspects of the program to make it work) to implement the program in a way that would work best in your facility?",
						"probes": [
							"Why or why not?"
                        ],
                        "selected": true
                    },
                    {
                        "number": "1_4_2",
                        "text": "What was flexible or adaptable? Inflexible or not adaptable?",
                        "selected": true
                    }
                ]
            }
        }
    },
    "Inner_Setting": {
        "id": 2,
        "name": "Inner Setting",
		"description": "None available",
		"constructs": {
            "Relative_Priority": {
                "id": 1,
				"name": "Relative Priority",
				"description":"Individuals' shared perception of the importance of the implementation within the organization",
				"questions": [
				    {
					    "number": "2_1_1",
					    "text": "How do you rank XXX' s priority with respect to other priorities in your department/unit/organization?",
					    "probes": [
						    "Can you describe the reason for your ranking?"
					    ],
                        "selected": true
				    },
				    {
					    "number": "2_1_2",
					    "text": "How do you think your colleagues rank XXX's priority with respect to other priorities in your department/unit/organization?",
					    "probes": [
						    "Why is this your perception of your colleagues ranking?"
					    ],
                        "selected": true
				    }
				]
			}
        }
	}
};