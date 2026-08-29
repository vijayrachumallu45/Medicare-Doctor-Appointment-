/**
 * MediCare Ophthalmology Clinical Service Module
 * Handles diagnostic protocols, consultation guidelines, and clinical referral logic for Ophthalmology.
 */

class OphthalmologyService {
  constructor() {
    this.specialtyName = "Ophthalmology";
    this.departmentCode = "DEP-115";
    this.clinicalGuidelines = this.initGuidelines();
    this.diagnosticProtocols = this.initProtocols();
    this.commonConditions = this.initConditions();
  }

  initGuidelines() {
    return [
      {
        id: "GL-1001",
        title: "Ophthalmology Clinical Guideline #1",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 1.",
        evidenceLevel: "Grade C",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1002",
        title: "Ophthalmology Clinical Guideline #2",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 2.",
        evidenceLevel: "Grade B",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1003",
        title: "Ophthalmology Clinical Guideline #3",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 3.",
        evidenceLevel: "Grade A",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1004",
        title: "Ophthalmology Clinical Guideline #4",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 4.",
        evidenceLevel: "Grade B",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1005",
        title: "Ophthalmology Clinical Guideline #5",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 5.",
        evidenceLevel: "Grade C",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1006",
        title: "Ophthalmology Clinical Guideline #6",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 6.",
        evidenceLevel: "Grade A",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1007",
        title: "Ophthalmology Clinical Guideline #7",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 7.",
        evidenceLevel: "Grade C",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1008",
        title: "Ophthalmology Clinical Guideline #8",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 8.",
        evidenceLevel: "Grade B",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1009",
        title: "Ophthalmology Clinical Guideline #9",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 9.",
        evidenceLevel: "Grade A",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1010",
        title: "Ophthalmology Clinical Guideline #10",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 10.",
        evidenceLevel: "Grade B",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1011",
        title: "Ophthalmology Clinical Guideline #11",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 11.",
        evidenceLevel: "Grade C",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1012",
        title: "Ophthalmology Clinical Guideline #12",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 12.",
        evidenceLevel: "Grade A",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1013",
        title: "Ophthalmology Clinical Guideline #13",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 13.",
        evidenceLevel: "Grade C",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1014",
        title: "Ophthalmology Clinical Guideline #14",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 14.",
        evidenceLevel: "Grade B",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1015",
        title: "Ophthalmology Clinical Guideline #15",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 15.",
        evidenceLevel: "Grade A",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1016",
        title: "Ophthalmology Clinical Guideline #16",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 16.",
        evidenceLevel: "Grade B",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1017",
        title: "Ophthalmology Clinical Guideline #17",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 17.",
        evidenceLevel: "Grade C",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1018",
        title: "Ophthalmology Clinical Guideline #18",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 18.",
        evidenceLevel: "Grade A",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1019",
        title: "Ophthalmology Clinical Guideline #19",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 19.",
        evidenceLevel: "Grade C",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1020",
        title: "Ophthalmology Clinical Guideline #20",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 20.",
        evidenceLevel: "Grade B",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1021",
        title: "Ophthalmology Clinical Guideline #21",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 21.",
        evidenceLevel: "Grade A",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1022",
        title: "Ophthalmology Clinical Guideline #22",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 22.",
        evidenceLevel: "Grade B",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1023",
        title: "Ophthalmology Clinical Guideline #23",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 23.",
        evidenceLevel: "Grade C",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1024",
        title: "Ophthalmology Clinical Guideline #24",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 24.",
        evidenceLevel: "Grade A",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1025",
        title: "Ophthalmology Clinical Guideline #25",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 25.",
        evidenceLevel: "Grade C",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1026",
        title: "Ophthalmology Clinical Guideline #26",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 26.",
        evidenceLevel: "Grade B",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1027",
        title: "Ophthalmology Clinical Guideline #27",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 27.",
        evidenceLevel: "Grade A",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1028",
        title: "Ophthalmology Clinical Guideline #28",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 28.",
        evidenceLevel: "Grade B",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1029",
        title: "Ophthalmology Clinical Guideline #29",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 29.",
        evidenceLevel: "Grade C",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1030",
        title: "Ophthalmology Clinical Guideline #30",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 30.",
        evidenceLevel: "Grade A",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1031",
        title: "Ophthalmology Clinical Guideline #31",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 31.",
        evidenceLevel: "Grade C",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1032",
        title: "Ophthalmology Clinical Guideline #32",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 32.",
        evidenceLevel: "Grade B",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1033",
        title: "Ophthalmology Clinical Guideline #33",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 33.",
        evidenceLevel: "Grade A",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1034",
        title: "Ophthalmology Clinical Guideline #34",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 34.",
        evidenceLevel: "Grade B",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1035",
        title: "Ophthalmology Clinical Guideline #35",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 35.",
        evidenceLevel: "Grade C",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1036",
        title: "Ophthalmology Clinical Guideline #36",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 36.",
        evidenceLevel: "Grade A",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1037",
        title: "Ophthalmology Clinical Guideline #37",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 37.",
        evidenceLevel: "Grade C",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1038",
        title: "Ophthalmology Clinical Guideline #38",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 38.",
        evidenceLevel: "Grade B",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1039",
        title: "Ophthalmology Clinical Guideline #39",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 39.",
        evidenceLevel: "Grade A",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1040",
        title: "Ophthalmology Clinical Guideline #40",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 40.",
        evidenceLevel: "Grade B",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1041",
        title: "Ophthalmology Clinical Guideline #41",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 41.",
        evidenceLevel: "Grade C",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1042",
        title: "Ophthalmology Clinical Guideline #42",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 42.",
        evidenceLevel: "Grade A",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1043",
        title: "Ophthalmology Clinical Guideline #43",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 43.",
        evidenceLevel: "Grade C",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1044",
        title: "Ophthalmology Clinical Guideline #44",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 44.",
        evidenceLevel: "Grade B",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1045",
        title: "Ophthalmology Clinical Guideline #45",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 45.",
        evidenceLevel: "Grade A",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1046",
        title: "Ophthalmology Clinical Guideline #46",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 46.",
        evidenceLevel: "Grade B",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1047",
        title: "Ophthalmology Clinical Guideline #47",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 47.",
        evidenceLevel: "Grade C",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1048",
        title: "Ophthalmology Clinical Guideline #48",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 48.",
        evidenceLevel: "Grade A",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1049",
        title: "Ophthalmology Clinical Guideline #49",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 49.",
        evidenceLevel: "Grade C",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1050",
        title: "Ophthalmology Clinical Guideline #50",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 50.",
        evidenceLevel: "Grade B",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1051",
        title: "Ophthalmology Clinical Guideline #51",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 51.",
        evidenceLevel: "Grade A",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1052",
        title: "Ophthalmology Clinical Guideline #52",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 52.",
        evidenceLevel: "Grade B",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1053",
        title: "Ophthalmology Clinical Guideline #53",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 53.",
        evidenceLevel: "Grade C",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1054",
        title: "Ophthalmology Clinical Guideline #54",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 54.",
        evidenceLevel: "Grade A",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
      {
        id: "GL-1055",
        title: "Ophthalmology Clinical Guideline #55",
        description: "Standard operating procedure for evaluating patient symptoms related to ophthalmology condition 55.",
        evidenceLevel: "Grade C",
        lastUpdated: "2026-01-15",
        recommendedActions: [
          "Conduct detailed patient physical examination and vital signs assessment",
          "Review personal medical history and previous diagnostic test results",
          "Formulate customized patient care plan and schedule follow-up consultation"
        ]
      },
    ];
  }

  initProtocols() {
    return [
      {
        protocolId: "PRT-2001",
        protocolName: "Diagnostic Protocol 1 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2002",
        protocolName: "Diagnostic Protocol 2 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2003",
        protocolName: "Diagnostic Protocol 3 for Ophthalmology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2004",
        protocolName: "Diagnostic Protocol 4 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2005",
        protocolName: "Diagnostic Protocol 5 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2006",
        protocolName: "Diagnostic Protocol 6 for Ophthalmology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2007",
        protocolName: "Diagnostic Protocol 7 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2008",
        protocolName: "Diagnostic Protocol 8 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2009",
        protocolName: "Diagnostic Protocol 9 for Ophthalmology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2010",
        protocolName: "Diagnostic Protocol 10 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2011",
        protocolName: "Diagnostic Protocol 11 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2012",
        protocolName: "Diagnostic Protocol 12 for Ophthalmology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2013",
        protocolName: "Diagnostic Protocol 13 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2014",
        protocolName: "Diagnostic Protocol 14 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2015",
        protocolName: "Diagnostic Protocol 15 for Ophthalmology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2016",
        protocolName: "Diagnostic Protocol 16 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2017",
        protocolName: "Diagnostic Protocol 17 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2018",
        protocolName: "Diagnostic Protocol 18 for Ophthalmology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2019",
        protocolName: "Diagnostic Protocol 19 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2020",
        protocolName: "Diagnostic Protocol 20 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2021",
        protocolName: "Diagnostic Protocol 21 for Ophthalmology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2022",
        protocolName: "Diagnostic Protocol 22 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2023",
        protocolName: "Diagnostic Protocol 23 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2024",
        protocolName: "Diagnostic Protocol 24 for Ophthalmology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2025",
        protocolName: "Diagnostic Protocol 25 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2026",
        protocolName: "Diagnostic Protocol 26 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2027",
        protocolName: "Diagnostic Protocol 27 for Ophthalmology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2028",
        protocolName: "Diagnostic Protocol 28 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2029",
        protocolName: "Diagnostic Protocol 29 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2030",
        protocolName: "Diagnostic Protocol 30 for Ophthalmology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2031",
        protocolName: "Diagnostic Protocol 31 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2032",
        protocolName: "Diagnostic Protocol 32 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2033",
        protocolName: "Diagnostic Protocol 33 for Ophthalmology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2034",
        protocolName: "Diagnostic Protocol 34 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2035",
        protocolName: "Diagnostic Protocol 35 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2036",
        protocolName: "Diagnostic Protocol 36 for Ophthalmology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2037",
        protocolName: "Diagnostic Protocol 37 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2038",
        protocolName: "Diagnostic Protocol 38 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2039",
        protocolName: "Diagnostic Protocol 39 for Ophthalmology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2040",
        protocolName: "Diagnostic Protocol 40 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2041",
        protocolName: "Diagnostic Protocol 41 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2042",
        protocolName: "Diagnostic Protocol 42 for Ophthalmology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2043",
        protocolName: "Diagnostic Protocol 43 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2044",
        protocolName: "Diagnostic Protocol 44 for Ophthalmology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2045",
        protocolName: "Diagnostic Protocol 45 for Ophthalmology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Ophthalmology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
    ];
  }

  initConditions() {
    return [
      {
        icdCode: "OPH-301",
        conditionTitle: "Clinical Condition Ophthalmology Case 1",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 1",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-302",
        conditionTitle: "Clinical Condition Ophthalmology Case 2",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 2",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-303",
        conditionTitle: "Clinical Condition Ophthalmology Case 3",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 3",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-304",
        conditionTitle: "Clinical Condition Ophthalmology Case 4",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 4",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-305",
        conditionTitle: "Clinical Condition Ophthalmology Case 5",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 5",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-306",
        conditionTitle: "Clinical Condition Ophthalmology Case 6",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 6",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-307",
        conditionTitle: "Clinical Condition Ophthalmology Case 7",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 7",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-308",
        conditionTitle: "Clinical Condition Ophthalmology Case 8",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 8",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-309",
        conditionTitle: "Clinical Condition Ophthalmology Case 9",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 9",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-310",
        conditionTitle: "Clinical Condition Ophthalmology Case 10",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 10",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-311",
        conditionTitle: "Clinical Condition Ophthalmology Case 11",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 11",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-312",
        conditionTitle: "Clinical Condition Ophthalmology Case 12",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 12",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-313",
        conditionTitle: "Clinical Condition Ophthalmology Case 13",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 13",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-314",
        conditionTitle: "Clinical Condition Ophthalmology Case 14",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 14",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-315",
        conditionTitle: "Clinical Condition Ophthalmology Case 15",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 15",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-316",
        conditionTitle: "Clinical Condition Ophthalmology Case 16",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 16",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-317",
        conditionTitle: "Clinical Condition Ophthalmology Case 17",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 17",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-318",
        conditionTitle: "Clinical Condition Ophthalmology Case 18",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 18",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-319",
        conditionTitle: "Clinical Condition Ophthalmology Case 19",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 19",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-320",
        conditionTitle: "Clinical Condition Ophthalmology Case 20",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 20",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-321",
        conditionTitle: "Clinical Condition Ophthalmology Case 21",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 21",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-322",
        conditionTitle: "Clinical Condition Ophthalmology Case 22",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 22",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-323",
        conditionTitle: "Clinical Condition Ophthalmology Case 23",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 23",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-324",
        conditionTitle: "Clinical Condition Ophthalmology Case 24",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 24",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-325",
        conditionTitle: "Clinical Condition Ophthalmology Case 25",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 25",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-326",
        conditionTitle: "Clinical Condition Ophthalmology Case 26",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 26",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-327",
        conditionTitle: "Clinical Condition Ophthalmology Case 27",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 27",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-328",
        conditionTitle: "Clinical Condition Ophthalmology Case 28",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 28",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-329",
        conditionTitle: "Clinical Condition Ophthalmology Case 29",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 29",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-330",
        conditionTitle: "Clinical Condition Ophthalmology Case 30",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 30",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-331",
        conditionTitle: "Clinical Condition Ophthalmology Case 31",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 31",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-332",
        conditionTitle: "Clinical Condition Ophthalmology Case 32",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 32",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-333",
        conditionTitle: "Clinical Condition Ophthalmology Case 33",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 33",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-334",
        conditionTitle: "Clinical Condition Ophthalmology Case 34",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 34",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-335",
        conditionTitle: "Clinical Condition Ophthalmology Case 35",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 35",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-336",
        conditionTitle: "Clinical Condition Ophthalmology Case 36",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 36",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-337",
        conditionTitle: "Clinical Condition Ophthalmology Case 37",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 37",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-338",
        conditionTitle: "Clinical Condition Ophthalmology Case 38",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 38",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-339",
        conditionTitle: "Clinical Condition Ophthalmology Case 39",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 39",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "OPH-340",
        conditionTitle: "Clinical Condition Ophthalmology Case 40",
        symptoms: ["Symptom A for ophthalmology", "Symptom B for ophthalmology", "Symptom C for ophthalmology"],
        firstLineTherapy: "Standard Ophthalmology Therapeutic Regimen 40",
        followUpInterval: "4 weeks"
      },
    ];
  }

  getServiceDetails() {
    return {
      specialty: this.specialtyName,
      departmentCode: this.departmentCode,
      totalGuidelines: this.clinicalGuidelines.length,
      totalProtocols: this.diagnosticProtocols.length,
      totalConditions: this.commonConditions.length
    };
  }

  findConditionByIcd(icdCode) {
    return this.commonConditions.find(cond => cond.icdCode === icdCode) || null;
  }

  filterGuidelinesByEvidence(level) {
    return this.clinicalGuidelines.filter(g => g.evidenceLevel === level);
  }
}

module.exports = new OphthalmologyService();
