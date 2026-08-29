/**
 * MediCare Gastroenterology Clinical Service Module
 * Handles diagnostic protocols, consultation guidelines, and clinical referral logic for Gastroenterology.
 */

class GastroenterologyService {
  constructor() {
    this.specialtyName = "Gastroenterology";
    this.departmentCode = "DEP-105";
    this.clinicalGuidelines = this.initGuidelines();
    this.diagnosticProtocols = this.initProtocols();
    this.commonConditions = this.initConditions();
  }

  initGuidelines() {
    return [
      {
        id: "GL-1001",
        title: "Gastroenterology Clinical Guideline #1",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 1.",
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
        title: "Gastroenterology Clinical Guideline #2",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 2.",
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
        title: "Gastroenterology Clinical Guideline #3",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 3.",
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
        title: "Gastroenterology Clinical Guideline #4",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 4.",
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
        title: "Gastroenterology Clinical Guideline #5",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 5.",
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
        title: "Gastroenterology Clinical Guideline #6",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 6.",
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
        title: "Gastroenterology Clinical Guideline #7",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 7.",
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
        title: "Gastroenterology Clinical Guideline #8",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 8.",
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
        title: "Gastroenterology Clinical Guideline #9",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 9.",
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
        title: "Gastroenterology Clinical Guideline #10",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 10.",
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
        title: "Gastroenterology Clinical Guideline #11",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 11.",
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
        title: "Gastroenterology Clinical Guideline #12",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 12.",
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
        title: "Gastroenterology Clinical Guideline #13",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 13.",
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
        title: "Gastroenterology Clinical Guideline #14",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 14.",
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
        title: "Gastroenterology Clinical Guideline #15",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 15.",
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
        title: "Gastroenterology Clinical Guideline #16",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 16.",
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
        title: "Gastroenterology Clinical Guideline #17",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 17.",
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
        title: "Gastroenterology Clinical Guideline #18",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 18.",
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
        title: "Gastroenterology Clinical Guideline #19",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 19.",
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
        title: "Gastroenterology Clinical Guideline #20",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 20.",
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
        title: "Gastroenterology Clinical Guideline #21",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 21.",
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
        title: "Gastroenterology Clinical Guideline #22",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 22.",
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
        title: "Gastroenterology Clinical Guideline #23",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 23.",
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
        title: "Gastroenterology Clinical Guideline #24",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 24.",
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
        title: "Gastroenterology Clinical Guideline #25",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 25.",
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
        title: "Gastroenterology Clinical Guideline #26",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 26.",
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
        title: "Gastroenterology Clinical Guideline #27",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 27.",
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
        title: "Gastroenterology Clinical Guideline #28",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 28.",
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
        title: "Gastroenterology Clinical Guideline #29",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 29.",
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
        title: "Gastroenterology Clinical Guideline #30",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 30.",
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
        title: "Gastroenterology Clinical Guideline #31",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 31.",
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
        title: "Gastroenterology Clinical Guideline #32",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 32.",
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
        title: "Gastroenterology Clinical Guideline #33",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 33.",
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
        title: "Gastroenterology Clinical Guideline #34",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 34.",
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
        title: "Gastroenterology Clinical Guideline #35",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 35.",
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
        title: "Gastroenterology Clinical Guideline #36",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 36.",
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
        title: "Gastroenterology Clinical Guideline #37",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 37.",
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
        title: "Gastroenterology Clinical Guideline #38",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 38.",
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
        title: "Gastroenterology Clinical Guideline #39",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 39.",
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
        title: "Gastroenterology Clinical Guideline #40",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 40.",
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
        title: "Gastroenterology Clinical Guideline #41",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 41.",
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
        title: "Gastroenterology Clinical Guideline #42",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 42.",
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
        title: "Gastroenterology Clinical Guideline #43",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 43.",
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
        title: "Gastroenterology Clinical Guideline #44",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 44.",
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
        title: "Gastroenterology Clinical Guideline #45",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 45.",
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
        title: "Gastroenterology Clinical Guideline #46",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 46.",
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
        title: "Gastroenterology Clinical Guideline #47",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 47.",
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
        title: "Gastroenterology Clinical Guideline #48",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 48.",
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
        title: "Gastroenterology Clinical Guideline #49",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 49.",
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
        title: "Gastroenterology Clinical Guideline #50",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 50.",
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
        title: "Gastroenterology Clinical Guideline #51",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 51.",
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
        title: "Gastroenterology Clinical Guideline #52",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 52.",
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
        title: "Gastroenterology Clinical Guideline #53",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 53.",
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
        title: "Gastroenterology Clinical Guideline #54",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 54.",
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
        title: "Gastroenterology Clinical Guideline #55",
        description: "Standard operating procedure for evaluating patient symptoms related to gastroenterology condition 55.",
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
        protocolName: "Diagnostic Protocol 1 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2002",
        protocolName: "Diagnostic Protocol 2 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2003",
        protocolName: "Diagnostic Protocol 3 for Gastroenterology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2004",
        protocolName: "Diagnostic Protocol 4 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2005",
        protocolName: "Diagnostic Protocol 5 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2006",
        protocolName: "Diagnostic Protocol 6 for Gastroenterology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2007",
        protocolName: "Diagnostic Protocol 7 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2008",
        protocolName: "Diagnostic Protocol 8 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2009",
        protocolName: "Diagnostic Protocol 9 for Gastroenterology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2010",
        protocolName: "Diagnostic Protocol 10 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2011",
        protocolName: "Diagnostic Protocol 11 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2012",
        protocolName: "Diagnostic Protocol 12 for Gastroenterology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2013",
        protocolName: "Diagnostic Protocol 13 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2014",
        protocolName: "Diagnostic Protocol 14 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2015",
        protocolName: "Diagnostic Protocol 15 for Gastroenterology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2016",
        protocolName: "Diagnostic Protocol 16 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2017",
        protocolName: "Diagnostic Protocol 17 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2018",
        protocolName: "Diagnostic Protocol 18 for Gastroenterology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2019",
        protocolName: "Diagnostic Protocol 19 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2020",
        protocolName: "Diagnostic Protocol 20 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2021",
        protocolName: "Diagnostic Protocol 21 for Gastroenterology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2022",
        protocolName: "Diagnostic Protocol 22 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2023",
        protocolName: "Diagnostic Protocol 23 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2024",
        protocolName: "Diagnostic Protocol 24 for Gastroenterology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2025",
        protocolName: "Diagnostic Protocol 25 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2026",
        protocolName: "Diagnostic Protocol 26 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2027",
        protocolName: "Diagnostic Protocol 27 for Gastroenterology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2028",
        protocolName: "Diagnostic Protocol 28 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2029",
        protocolName: "Diagnostic Protocol 29 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2030",
        protocolName: "Diagnostic Protocol 30 for Gastroenterology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2031",
        protocolName: "Diagnostic Protocol 31 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2032",
        protocolName: "Diagnostic Protocol 32 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2033",
        protocolName: "Diagnostic Protocol 33 for Gastroenterology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2034",
        protocolName: "Diagnostic Protocol 34 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2035",
        protocolName: "Diagnostic Protocol 35 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2036",
        protocolName: "Diagnostic Protocol 36 for Gastroenterology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2037",
        protocolName: "Diagnostic Protocol 37 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2038",
        protocolName: "Diagnostic Protocol 38 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2039",
        protocolName: "Diagnostic Protocol 39 for Gastroenterology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2040",
        protocolName: "Diagnostic Protocol 40 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2041",
        protocolName: "Diagnostic Protocol 41 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2042",
        protocolName: "Diagnostic Protocol 42 for Gastroenterology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2043",
        protocolName: "Diagnostic Protocol 43 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2044",
        protocolName: "Diagnostic Protocol 44 for Gastroenterology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2045",
        protocolName: "Diagnostic Protocol 45 for Gastroenterology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Gastroenterology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
    ];
  }

  initConditions() {
    return [
      {
        icdCode: "GAS-301",
        conditionTitle: "Clinical Condition Gastroenterology Case 1",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 1",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-302",
        conditionTitle: "Clinical Condition Gastroenterology Case 2",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 2",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-303",
        conditionTitle: "Clinical Condition Gastroenterology Case 3",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 3",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-304",
        conditionTitle: "Clinical Condition Gastroenterology Case 4",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 4",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-305",
        conditionTitle: "Clinical Condition Gastroenterology Case 5",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 5",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-306",
        conditionTitle: "Clinical Condition Gastroenterology Case 6",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 6",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-307",
        conditionTitle: "Clinical Condition Gastroenterology Case 7",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 7",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-308",
        conditionTitle: "Clinical Condition Gastroenterology Case 8",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 8",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-309",
        conditionTitle: "Clinical Condition Gastroenterology Case 9",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 9",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-310",
        conditionTitle: "Clinical Condition Gastroenterology Case 10",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 10",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-311",
        conditionTitle: "Clinical Condition Gastroenterology Case 11",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 11",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-312",
        conditionTitle: "Clinical Condition Gastroenterology Case 12",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 12",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-313",
        conditionTitle: "Clinical Condition Gastroenterology Case 13",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 13",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-314",
        conditionTitle: "Clinical Condition Gastroenterology Case 14",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 14",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-315",
        conditionTitle: "Clinical Condition Gastroenterology Case 15",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 15",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-316",
        conditionTitle: "Clinical Condition Gastroenterology Case 16",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 16",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-317",
        conditionTitle: "Clinical Condition Gastroenterology Case 17",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 17",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-318",
        conditionTitle: "Clinical Condition Gastroenterology Case 18",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 18",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-319",
        conditionTitle: "Clinical Condition Gastroenterology Case 19",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 19",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-320",
        conditionTitle: "Clinical Condition Gastroenterology Case 20",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 20",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-321",
        conditionTitle: "Clinical Condition Gastroenterology Case 21",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 21",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-322",
        conditionTitle: "Clinical Condition Gastroenterology Case 22",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 22",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-323",
        conditionTitle: "Clinical Condition Gastroenterology Case 23",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 23",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-324",
        conditionTitle: "Clinical Condition Gastroenterology Case 24",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 24",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-325",
        conditionTitle: "Clinical Condition Gastroenterology Case 25",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 25",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-326",
        conditionTitle: "Clinical Condition Gastroenterology Case 26",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 26",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-327",
        conditionTitle: "Clinical Condition Gastroenterology Case 27",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 27",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-328",
        conditionTitle: "Clinical Condition Gastroenterology Case 28",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 28",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-329",
        conditionTitle: "Clinical Condition Gastroenterology Case 29",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 29",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-330",
        conditionTitle: "Clinical Condition Gastroenterology Case 30",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 30",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-331",
        conditionTitle: "Clinical Condition Gastroenterology Case 31",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 31",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-332",
        conditionTitle: "Clinical Condition Gastroenterology Case 32",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 32",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-333",
        conditionTitle: "Clinical Condition Gastroenterology Case 33",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 33",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-334",
        conditionTitle: "Clinical Condition Gastroenterology Case 34",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 34",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-335",
        conditionTitle: "Clinical Condition Gastroenterology Case 35",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 35",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-336",
        conditionTitle: "Clinical Condition Gastroenterology Case 36",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 36",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-337",
        conditionTitle: "Clinical Condition Gastroenterology Case 37",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 37",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-338",
        conditionTitle: "Clinical Condition Gastroenterology Case 38",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 38",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-339",
        conditionTitle: "Clinical Condition Gastroenterology Case 39",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 39",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "GAS-340",
        conditionTitle: "Clinical Condition Gastroenterology Case 40",
        symptoms: ["Symptom A for gastroenterology", "Symptom B for gastroenterology", "Symptom C for gastroenterology"],
        firstLineTherapy: "Standard Gastroenterology Therapeutic Regimen 40",
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

module.exports = new GastroenterologyService();
