'use strict';

var bookletApp = angular.module('bookletApp');

bookletApp.value('theTaxonomy', [
	{
		"name": "Intervention Characteristics",
        "description": "Key attributes of interventions influence the success of implementation. There is broad support for this in the literature across many scientific disciplines.",
		"constructs": [
			{
				"name": "Intervention Source",
				"description": "Perception of key stakeholders about whether the intervention is externally or internally developed.",
				"questions": [
					{
						"text": "Who developed the intervention?",
						"probes": [
							"What is your opinion of this group/individual?"
						]
					},
                    {
						"text": "Why is the intervention being implemented in your setting?",
						"probes": [
							"Who decided to implement the intervention?", "How was the decision made to implement the intervention?"
						],
                        "guidelines": [
                            {
                                "text": "This question is also related to Process: Engaging. Code responses related to source of the intervention here. Code responses related to who participated in the decision process under Engaging, as an indication of early (or not) engagement. Participation in decision-making is an effective engagement strategy to help people feel ownership of the intervention."
                            }
                        ]
					}
				]
			},
            {
				"name": "Evidence Strength & Quality",
				"description": "Stakeholders' perceptions of the quality and validity of evidence supporting the belief that the intervention will have desired outcomes.",
				"questions": [
					{
                        "text": "What kind of information or evidence are you aware of that shows whether or not the intervention will work in your setting?",
						"probes": [
							"What evidence have you heard about from your own research? Practice guidelines? Published literature? Co-workers? Other settings?", "How does this knowledge affect your perception of the intervention?"
						]
					},
                    {
                        "text": "What do influential stakeholders think of the intervention?",
						"probes": [
							"What do administrative or other leaders think of the intervention?"
						],
                        "guidelines": [
                            {
                                "text": "In a healthcare setting, influential stakeholders may include influential and well-respected clinicians, where as in an education setting, this may include influential and well-respected teachers or educators."
                            }
                        ]
					},
                    {
                        "text": "What kind of supporting evidence or proof is needed about the effectiveness of the intervention to get staff on board?",
						"probes": [
							"Co-workers? Administrative leaders?"
						]
					}
				]
			},
            {
				"name": "Relative Advantage",
				"description": "Stakeholders' perception of the advantage of implementing the intervention versus an alternative solution.",
				"intro": "Coding between Tension for Change, Relative Advantage, and Needs and Resources of Those Served by the Organization will be nuanced but here are some general guidelines:",
				"guidelines": [
                    {
                        "title": "Tension for Change",
                        "text": "Statements that demonstrate a strong need for the intervention and/or that the current situation is untenable."
                    },
                    {
                        "title": "Relative Advantage",
                        "text": "Statements that demonstrate the intervention is better (or worse) than existing programs."
                    },
                    {
                        "title": "Needs and Resources",
                        "text": "Statements regarding specific needs of individuals that demonstrate a need for the intervention, but do not necessarily represent a strong need or an untenable status quo."
                    }
				],
				"questions": [
					{
                        "text": "How does the intervention compare to other similar existing programs in your setting?",
						"probes": [
							"What advantages does the intervention have compared to existing programs?", "What disadvantages does the intervention have compared to existing programs?"
						]
					},
                    {
                        "text": "How does the intervention compare to other alternatives that may have been considered or that you know about?",
						"probes": [
							"What advantages does the intervention have compared to these other programs?", "What disadvantages does the intervention have compared to these other programs?"
						]
					},
                    {
                        "text": "Is there another intervention that people would rather implement?",
						"probes": [
							"Can you describe that intervention?", "Why would people prefer the alternative?"
						]
					}
				]
			},
            {
				"name": "Adaptability",
				"description": "The degree to which an intervention can be adapted, tailored, refined, or reinvented to meet local needs.",
				"questions": [
					{
                        "text": "What kinds of changes or alterations do you think you will need to make to the intervention so it will work effectively in your setting?",
						"probes": [
							"Do you think you will be able to make these changes? Why or why not?"
						]
					},
                    {
                        "text": "Who will decide (or what is the process for deciding) whether changes are needed to the intervention so that it works well in your setting?",
						"probes": [
							"How will you know if it is appropriate to make any changes?"
						]
					},
                    {
                        "text": "Are there components that should not be altered?",
						"probes": [
							"Which ones should not be altered?"
						]
					}
				]
			},
            {
				"name": "Trialability",
                "decription": "The ability to test the intervention on a small scale in the organization, and to be able to reverse course (undo implementation) if warranted.",
				"questions": [
					{
                        "text": "Will the intervention be piloted prior to full-scale implementation?",
						"probes": [
							"[If Yes] Can you describe what your plans are for piloting the intervention?", "[If Yes] What will the pilot look like?"
						]
					}, {
                        "text": "Do you think it would be possible to pilot the intervention before making it available to everyone?",
						"probes": [
							"Why or why not?", "Would this be helpful?"
						]
					}
				]
			},
            {
				"name": "Complexity",
                "description": "Perceived difficulty of implementation, reflected by duration, scope, radicalness, disruptiveness, centrality, and intricacy and number of steps required to implement.",
				"intro": "This construct addresses the complexity of the intervention, not the complexity of the implementation. Challenges related to implementation should be coded to the appropriate CFIR code, e.g. challenges with engaging staff should be coded to Engaging: Key Stakeholders or challenges related to making the intervention a priority for leadership should be (double) coded to Leadership Engagement and Relative Priority.",
				"guidelines": [
                    {
                        "text": "This construct addresses the complexity of the intervention, not the complexity of the implementation. Challenges related to implementation should be coded to the appropriate CFIR code, e.g. challenges with engaging staff should be coded to Engaging: Key Stakeholders or challenges related to making the intervention a priority for leadership should be (double) coded to Leadership Engagement and Relative Priority."
                    }
				],
				"questions": [
					{
                        "text": "How complicated is the intervention?",
						"probes": [
							"Please consider the following aspects of the intervention: duration, scope, intricacy and number of steps involved and whether the intervention reflects a clear departure from previous practices."
						]
					}
				]
			},
            {
				"name": "Design Quality & Packaging",
                "description": "Perceived excellence in how the intervention is bundled, presented, and assembled.",
				"questions": [
					{
                        "text": "What is your perception of the quality of the supporting materials, packaging, and bundling of the intervention for implementation?",
						"probes": [
							"Why?"
						]
					},
                    {
                        "text": "What supports, such as online resources, marketing materials, or a toolkit, are available to help you implement and use the intervention?",
						"probes": [
							"How do you access these materials?"
						]
					},
                    {
						"text": "How will available materials affect implementation in your setting?"
					}
				]
			},
            {
				"name": "Cost",
                "description": "Costs of the intervention and costs associated with implementing that intervention including investment, supply, and opportunity costs.",
				"questions": [
					{
						"text": "What costs will be incurred to implement the intervention?"
					},
                    {
						"text": "What cost were considered when deciding to implement the intervention?"
					}
				]
			}
		]
	},
    {
		"name": "Outer Setting",
		"constructs": [
			{
                "name": "Patient Needs & Resources",
                "description": "The extent to which patient needs, as well as barriers and facilitators to meet those needs are accurately known and prioritized by the organization.",
                "intro": "Coding between Tension for Change, Relative Advantage, and Needs and Resources of Those Served by the Organization will be nuanced but here are some general guidelines:",
                "guidelines": [
                    {
                        "title": "Tension for Change",
                        "text": "Statements that demonstrate a strong need for the intervention and/or that the current situation is untenable."
                    },
                    {
                        "title": "Relative Advantage",
                        "text": "Statements that demonstrate the intervention is better (or worse) than existing programs."
                    },
                    {
                        "title": "Needs and Resources",
                        "text": "Statements regarding specific needs of individuals that demonstrate a need for the intervention, but do not necessarily represent a strong need or an untenable status quo."
                    },
                    {
                        "text": "In a healthcare setting, individuals served by the organization may include patients and caregivers, where as in an education setting, this may include students and parents."
                    }
                ],
				"questions": [
					{
                        "text": "To what extent is staff aware of the needs and preferences of the individuals being served by your organization?",
						"probes": [
							"How \"in touch\" are staff and leadership with the individuals served by your organization?"
						]
					},
                    {
                        "text": "To what extent were the needs and preferences of the individuals served by your organization considered when deciding to implement the intervention?",
						"probes": [
							"Can you describe specific examples?", "Will the intervention be altered to meet their needs and preferences?"
						]
					},
                    {
                        "text": "How well do you think the intervention will meet the needs of the individuals served by your organization?",
						"probes": [
							"In what ways will the intervention meet their needs? E.g. improved access to services? Reduced wait times? Help with self-management? Reduced travel time and expense? "
						]
					},
                    {
						"text": "How do you think the individuals served by your organization will respond to the intervention?"
					},
                    {
						"text": "What barriers will the individuals served by your organization face to participating in the intervention?"
					},
                    {
                        "text": "Have you elicited information from participants regarding their experiences with the intervention?",
						"probes": [
							"What are their perceptions of the intervention?", "Can you describe what kind of specific information you have heard?"
						]
					},
                    {
                        "text": "Have you heard stories about the experiences of participants with the intervention?",
						"probes": [
							"Can you describe a specific story?"
						]
					}
				]
			},
            {
                "name": "Cosmopolitanism",
                "description": "The degree to which an organization is networked with other external organizations.",
                "intro": "These are individual level questions, but responses should be aggregated to characterize more generally the extent to which the organization encourages individuals to take the initiative to bring ideas in from outside.",
				"guidelines": [
                    {
                        "text": "These are individual level questions, but responses should be aggregated to characterize more generally the extent to which the organization encourages individuals to take the initiative to bring ideas in from outside."
                    }
				],
				"questions": [
					{
                        "text": "To what extent do you network with colleagues or people in similar professions/positions outside your setting?",
						"probes": [
							"What are the venues?"
						]
					}, {
                        "text": "What kind of information exchange do you have with others outside your setting, either related to the intervention, or more generally about your profession?",
						"probes": [
							"What professional networking do you engage in? Listservs? Local or national conferences? Trainings? "
						]
					},
                    {
                        "text": "To what extent does your organization encourage you to network with colleagues outside your own setting?",
						"probes": [
							"Are you able to attend local/national conferences? Other venues?"
						]
					}
				]
			},
            {
				"name": "Peer Pressure",
                "description": "Mimetic or competitive pressure to implement an intervention; typically because most or other key peer or competing organizations have already implemented or in a bid for a competitive edge.",
				"questions": [
					{
                        "text": "Can you tell me what you know about any other organizations that have implemented the intervention or other similar programs?",
						"probes": [
							"How has this information influenced the decision to implement the intervention?"
						]
					},
                    {
                        "text": "To what extent are other organizations implementing the intervention?",
						"probes": [
							"How does this affect support for implementing the intervention in your setting?"
						]
					},
                    {
                        "text": "To what extent are other units within your organization implementing the intervention?",
						"probes": [
							"How does that affect support for implementing the intervention in your own setting?"
						]
					},
                    {
                        "text": "To what extent would implementing the intervention provide an advantage for your organization compared to other organizations in your area?",
						"probes": [
							"Is there a competitive advantage?", "Is there something about the intervention that would bring more individuals into your organization, instead of another one in your area?"
						]
					}
				]
			},
            {
                "name": "External Policies & Incentives",
                "description": "A broad construct that includes external strategies to spread interventions including policy and regulations (governmental or other central entity), external mandates, recommendations and guidelines, pay-for-performance, collaboratives, and public or benchmark reporting.",
                "intro": "In a healthcare setting, external policies and incentives may include clinical performance measures and pay for performance, where as in an education setting, this may include standardized testing performance measures and funding allocation.",
				"guidelines": [
                    {
                        "text": "In a healthcare setting, external policies and incentives may include clinical performance measures and pay for performance, where as in an education setting, this may include standardized testing performance measures and funding allocation."
                    }
				],
				"questions": [
					{
                        "text": "What kind of local, state, or national performance measures, policies, regulations, or guidelines  influenced the decision to implement the intervention?",
						"probes": [
							"How will the intervention affect your organization's ability to meet these measures, policies, regulations, or guidelines? "
						]
					},
                    {
                        "text": "What kind of financial or other incentives influenced the decision to implement the intervention?",
						"probes": [
							"How will the intervention affect your organization's ability to receive these incentives?", "How will the new intervention affect payment or revenue for your organization?"
						]
					}
				]
			}
		]
	},
    {
		"name": "Inner Setting",
		"constructs": [
			{
                "name": "Structural Characteristics",
                "description": "The social architecture, age, maturity, and size of an organization.",
				"guidelines": [
                    {
                        "text": "This construct can be used to capture any relevant information regarding the social architecture, age, maturity, size, or physical layout of the organization. Insufficient space may be mentioned here but should be coded under Available Resources."
                    }
				],
				"questions": [
					{
                        "text": "How will the infrastructure of your organization (social architecture, age, maturity, size, or physical layout) affect the implementation of the intervention?",
						"probes": [
							"How will the infrastructure facilitate/hinder implementation of the intervention?", "How will you work around structural challenges?"
						]
					},
                    {
                        "text": "What kinds of infrastructure changes will be needed to accommodate the intervention?",
						"probes": [
							"Changes in scope of practice? Changes in formal policies? Changes in information systems or electronic records systems? Other?", "What kind of approvals will be needed? Who will need to be involved?", "Can you describe the process that will be needed to make these changes?"
						]
					}
				]
			},
            {
                "name": "Networks & Communications",
                "description": "The nature and quality of webs of social networks and the nature and quality of formal and informal communications within an organization.",
                "intro": "Coding between Access to Knowledge and Information, Engaging, and Networks and Communication will be nuanced but here are some general guidelines:",
				"guidelines": [
                    {
                        "title": "Access to Knowledge and Information",
                        "text": "Statements related to implementation leaders' and users' access to knowledge and information regarding using the program, i.e. the mechanics of the program."
                    },
                    {
                        "title": "Engaging",
                        "text": "Statements related to getting stakeholders \"sold\" on the program, i.e. getting them involved, regardless of if they know how to use the program."
                    },
                    {
                        "title": "Networks and Communication",
                        "text": "Statements related to team formation, quality, and functioning; statements about general communication and relationships in the organization."
                    }
				],
				"questions": [
					{
                        "text": "Can you describe your working relationships with your colleagues?",
						"probes": [
							"With colleagues in your unit?", "With colleagues in other units? ", "Can you tell me a story about a time you needed to work with others to solve a problem? Or to implement an intervention in the past or this intervention?"
						]
					},
                    {
                        "text": "To what extent do you get together with colleagues outside of work?",
						"probes": [
							"To talk about work?", "Just to have fun together?"
						]
					},
                    {
                        "text": "Do you meet (formally or informally) with a team of people?",
						"probes": [
							"What is the team membership?", "How often do you meet? Formally? Informally?"
						]
					},
                    {
                        "text": "Can you describe your working relationship with leaders?",
						"probes": [
							"Your supervisor? Supervisors of other colleagues?"
						]
					},
                    {
						"text": "Can you describe your working relationship with influential stakeholders?"
					},
                    {
                        "text": "Are meetings, such as staff meetings, held regularly?",
						"probes": [
							"Do you typically attend?", "Who typically attends?", "What proportion of staff typically attend?", "How often are the meetings held?", "What is a typical agenda? How helpful are these meetings?"
						]
					},
                    {
						"text": "How do you typically find out about new information, such as new initiatives, accomplishments, issues, new staff, staff departures?"
					},
                    {
                        "text": "When you need to get something done or to solve a problem, who are your \"go-to\" people?",
						"probes": [
							"Can you describe a recent example?"
						]
					}
				]
			},
            {
				"name": "Culture",
                "description": "Norms, values, and basic assumptions of a given organization.",
				"questions": [
					{
                        "text": "How would you describe the culture of your organization? Of your own setting or unit?",
						"probes": [
							"Do you feel like the culture of your own unit is different from the overall organization? In what ways?"
						]
					},
                    {
                        "text": "How do you think your organization's culture (general beliefs, values, assumptions that people embrace) will affect the implementation of the intervention?",
						"probes": [
							"Can you describe an example that highlights this?"
						]
					},
                    {
                        "text": "To what extent are new ideas embraced and used to make improvements in your organization?",
						"probes": [
							"Can you describe a recent example?"
						]
					},
                    {
                        "text": "Some people characterize culture in terms of four general types. To what extent would you characterize your culture as:",
						"choices": [
							"Team (Clan) Culture (Flexible, Internal Focus): A friendly workplace where leaders act like mentors, facilitators, and team-builders. There is value placed on long-term development and doing things together.",
                            "Hierarchical (Hierarchy) Culture (Control, Internal Focus): A structured and formalized workplace where leaders act like coordinators, monitors, and organizers. There is value placed on incremental change and doing things right.",
                            "Entrepreneurial (Adhocracy) Culture (Flexible, External Focus): A dynamic workplace with leaders that stimulate intervention. There is value placed on breakthroughs and doing things first.",
                            "Rational (Market) Culture (Control, External Focus): A competitive workplace with leaders like hard drivers, producers, or competitors. There is value placed on short-term performance and doing things fast. "
						],
						"guidelines": [
                            {
                                "text": "This question can be open-ended or elicit percentages so that they add up to 100%. e.g., my culture is 50% Team, 40% entrepreneurial, 10% hierarchical."
                            }
						]
					}
				]
			},
            {
				"name": "Implementation Climate",
                "description": "The absorptive capacity for change, shared receptivity of involved individuals to an intervention and the extent to which use of that intervention will be rewarded, supported, and expected within their organization.",
				"questions": [
					{
                        "text": "What is the general level of receptivity in your organization to implementing the intervention?",
                        "probes": [
                            "Why?"
                        ],
						"guidelines": [
                            {
                                "text": "This question is likely to uncover topics to explore more within other sub-constructs, but be attentive to other themes that may not be included in your assessment."
                            }
						]
					}
				],
				"subconstructs": [
					{
						"name": " Tension for Change",
                        "description": "The degree to which stakeholders perceive the current situation as intolerable or needing change.",
                        "intro": "Coding between Tension for Change, Relative Advantage, and Needs and Resources of Those Served by the Organization will be nuanced but here are some general guidelines:",
                        "guidelines": [
                            {
                                "title": "Tension for Change",
                                "text": "Statements that demonstrate a strong need for the intervention and/or that the current situation is untenable."
                            },
                            {
                                "title": "Relative Advantage",
                                "text": "Statements that demonstrate the intervention is better (or worse) than existing programs."
                            },
                            {
                                "title": "Needs and Resources",
                                "text": "Statements regarding specific needs of individuals that demonstrate a need for the intervention, but do not necessarily represent a strong need or an untenable status quo."
                            }
                        ],
                        "questions": [
                            {
                                "text": "Is there a strong need for this intervention?",
                                "prompts": [
                                    "Why or why not?",
                                    "Do others see a need for the intervention?"
                                ]
                            },
                            {
                                "text": "How essential is this intervention to meet the needs of the individuals served by your organization or other organizational goals and objectives?"
                            },
                            {
                                "text": "How do people feel about current programs/practices/process that are available related to the intervention?",
                                "prompts": [
                                    "To what extent do current programs fail to meet existing needs? Will the intervention meet these needs?",
                                    "How will the intervention fill current gaps?"
                                ]
                            }
                        ]
					},
                    {
						"name": "Compatibility",
                        "description": "The degree of tangible fit between meaning and values attached to the intervention by involved individuals, how those align with individuals’ own norms, values, and perceived risks and needs, and how the intervention fits with existing workflows and systems.",
                        "guidelines": [
                            {
                                "text": "In a healthcare setting, values related to interacting with patients may include patient centered care, whereas in an education setting, values may  include placing special education students in inclusion classrooms."
                            }
                        ],
                        "questions": [
                            {
                                "text": "How well does the intervention fit with your values and norms and the values and norms within the organization?",
                                "prompts": [
                                    "Values relating to interacting with individuals served by your organization, e.g. shared-decision making vs. being more directive?",
                                    "Values related to  referring to outside vendor-based programs vs. providing services by in-house staff?"
                                ]
                            },
                            {
                                "text": "How well does the intervention fit with existing work processes and practices in your setting?",
                                "prompts": [
                                    "What are likely issues or complications that may arise?"
                                ]
                            },
                            {
                                "text": "Can you describe how the intervention will be integrated into current processes?",
                                "prompts": [
                                    "How will it interact or conflict with current programs or processes?"
                                ]
                            },
                            {
                                "text": "Will the intervention replace or compliment a current program or process? ",
                                "prompts": [
                                    "In what ways?"
                                ]
                            }
                        ]
					},
                    {
						"name": "Relative Priority",
                        "description": "Individuals’ shared perception of the importance of the implementation within the organization.",
                        "questions": [
                            {
                                "text": "What kinds of high-priority initiatives or activities are already happening in your setting?",
                                "prompts": [
                                    "What is the priority of getting the intervention implemented relative to other initiatives that are happening now?",
                                    "Will the implementation conflict with these priorities?",
                                    "Will the implementation help achieve (or relieve pressure related to) these priorities?"
                                ]
                            },
                            {
                                "text": "Describe activities or initiatives that (appear to) have highest priority for you (for the organization)?",
                                "prompts": [
                                    "What kind of pressure are you feeling to accomplish this? Where is it coming from? Why?"
                                ]
                            },
                            {
                                "text": "To what extent might the implementation take a backseat to other high-priority initiatives going on now?",
                                "prompts": [
                                    "How important do you think it is to implement the intervention compared to the other priorities?",
                                    "How important is it to others, such as your coworkers or leaders, to implement the intervention compared to the other priorities?"
                                ]
                            },
                            {
                                "text": "How will you juggle competing priorities in your own work? How will your colleagues juggle these priorities?",
                                "prompts": [
                                    "What are the other priorities?",
                                    "How does the priority of implementing the intervention compare to other priorities in your organization? For your own work?"
                                ]
                            }
                        ]
					},
                    {
						"name": "Organizational Incentives & Rewards",
                        "description": "Extrinsic incentives such as goal-sharing awards, performance reviews, promotions, and raises in salary and less tangible incentives such as increased stature or respect.",
                        "questions": [
                            {
                                "text": "What kinds of incentives are there to help ensure that the implementation of the intervention is successful?",
                                "prompts": [
                                    "What is your motivation for wanting to help ensure the implementation is successful?"
                                ]
                            },
                            {
                                "text": "To what extent do you think your supervisor will consider your role in this implementation in your (next) evaluation? In his/her regard for your work or role?"
                            },
                            {
                                "text": "Are there any special recognitions or rewards planned that are related to implementing the intervention?",
                                "prompts": [
                                    "Can you describe them?",
                                    "Will these be targeted to groups/teams/units or individuals?"
                                ]
                            }                        ]
					},
                    {
						"name": "Goals & Feedback",
                        "description": "The degree to which goals are clearly communicated, acted upon, and fed back to staff and alignment of that feedback with goals.",
                        "questions": [
                            {
                                "text": "Have you/your unit/your organization set  goals related to the implementation of the intervention?",
                                "prompts": [
                                    " [If yes] What are the goals?"
                                ]
                            },
                            {
                                "text": "To what extent does your organization/unit set goals for current programs/initiatives?",
                                "prompts": [
                                    "How are goals communicated in the organization? To whom are they communicated?",
                                    "Can you give an example of a goal? How and to whom is it communicated?",
                                    "Are changes made based on how things are going? Can you give an example?"
                                ]
                            },
                            {
                                "text": "To what extent are organizational goals monitored for progress?",
                                "prompts": [
                                    "Can you give an example of monitoring in terms of the type of information, who is informed, and how?"
                                ]
                            },
                            {
                                "text": "Do you get any feedback reports about your work?",
                                "prompts": [
                                    "What do they look like? Content, mode, form?",
                                    "How helpful are those reports?",
                                    "How can they be improved?",
                                    "How often do you get them? Where do they come from?",
                                    "Who designed them?"
                                ]
                            },
                            {
                                "text": "How does implementation of the intervention align with other organizational goals?",
                                "guidelines": [
                                    {
                                        "text": "This question can be framed in terms of the intervention. For example, in a healthcare setting: How does implementation of the intervention align with organizational goals related to preventing"
                                    }
                                ]
                            }
                        ]
					},
                    {
						"name": "Learning Climate",
                        "description": "A climate in which: a) leaders express their own fallibility and need for team members’ assistance and input; b) team members feel that they are essential, valued, and knowledgeable partners in the change process; c) individuals feel psychologically safe to try new methods; and d) there is sufficient time and space for reflective thinking and evaluation.",
                        "guidelines": [
                            {
                                "text": "Questions regarding the implementation of previous interventions may provide insight into many potential constructs to follow-up on later, e.g., exploring the extent to which the same facilitators/barriers may be in play for the new implementation of interest."
                            }
                        ],
                        "questions": [
                            {
                                "text": "Can you describe a recent quality improvement initiative or an implementation of a new program?",
                                "probes": [
                                    "Can you describe the new initiative/program and the motivation to improve/implement it?",
                                    "Can you tell me the major milestones or key accomplishments along the way?",
                                    "What factors helped make it successful/fail?",
                                    "Who were the key \"players\"?",
                                    "What was your involvement?",
                                    "Were people happy with the outcome/initiative?",
                                    "Can you tell me about how leaders were involved? Who? Their roles? How they helped/hindered?"
                                ]
                            },
                            {
                                "text": "If you saw a problem in your own setting, what would you do?",
                                "probes": [
                                    "Can you tell a story about a recent problem you resolved or initiative you participated in?"
                                ]
                            },
                            {
                                "text": "To what extent do you feel like you can try new things to improve your work processes?",
                                "probes": [
                                    "Do you feel like you have the time and energy to think about ways to improve things?",
                                    "Did you feel valued/respected by your supervisor for the role you played?",
                                    "What role did your supervisor (or other leaders) play? What actions did they take?"
                                ]
                            }
                        ]
					}
				]
			},
            {
				"name": "Readiness for Implementation",
                "description": "Tangible and immediate indicators of organizational commitment to its decision to implement an intervention.",
				"subconstructs": [
					{
						"name": "Leadership Engagement",
                        "description": "Commitment, involvement, and accountability of leaders and managers with the implementation.",
                        "questions": [
                            {
                                "text": "What level of endorsement or support have you seen or heard from leaders?",
                                "prompts": [
                                    "Who are these leaders and how has this affected things so far? Going forward?"
                                ]
                            },
                            {
                                "text": "What level of involvement has leadership at your organization had so far with the intervention?",
                                "prompts": [
                                    "Do they know about the intention to implement the intervention?",
                                    "Who are these leaders? How do attitudes of different leaders vary?",
                                    "What kind of support have they given you? Can you provide specific examples?"
                                ]
                            },
                            {
                                "text": "What kind of support or actions can you expect from leaders in your organization to help make implementation successful?",
                                "prompts": [
                                    "Who are these leaders? How do attitudes of different leaders vary?",
                                    "Do they know about the intention to implement the intervention?",
                                    "What kind of support can you expect going forward? Can you provide specific examples?",
                                    "What types of barriers might they create?"
                                ]
                            }
                        ]
					},
                    {
						"name": " Available Resources",
                        "description": "The level of resources dedicated for implementation and on-going operations including money, training, education, physical space, and time.",
                        "guidelines": [
                            {
                                "text": "Resources may include operating and capital funding, dedicated personnel time (e.g. have new staff been hired, or is implementation a collateral duty), space, equipment, and/or information technology. Step through each to ensure all necessary resources are explored and fully described."
                            }
                        ],
                        "questions": [
                            {
                                "text": "Do you expect to have sufficient resources to implement and administer the intervention?",
                                "prompts": [
                                    "[If Yes] What resources are you counting on? Are there any other resources that you received, or would have liked to receive?",
                                    "What resources will be easy to procure?",
                                    "[If no] What resources will not be available?"
                                ]
                            },
                            {
                                "text": "How do you expect to procure necessary resources?",
                                "prompts": [
                                    "Who will be involved in helping you get what is needed?",
                                    "What challenges do you expect to encounter?"
                                ]
                            }
                        ]
					},
                    {
						"name": "Access to Knowledge & Information",
                        "description": "Ease of access to digestible information and knowledge about the intervention and how to incorporate it into work tasks.",
                        "intro": "Coding between Access to Knowledge and Information, Engaging, and Networks and Communication will be nuanced but here are some general guidelines:",
                        "guidelines": [
                            {
                                "title": "Access to Knowledge and Information",
                                "text": "Statements related to implementation leaders' and users' access to knowledge and information regarding using the program, i.e. the mechanics of the program."
                            },
                            {
                                "title": "Engaging",
                                "text": "Statements related to getting stakeholders \"sold\" on the program, i.e. getting them involved, regardless of if they know how to use the program."
                            },
                            {
                                "title": "Networks and Communication",
                                "text": "Statements related to team formation, quality, and functioning; statements about general communication and relationships in the organization."
                            }
                        ],
                        "questions": [
                            {
                                "text": "What kind of training is planned for you? For colleagues?",
                                "probes": [
                                    "Do you feel the training will prepare you to carry out the roles and responsibilities expected of you? Can you explain?",
                                    "What are the positive aspects of planned training?",
                                    "What is missing?",
                                    "What kind of continued training is planned?"
                                ]
                            },
                            {
                                "text": "What kinds of information and materials about the intervention have already been made available to you?",
                                "probes": [
                                    "Copies of materials?",
                                    "Personal contact?",
                                    "Internal information sharing; e.g., staff meetings?",
                                    "Has it been timely? Relevant? Sufficient?"
                                ]
                            },
                            {
                                "text": "Who do you ask if you have questions about the intervention or its implementation?",
                                "probes": [
                                    "How available are these individuals?"
                                ]
                            },
                            {
                                "text": "What kinds of information and materials about the intervention are planned for individuals in your setting?",
                                "probes": [
                                    "Copies of materials?",
                                    "Personal contact?",
                                    "Internal information sharing; e.g., staff meetings?",
                                    "Will it be timely? Relevant? Sufficient?"
                                ],
                                "guidelines": [
                                    {
                                        "text": "This question may also be relevant to Engaging: Key Stakeholders."
                                    }
                                ]
                            }
                        ]
					}
				]
			}
		]
	},
    {
		"name": "Characteristics of Individuals",
        "description": "Organizations are made up of individuals. Setting and intervention constructs are rooted, ultimately, in the actions and behaviors of individuals. Little is known about the interplay between individuals and their ripple effects through their teams, units, networks, and organizations on implementation.",
        "guidelines": [
            {
                "text": "These are individual level questions, but responses should be aggregated to characterize these characteristics at the organizational level."
            }
        ],
		"constructs": [
			{
				"name": " Knowledge & Beliefs about the Intervention",
                "description": "Individuals’ attitudes toward and value placed on the intervention as well as familiarity with facts, truths, and principles related to the intervention.",
                "guidelines": [
                    {
                        "text": "Many responses to these questions may be (double) coded to other constructs, for example, to  Relative Advantage if the participant believes that the intervention has advantages over an existing program, or to Evidence Strength & Quality if the participant believes that the program will be effective based on the existing evidence."
                    }
                ],
                "questions": [
                    {
                        "text": "What do you know about the intervention or its implementation?"
                    },
                    {
                        "text": "Do you think the intervention will be effective in your setting?",
                        "prompts": [
                            "Why or why not?"
                        ]
                    },
                    {
                        "text": "How do you feel about the intervention being used in your setting?",
                        "prompts": [
                            "How do you feel about the plan to implement the intervention in your setting?",
                            "Do you have any feelings of anticipation? Stress? Enthusiasm? Why?"
                        ]
                    },
                    {
                        "text": "At what stage of implementation is the intervention at in your organization?",
                        "prompts": [
                            "How do you think the program is going?",
                            "Why do you say that?"
                        ]
                    }
                ]
			},
            {
				"name": "Self-efficacy",
                "description": "Individual belief in their own capabilities to execute courses of action to achieve implementation goals.",
                "questions": [
                    {
                        "text": "How confident are you that you will be able to successfully implement the intervention?",
                        "prompts": [
                            "What gives you that level of confidence (or lack of confidence)?"
                        ]
                    },
                    {
                        "text": "How confident are you that you will be able to use the intervention?",
                        "prompts": [
                            "What gives you that level of confidence (or lack of confidence)?"
                        ]
                    },
                    {
                        "text": "How confident do you think your colleagues feel about implementing the intervention?",
                        "prompts": [
                            "What gives them that level of confidence (or lack of confidence)?"
                        ]
                    },
                    {
                        "text": "How confident do you think your colleagues feel about using the intervention?",
                        "prompts": [
                            "What gives them that level of confidence (or lack of confidence)?"
                        ]
                    }
                ]
			},
            {
				"name": "Individual Stage of Change",
                "description": "Characterization of the phase an individual is in, as he or she progresses toward skilled, enthusiastic, and sustained use of the intervention.",
                "questions": [
                    {
                        "text": "How prepared are you to use the intervention?",
                        "guidelines": [
                            {
                                "text": "Explore which level the individual is at using Rogers' (or Porchaska's Stages of Change) as a guide:"
                            }
                        ],
                        "choices": [
                            "Knowledge stage (Precontemplation) - knowledge of key aspects of the intervention",
                            "Persuasion stage (Contemplation) - likes the intervention, discusses it with others, buys into it, has a positive view",
                            "Decision stage (Preparation) - intends to seek additional information and try it",
                            "Implementation stage (Action) - acquires additional information, uses intervention regularly, and has continued use",
                            "Confirmation stage (Maintenance) - recognizes benefits, has integrated the intervention into routines, promotes use to others"
                        ]
                    }
                ]
			},
            {
				"name": "Individual Identification with Organization",
                "description": "A broad construct related to how individuals perceive the organization and their relationship and degree of commitment with that organization.",
                "guidelines": [
                    {
                        "text": "Responses to other questions may be (double) coded here. For example, buy-in to organizational or intervention-related goals may be elicited under Goals & Feedback, but may also be relevant here."
                    }
                ]
			},
            {
				"name": "Other Personal Attributes",
                "description": "A broad construct to include other personal traits such as tolerance of ambiguity, intellectual ability, motivation, values, competence, capacity, and learning style.",
                "guidelines": [
                    {
                        "text": "The type of statements coded here will depend on study objectives, for example, locus of control, and other concepts from health or organizational psychology found to be related to a particular implementation."
                    }
                ]
			}
		]
	},
    {
		"name": "Process",
		"constructs": [
			{
				"name": "Planning",
                "description": "The degree to which a scheme or method of behavior and tasks for implementing an intervention are developed in advance and the quality of those schemes or methods.",
                "questions": [
                    {
                        "text": "What have you done (or what do you plan to do) to get a plan in place to implement the intervention?"
                    },
                    {
                        "text": "Can you describe the plan for implementing the intervention?",
                        "prompts": [
                            "How detailed is the plan? Who knows about it? Is the plan overly complex? Understandable? Realistic and feasible?",
                            "What is your role in the planning process?",
                            "Who is involved in the planning process? What are their roles?",
                            "Are the appropriate people involved in the planning process? How engaged are they?",
                            "Do you plan to track the progress of implementation based on your plan?",
                            "What if you have to modify or revise your plan due to barrier, errors, or mistakes?"
                        ]
                    },
                    {
                        "text": "What role has your plan for implementation played during implementation?",
                        "prompts": [
                            "Was it used to guide implementation of the intervention?",
                            "Was it used to compare planned with actual progress?",
                            "Were there revisions or refinements to the plan?",
                            "Was the plan shared/reviewed with other stakeholders? How regularly?"
                        ]
                    }
                ]
			},
            {
				"name": "Engaging",
                "description": "Attracting and involving appropriate individuals in the implementation and use of the intervention through a combined strategy of social marketing, education, role modeling, training, and other similar activities.",
                "intro": "Engaging constructs mostly focus on the strategies used to engage individuals as well as the outcome of those strategies. However, you may also want to code the ultimate presence of absence of these individuals as well as their \"quality\" - their capabilities, motivation, and skills, i.e. how good they are at their job.\nCoding between Access to Knowledge and Information, Engaging, and Networks and Communication will be nuanced but here are some general guidelines:",
                "guidelines": [
                    {
                        "title": "Access to Knowledge and Information",
                        "text": "Statements related to implementation leaders' and users' access to knowledge and information regarding using the program, i.e. the mechanics of the program."
                    },
                    {
                        "title": "Engaging",
                        "text": "Statements related to getting stakeholders \"sold\" on the program, i.e. getting them involved, regardless of if they know how to use the program."
                    },
                    {
                        "title": "Networks and Communication",
                        "text": "Statements related to team formation, quality, and functioning; statements about general communication and relationships in the organization."
                    }
                ],
				"subconstructs": [
					{
						"name": "Opinion Leaders",
                        "description": "Individuals in an organization who have formal or informal influence on the attitudes and beliefs of their colleagues with respect to implementing the intervention.",
                        "questions": [
                            {
                                "text": "Who are the key influential individuals to get on board with this implementation?"
                            },
                            {
                                "text": "What are influential individuals saying about the intervention?",
                                "probes": [
                                    "Who are these influential individuals?",
                                    "To what extent will they influence others' use of the intervention? The success of the implementation?"
                                ]
                            }
                        ]
					},
                    {
						"name": " Formally Appointed Internal Implementation Leaders",
                        "description": "Individuals from within the organization who have been formally appointed with responsibility for implementing an intervention as coordinator, project manager, team leader, or other similar role.",
                        "questions": [
                            {
                                "text": "How did your organization become involved in implementing the intervention?",
                                "guidelines": [
                                    {
                                        "text": "This question is also related to intervention Source. Code responses related to the source of the intervention under intervention Source. Code responses related to who participated in the decision process here, as an indication of early (or not) engagement. Participation in decision-making is an effective engagement strategy to help people feel ownership of the intervention."
                                    }
                                ],
                                "prompts": [
                                    "How was the decision made to participate in the intervention?",
                                    "Who participated in the decision-making process?",
                                    "Were you involved in this process?"
                                ]
                            },
                            {
                                "text": "Who will lead implementation of the intervention?",
                                "prompts": [
                                    "How did/will this person come into this role? Appointed? Volunteered? Voluntold?",
                                    "What attributes or qualities does this person have that makes them an effective leader of this implementation? What attributes or qualities does this person lack?",
                                    "Does this person have sufficient authority to do what is necessary to implement the intervention?"
                                ]
                            },
                            {
                                "text": "Who else is involved with leading the implemention?"
                            }
                        ]
					},
                    {
						"name": "Champions",
                        "description": "Individuals who dedicate themselves to supporting, marketing, and ‘driving through’ an implementation, overcoming indifference or resistance that the intervention may provoke in an organization.",
                        "questions": [
                            {
                                "text": "Other than the formal implementation leader, are there people in your organization who are likely to champion (go above and beyond what might be expected) the intervention?",
                                "prompts": [
                                    "Were they formally appointed in this position, or was it an informal role?",
                                    "What position do these champions have in your organization?",
                                    "How do you think they will help with implementation? Getting people to use the intervention?"
                                ]
                            },
                            {
                                "text": "Can you describe people's perception of this champion/individual?",
                                "prompts": [
                                    "To what extent do you respect the opinions and actions of the champion?"
                                ]
                            },
                            {
                                "text": "What kinds of behaviors or actions do you think this individual/champion will exhibit?",
                                "prompts": [
                                    "For example, helping get senior leaders on board, helping solve problems? Or a small role?"
                                ]
                            }
                        ]
					},
                    {
						"name": "External Change Agents",
                        "description": "Individuals who are affiliated with an outside entity who formally influence or facilitate intervention decisions in a desirable direction.",
                        "questions": [
                            {
                                "text": "Will someone (or a team) outside your organization be helping you with implementing the intervention?",
                                "prompts": [
                                    "Can you describe this person/group?",
                                    "How did they get involved?",
                                    "What is their role?",
                                    "What kind of activities will they be doing? ",
                                    "How helpful do you think he/she/they will be? In what ways?"
                                ]
                            }
                        ]
					},
                    {
						"name": "Key Stakeholders",
                        "questions": [
                            {
                                "text": "What steps have been taken to encourage individuals to commit to using the intervention?",
                                "prompts": [
                                    "Which individuals will you target?",
                                    "How will you approach them?",
                                    "What information will you give them?",
                                    "How frequently and how will you communicate with them?"
                                ]
                            },
                            {
                                "text": "What is your communication or education strategy (not including training, see Access to Knowledge and Information) for getting the word out about the intervention?",
                                "prompts": [
                                    "What materials/modes/venues do you plan to use? For example e-bulletin boards, emails, brochures?",
                                    "What process do you plan to use to communicate? For example,  going to staff meetings, talking to people informally?"
                                ]
                            },
                            {
                                "text": "Who are the key individuals to get on board with the intervention?",
                                "prompts": [
                                    "To encourage individuals to use the intervention? To help with implementation?"
                                ]
                            }
                        ]
					},
                    {
						"name": "Intervention Participants",
                        "guidelines": [
                            {
                                "text": "In a healthcare setting, intervention participants may include patients, whereas in an education setting, this may  include students. These questions assume that the intervention is a program for individuals to use."
                            }
                        ],
                        "questions": [
                            {
                                "text": "How will you or your colleagues communicate to the individuals that are served by your organization about the intervention?",
                                "prompts": [
                                    "How will they participate in the intervention?",
                                    "How will they access the intervention?"
                                ]
                            }
                        ]
					}
				]
			},
            {
				"name": "Executing",
                "description": "Carrying out or accomplishing the implementation according to plan.",
                "guidelines": [
                    {
                        "text": "Executing is only assessed during or post implementation because it is determined by how well they executed the implementation plan. If executing has not gone according to plan, (double) code to the appropriate CFIR construct that explains why the plan did not work."
                    }
                ],
                "questions": [
                    {
                        "text": "Has the intervention been implemented according to the implementation plan?",
                        "prompts": [
                            "[If Yes] Can you describe this?",
                            "[If No] Why not?"
                        ]
                    }
                ]
			},
            {
				"name": "Reflecting & Evaluating",
                "description": "Quantitative and qualitative feedback about the progress and quality of implementation accompanied with regular personal and team debriefing about progress and experience.",
                "guidelines": [
                    {
                        "text": "Reflecting and evaluating refers to the process used in the implementation process, for example, any evaluation efforts they have made regarding the intervention, and if they plan to roll it out to a wider audience. This construct is not intended to capture the reflecting and evaluating that participants may do during the interview, for example, related to the success of the implementation. Those types of comments should be coded to Knowledge and Beliefs about the intervention."
                    }
                ],
                "questions": [
                    {
                        "text": "What kind of information do you plan to collect as you implement the intervention?",
                        "prompts": [
                            "Which measures will you track? How will you track them?",
                            "How will this information be used?"
                        ]
                    },
                    {
                        "text": "Will you receive feedback reports about the implementation or the intervention itself?",
                        "prompts": [
                            "What will they look like? Content, mode, form?",
                            "How helpful do you think they will be?",
                            "How could they be improved?",
                            "How often will you get them? Where will they come from?",
                            "Who is designing them?"
                        ]
                    },
                    {
                        "text": "How will you assess progress towards implementation or intervention goals?",
                        "prompts": [
                            "How will results of the evaluation be distributed to stakeholders?"
                        ]
                    },
                    {
                        "text": "Will feedback be elicited from staff? From the individuals served by your organization?",
                        "prompts": [
                            "[If yes] What kind of feedback?"
                        ]
                    },
                    {
                        "text": "To what extent has your organization/unit set goals for implementing the intervention?",
                        "prompts": [
                            "How will goals be communicated in the organization? To whom will they be communicated?",
                            "What are the goals? How and to whom will they be communicated?"
                        ]
                    }
                ]
			}
		]
	}
]);