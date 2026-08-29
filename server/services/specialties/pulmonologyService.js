/**
 * MediCare Pulmonology Clinical Service Module
 * Handles diagnostic protocols, consultation guidelines, and clinical referral logic for Pulmonology.
 */

class PulmonologyService {
  constructor() {
    this.specialtyName = "Pulmonology";
    this.departmentCode = "DEP-108";
    this.clinicalGuidelines = this.initGuidelines();
    this.diagnosticProtocols = this.initProtocols();
    this.commonConditions = this.initConditions();
  }

  initGuidelines() {
    return [
      {
        id: "GL-1001",
        title: "Pulmonology Clinical Guideline #1",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 1.",
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
        title: "Pulmonology Clinical Guideline #2",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 2.",
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
        title: "Pulmonology Clinical Guideline #3",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 3.",
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
        title: "Pulmonology Clinical Guideline #4",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 4.",
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
        title: "Pulmonology Clinical Guideline #5",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 5.",
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
        title: "Pulmonology Clinical Guideline #6",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 6.",
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
        title: "Pulmonology Clinical Guideline #7",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 7.",
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
        title: "Pulmonology Clinical Guideline #8",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 8.",
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
        title: "Pulmonology Clinical Guideline #9",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 9.",
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
        title: "Pulmonology Clinical Guideline #10",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 10.",
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
        title: "Pulmonology Clinical Guideline #11",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 11.",
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
        title: "Pulmonology Clinical Guideline #12",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 12.",
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
        title: "Pulmonology Clinical Guideline #13",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 13.",
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
        title: "Pulmonology Clinical Guideline #14",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 14.",
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
        title: "Pulmonology Clinical Guideline #15",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 15.",
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
        title: "Pulmonology Clinical Guideline #16",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 16.",
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
        title: "Pulmonology Clinical Guideline #17",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 17.",
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
        title: "Pulmonology Clinical Guideline #18",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 18.",
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
        title: "Pulmonology Clinical Guideline #19",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 19.",
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
        title: "Pulmonology Clinical Guideline #20",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 20.",
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
        title: "Pulmonology Clinical Guideline #21",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 21.",
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
        title: "Pulmonology Clinical Guideline #22",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 22.",
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
        title: "Pulmonology Clinical Guideline #23",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 23.",
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
        title: "Pulmonology Clinical Guideline #24",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 24.",
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
        title: "Pulmonology Clinical Guideline #25",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 25.",
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
        title: "Pulmonology Clinical Guideline #26",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 26.",
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
        title: "Pulmonology Clinical Guideline #27",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 27.",
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
        title: "Pulmonology Clinical Guideline #28",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 28.",
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
        title: "Pulmonology Clinical Guideline #29",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 29.",
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
        title: "Pulmonology Clinical Guideline #30",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 30.",
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
        title: "Pulmonology Clinical Guideline #31",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 31.",
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
        title: "Pulmonology Clinical Guideline #32",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 32.",
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
        title: "Pulmonology Clinical Guideline #33",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 33.",
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
        title: "Pulmonology Clinical Guideline #34",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 34.",
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
        title: "Pulmonology Clinical Guideline #35",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 35.",
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
        title: "Pulmonology Clinical Guideline #36",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 36.",
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
        title: "Pulmonology Clinical Guideline #37",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 37.",
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
        title: "Pulmonology Clinical Guideline #38",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 38.",
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
        title: "Pulmonology Clinical Guideline #39",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 39.",
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
        title: "Pulmonology Clinical Guideline #40",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 40.",
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
        title: "Pulmonology Clinical Guideline #41",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 41.",
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
        title: "Pulmonology Clinical Guideline #42",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 42.",
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
        title: "Pulmonology Clinical Guideline #43",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 43.",
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
        title: "Pulmonology Clinical Guideline #44",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 44.",
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
        title: "Pulmonology Clinical Guideline #45",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 45.",
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
        title: "Pulmonology Clinical Guideline #46",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 46.",
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
        title: "Pulmonology Clinical Guideline #47",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 47.",
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
        title: "Pulmonology Clinical Guideline #48",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 48.",
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
        title: "Pulmonology Clinical Guideline #49",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 49.",
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
        title: "Pulmonology Clinical Guideline #50",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 50.",
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
        title: "Pulmonology Clinical Guideline #51",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 51.",
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
        title: "Pulmonology Clinical Guideline #52",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 52.",
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
        title: "Pulmonology Clinical Guideline #53",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 53.",
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
        title: "Pulmonology Clinical Guideline #54",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 54.",
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
        title: "Pulmonology Clinical Guideline #55",
        description: "Standard operating procedure for evaluating patient symptoms related to pulmonology condition 55.",
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
        protocolName: "Diagnostic Protocol 1 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2002",
        protocolName: "Diagnostic Protocol 2 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2003",
        protocolName: "Diagnostic Protocol 3 for Pulmonology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2004",
        protocolName: "Diagnostic Protocol 4 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2005",
        protocolName: "Diagnostic Protocol 5 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2006",
        protocolName: "Diagnostic Protocol 6 for Pulmonology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2007",
        protocolName: "Diagnostic Protocol 7 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2008",
        protocolName: "Diagnostic Protocol 8 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2009",
        protocolName: "Diagnostic Protocol 9 for Pulmonology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2010",
        protocolName: "Diagnostic Protocol 10 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2011",
        protocolName: "Diagnostic Protocol 11 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2012",
        protocolName: "Diagnostic Protocol 12 for Pulmonology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2013",
        protocolName: "Diagnostic Protocol 13 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2014",
        protocolName: "Diagnostic Protocol 14 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2015",
        protocolName: "Diagnostic Protocol 15 for Pulmonology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2016",
        protocolName: "Diagnostic Protocol 16 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2017",
        protocolName: "Diagnostic Protocol 17 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2018",
        protocolName: "Diagnostic Protocol 18 for Pulmonology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2019",
        protocolName: "Diagnostic Protocol 19 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2020",
        protocolName: "Diagnostic Protocol 20 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2021",
        protocolName: "Diagnostic Protocol 21 for Pulmonology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2022",
        protocolName: "Diagnostic Protocol 22 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2023",
        protocolName: "Diagnostic Protocol 23 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2024",
        protocolName: "Diagnostic Protocol 24 for Pulmonology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2025",
        protocolName: "Diagnostic Protocol 25 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2026",
        protocolName: "Diagnostic Protocol 26 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2027",
        protocolName: "Diagnostic Protocol 27 for Pulmonology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2028",
        protocolName: "Diagnostic Protocol 28 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2029",
        protocolName: "Diagnostic Protocol 29 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2030",
        protocolName: "Diagnostic Protocol 30 for Pulmonology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2031",
        protocolName: "Diagnostic Protocol 31 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2032",
        protocolName: "Diagnostic Protocol 32 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2033",
        protocolName: "Diagnostic Protocol 33 for Pulmonology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2034",
        protocolName: "Diagnostic Protocol 34 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2035",
        protocolName: "Diagnostic Protocol 35 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2036",
        protocolName: "Diagnostic Protocol 36 for Pulmonology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2037",
        protocolName: "Diagnostic Protocol 37 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2038",
        protocolName: "Diagnostic Protocol 38 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2039",
        protocolName: "Diagnostic Protocol 39 for Pulmonology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2040",
        protocolName: "Diagnostic Protocol 40 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2041",
        protocolName: "Diagnostic Protocol 41 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2042",
        protocolName: "Diagnostic Protocol 42 for Pulmonology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2043",
        protocolName: "Diagnostic Protocol 43 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2044",
        protocolName: "Diagnostic Protocol 44 for Pulmonology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2045",
        protocolName: "Diagnostic Protocol 45 for Pulmonology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pulmonology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
    ];
  }

  initConditions() {
    return [
      {
        icdCode: "PUL-301",
        conditionTitle: "Clinical Condition Pulmonology Case 1",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 1",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-302",
        conditionTitle: "Clinical Condition Pulmonology Case 2",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 2",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-303",
        conditionTitle: "Clinical Condition Pulmonology Case 3",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 3",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-304",
        conditionTitle: "Clinical Condition Pulmonology Case 4",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 4",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-305",
        conditionTitle: "Clinical Condition Pulmonology Case 5",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 5",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-306",
        conditionTitle: "Clinical Condition Pulmonology Case 6",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 6",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-307",
        conditionTitle: "Clinical Condition Pulmonology Case 7",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 7",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-308",
        conditionTitle: "Clinical Condition Pulmonology Case 8",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 8",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-309",
        conditionTitle: "Clinical Condition Pulmonology Case 9",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 9",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-310",
        conditionTitle: "Clinical Condition Pulmonology Case 10",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 10",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-311",
        conditionTitle: "Clinical Condition Pulmonology Case 11",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 11",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-312",
        conditionTitle: "Clinical Condition Pulmonology Case 12",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 12",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-313",
        conditionTitle: "Clinical Condition Pulmonology Case 13",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 13",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-314",
        conditionTitle: "Clinical Condition Pulmonology Case 14",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 14",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-315",
        conditionTitle: "Clinical Condition Pulmonology Case 15",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 15",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-316",
        conditionTitle: "Clinical Condition Pulmonology Case 16",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 16",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-317",
        conditionTitle: "Clinical Condition Pulmonology Case 17",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 17",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-318",
        conditionTitle: "Clinical Condition Pulmonology Case 18",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 18",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-319",
        conditionTitle: "Clinical Condition Pulmonology Case 19",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 19",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-320",
        conditionTitle: "Clinical Condition Pulmonology Case 20",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 20",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-321",
        conditionTitle: "Clinical Condition Pulmonology Case 21",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 21",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-322",
        conditionTitle: "Clinical Condition Pulmonology Case 22",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 22",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-323",
        conditionTitle: "Clinical Condition Pulmonology Case 23",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 23",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-324",
        conditionTitle: "Clinical Condition Pulmonology Case 24",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 24",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-325",
        conditionTitle: "Clinical Condition Pulmonology Case 25",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 25",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-326",
        conditionTitle: "Clinical Condition Pulmonology Case 26",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 26",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-327",
        conditionTitle: "Clinical Condition Pulmonology Case 27",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 27",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-328",
        conditionTitle: "Clinical Condition Pulmonology Case 28",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 28",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-329",
        conditionTitle: "Clinical Condition Pulmonology Case 29",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 29",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-330",
        conditionTitle: "Clinical Condition Pulmonology Case 30",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 30",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-331",
        conditionTitle: "Clinical Condition Pulmonology Case 31",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 31",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-332",
        conditionTitle: "Clinical Condition Pulmonology Case 32",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 32",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-333",
        conditionTitle: "Clinical Condition Pulmonology Case 33",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 33",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-334",
        conditionTitle: "Clinical Condition Pulmonology Case 34",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 34",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-335",
        conditionTitle: "Clinical Condition Pulmonology Case 35",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 35",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-336",
        conditionTitle: "Clinical Condition Pulmonology Case 36",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 36",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-337",
        conditionTitle: "Clinical Condition Pulmonology Case 37",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 37",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-338",
        conditionTitle: "Clinical Condition Pulmonology Case 38",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 38",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-339",
        conditionTitle: "Clinical Condition Pulmonology Case 39",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 39",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PUL-340",
        conditionTitle: "Clinical Condition Pulmonology Case 40",
        symptoms: ["Symptom A for pulmonology", "Symptom B for pulmonology", "Symptom C for pulmonology"],
        firstLineTherapy: "Standard Pulmonology Therapeutic Regimen 40",
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

module.exports = new PulmonologyService();
