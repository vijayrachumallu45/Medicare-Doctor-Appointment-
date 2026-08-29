/**
 * MediCare Pathology Clinical Service Module
 * Handles diagnostic protocols, consultation guidelines, and clinical referral logic for Pathology.
 */

class PathologyService {
  constructor() {
    this.specialtyName = "Pathology";
    this.departmentCode = "DEP-122";
    this.clinicalGuidelines = this.initGuidelines();
    this.diagnosticProtocols = this.initProtocols();
    this.commonConditions = this.initConditions();
  }

  initGuidelines() {
    return [
      {
        id: "GL-1001",
        title: "Pathology Clinical Guideline #1",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 1.",
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
        title: "Pathology Clinical Guideline #2",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 2.",
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
        title: "Pathology Clinical Guideline #3",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 3.",
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
        title: "Pathology Clinical Guideline #4",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 4.",
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
        title: "Pathology Clinical Guideline #5",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 5.",
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
        title: "Pathology Clinical Guideline #6",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 6.",
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
        title: "Pathology Clinical Guideline #7",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 7.",
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
        title: "Pathology Clinical Guideline #8",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 8.",
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
        title: "Pathology Clinical Guideline #9",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 9.",
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
        title: "Pathology Clinical Guideline #10",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 10.",
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
        title: "Pathology Clinical Guideline #11",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 11.",
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
        title: "Pathology Clinical Guideline #12",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 12.",
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
        title: "Pathology Clinical Guideline #13",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 13.",
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
        title: "Pathology Clinical Guideline #14",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 14.",
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
        title: "Pathology Clinical Guideline #15",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 15.",
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
        title: "Pathology Clinical Guideline #16",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 16.",
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
        title: "Pathology Clinical Guideline #17",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 17.",
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
        title: "Pathology Clinical Guideline #18",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 18.",
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
        title: "Pathology Clinical Guideline #19",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 19.",
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
        title: "Pathology Clinical Guideline #20",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 20.",
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
        title: "Pathology Clinical Guideline #21",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 21.",
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
        title: "Pathology Clinical Guideline #22",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 22.",
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
        title: "Pathology Clinical Guideline #23",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 23.",
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
        title: "Pathology Clinical Guideline #24",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 24.",
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
        title: "Pathology Clinical Guideline #25",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 25.",
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
        title: "Pathology Clinical Guideline #26",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 26.",
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
        title: "Pathology Clinical Guideline #27",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 27.",
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
        title: "Pathology Clinical Guideline #28",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 28.",
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
        title: "Pathology Clinical Guideline #29",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 29.",
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
        title: "Pathology Clinical Guideline #30",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 30.",
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
        title: "Pathology Clinical Guideline #31",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 31.",
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
        title: "Pathology Clinical Guideline #32",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 32.",
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
        title: "Pathology Clinical Guideline #33",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 33.",
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
        title: "Pathology Clinical Guideline #34",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 34.",
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
        title: "Pathology Clinical Guideline #35",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 35.",
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
        title: "Pathology Clinical Guideline #36",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 36.",
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
        title: "Pathology Clinical Guideline #37",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 37.",
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
        title: "Pathology Clinical Guideline #38",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 38.",
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
        title: "Pathology Clinical Guideline #39",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 39.",
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
        title: "Pathology Clinical Guideline #40",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 40.",
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
        title: "Pathology Clinical Guideline #41",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 41.",
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
        title: "Pathology Clinical Guideline #42",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 42.",
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
        title: "Pathology Clinical Guideline #43",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 43.",
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
        title: "Pathology Clinical Guideline #44",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 44.",
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
        title: "Pathology Clinical Guideline #45",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 45.",
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
        title: "Pathology Clinical Guideline #46",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 46.",
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
        title: "Pathology Clinical Guideline #47",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 47.",
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
        title: "Pathology Clinical Guideline #48",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 48.",
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
        title: "Pathology Clinical Guideline #49",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 49.",
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
        title: "Pathology Clinical Guideline #50",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 50.",
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
        title: "Pathology Clinical Guideline #51",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 51.",
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
        title: "Pathology Clinical Guideline #52",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 52.",
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
        title: "Pathology Clinical Guideline #53",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 53.",
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
        title: "Pathology Clinical Guideline #54",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 54.",
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
        title: "Pathology Clinical Guideline #55",
        description: "Standard operating procedure for evaluating patient symptoms related to pathology condition 55.",
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
        protocolName: "Diagnostic Protocol 1 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2002",
        protocolName: "Diagnostic Protocol 2 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2003",
        protocolName: "Diagnostic Protocol 3 for Pathology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2004",
        protocolName: "Diagnostic Protocol 4 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2005",
        protocolName: "Diagnostic Protocol 5 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2006",
        protocolName: "Diagnostic Protocol 6 for Pathology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2007",
        protocolName: "Diagnostic Protocol 7 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2008",
        protocolName: "Diagnostic Protocol 8 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2009",
        protocolName: "Diagnostic Protocol 9 for Pathology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2010",
        protocolName: "Diagnostic Protocol 10 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2011",
        protocolName: "Diagnostic Protocol 11 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2012",
        protocolName: "Diagnostic Protocol 12 for Pathology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2013",
        protocolName: "Diagnostic Protocol 13 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2014",
        protocolName: "Diagnostic Protocol 14 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2015",
        protocolName: "Diagnostic Protocol 15 for Pathology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2016",
        protocolName: "Diagnostic Protocol 16 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2017",
        protocolName: "Diagnostic Protocol 17 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2018",
        protocolName: "Diagnostic Protocol 18 for Pathology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2019",
        protocolName: "Diagnostic Protocol 19 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2020",
        protocolName: "Diagnostic Protocol 20 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2021",
        protocolName: "Diagnostic Protocol 21 for Pathology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2022",
        protocolName: "Diagnostic Protocol 22 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2023",
        protocolName: "Diagnostic Protocol 23 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2024",
        protocolName: "Diagnostic Protocol 24 for Pathology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2025",
        protocolName: "Diagnostic Protocol 25 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2026",
        protocolName: "Diagnostic Protocol 26 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2027",
        protocolName: "Diagnostic Protocol 27 for Pathology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2028",
        protocolName: "Diagnostic Protocol 28 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2029",
        protocolName: "Diagnostic Protocol 29 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2030",
        protocolName: "Diagnostic Protocol 30 for Pathology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2031",
        protocolName: "Diagnostic Protocol 31 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2032",
        protocolName: "Diagnostic Protocol 32 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2033",
        protocolName: "Diagnostic Protocol 33 for Pathology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2034",
        protocolName: "Diagnostic Protocol 34 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2035",
        protocolName: "Diagnostic Protocol 35 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2036",
        protocolName: "Diagnostic Protocol 36 for Pathology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2037",
        protocolName: "Diagnostic Protocol 37 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2038",
        protocolName: "Diagnostic Protocol 38 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2039",
        protocolName: "Diagnostic Protocol 39 for Pathology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2040",
        protocolName: "Diagnostic Protocol 40 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2041",
        protocolName: "Diagnostic Protocol 41 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2042",
        protocolName: "Diagnostic Protocol 42 for Pathology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2043",
        protocolName: "Diagnostic Protocol 43 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2044",
        protocolName: "Diagnostic Protocol 44 for Pathology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2045",
        protocolName: "Diagnostic Protocol 45 for Pathology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Pathology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
    ];
  }

  initConditions() {
    return [
      {
        icdCode: "PAT-301",
        conditionTitle: "Clinical Condition Pathology Case 1",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 1",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-302",
        conditionTitle: "Clinical Condition Pathology Case 2",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 2",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-303",
        conditionTitle: "Clinical Condition Pathology Case 3",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 3",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-304",
        conditionTitle: "Clinical Condition Pathology Case 4",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 4",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-305",
        conditionTitle: "Clinical Condition Pathology Case 5",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 5",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-306",
        conditionTitle: "Clinical Condition Pathology Case 6",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 6",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-307",
        conditionTitle: "Clinical Condition Pathology Case 7",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 7",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-308",
        conditionTitle: "Clinical Condition Pathology Case 8",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 8",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-309",
        conditionTitle: "Clinical Condition Pathology Case 9",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 9",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-310",
        conditionTitle: "Clinical Condition Pathology Case 10",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 10",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-311",
        conditionTitle: "Clinical Condition Pathology Case 11",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 11",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-312",
        conditionTitle: "Clinical Condition Pathology Case 12",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 12",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-313",
        conditionTitle: "Clinical Condition Pathology Case 13",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 13",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-314",
        conditionTitle: "Clinical Condition Pathology Case 14",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 14",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-315",
        conditionTitle: "Clinical Condition Pathology Case 15",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 15",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-316",
        conditionTitle: "Clinical Condition Pathology Case 16",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 16",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-317",
        conditionTitle: "Clinical Condition Pathology Case 17",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 17",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-318",
        conditionTitle: "Clinical Condition Pathology Case 18",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 18",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-319",
        conditionTitle: "Clinical Condition Pathology Case 19",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 19",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-320",
        conditionTitle: "Clinical Condition Pathology Case 20",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 20",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-321",
        conditionTitle: "Clinical Condition Pathology Case 21",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 21",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-322",
        conditionTitle: "Clinical Condition Pathology Case 22",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 22",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-323",
        conditionTitle: "Clinical Condition Pathology Case 23",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 23",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-324",
        conditionTitle: "Clinical Condition Pathology Case 24",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 24",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-325",
        conditionTitle: "Clinical Condition Pathology Case 25",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 25",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-326",
        conditionTitle: "Clinical Condition Pathology Case 26",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 26",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-327",
        conditionTitle: "Clinical Condition Pathology Case 27",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 27",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-328",
        conditionTitle: "Clinical Condition Pathology Case 28",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 28",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-329",
        conditionTitle: "Clinical Condition Pathology Case 29",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 29",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-330",
        conditionTitle: "Clinical Condition Pathology Case 30",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 30",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-331",
        conditionTitle: "Clinical Condition Pathology Case 31",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 31",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-332",
        conditionTitle: "Clinical Condition Pathology Case 32",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 32",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-333",
        conditionTitle: "Clinical Condition Pathology Case 33",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 33",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-334",
        conditionTitle: "Clinical Condition Pathology Case 34",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 34",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-335",
        conditionTitle: "Clinical Condition Pathology Case 35",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 35",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-336",
        conditionTitle: "Clinical Condition Pathology Case 36",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 36",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-337",
        conditionTitle: "Clinical Condition Pathology Case 37",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 37",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-338",
        conditionTitle: "Clinical Condition Pathology Case 38",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 38",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-339",
        conditionTitle: "Clinical Condition Pathology Case 39",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 39",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PAT-340",
        conditionTitle: "Clinical Condition Pathology Case 40",
        symptoms: ["Symptom A for pathology", "Symptom B for pathology", "Symptom C for pathology"],
        firstLineTherapy: "Standard Pathology Therapeutic Regimen 40",
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

module.exports = new PathologyService();
