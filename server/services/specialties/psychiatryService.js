/**
 * MediCare Psychiatry Clinical Service Module
 * Handles diagnostic protocols, consultation guidelines, and clinical referral logic for Psychiatry.
 */

class PsychiatryService {
  constructor() {
    this.specialtyName = "Psychiatry";
    this.departmentCode = "DEP-110";
    this.clinicalGuidelines = this.initGuidelines();
    this.diagnosticProtocols = this.initProtocols();
    this.commonConditions = this.initConditions();
  }

  initGuidelines() {
    return [
      {
        id: "GL-1001",
        title: "Psychiatry Clinical Guideline #1",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 1.",
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
        title: "Psychiatry Clinical Guideline #2",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 2.",
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
        title: "Psychiatry Clinical Guideline #3",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 3.",
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
        title: "Psychiatry Clinical Guideline #4",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 4.",
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
        title: "Psychiatry Clinical Guideline #5",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 5.",
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
        title: "Psychiatry Clinical Guideline #6",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 6.",
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
        title: "Psychiatry Clinical Guideline #7",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 7.",
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
        title: "Psychiatry Clinical Guideline #8",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 8.",
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
        title: "Psychiatry Clinical Guideline #9",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 9.",
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
        title: "Psychiatry Clinical Guideline #10",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 10.",
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
        title: "Psychiatry Clinical Guideline #11",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 11.",
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
        title: "Psychiatry Clinical Guideline #12",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 12.",
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
        title: "Psychiatry Clinical Guideline #13",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 13.",
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
        title: "Psychiatry Clinical Guideline #14",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 14.",
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
        title: "Psychiatry Clinical Guideline #15",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 15.",
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
        title: "Psychiatry Clinical Guideline #16",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 16.",
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
        title: "Psychiatry Clinical Guideline #17",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 17.",
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
        title: "Psychiatry Clinical Guideline #18",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 18.",
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
        title: "Psychiatry Clinical Guideline #19",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 19.",
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
        title: "Psychiatry Clinical Guideline #20",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 20.",
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
        title: "Psychiatry Clinical Guideline #21",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 21.",
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
        title: "Psychiatry Clinical Guideline #22",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 22.",
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
        title: "Psychiatry Clinical Guideline #23",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 23.",
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
        title: "Psychiatry Clinical Guideline #24",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 24.",
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
        title: "Psychiatry Clinical Guideline #25",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 25.",
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
        title: "Psychiatry Clinical Guideline #26",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 26.",
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
        title: "Psychiatry Clinical Guideline #27",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 27.",
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
        title: "Psychiatry Clinical Guideline #28",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 28.",
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
        title: "Psychiatry Clinical Guideline #29",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 29.",
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
        title: "Psychiatry Clinical Guideline #30",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 30.",
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
        title: "Psychiatry Clinical Guideline #31",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 31.",
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
        title: "Psychiatry Clinical Guideline #32",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 32.",
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
        title: "Psychiatry Clinical Guideline #33",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 33.",
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
        title: "Psychiatry Clinical Guideline #34",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 34.",
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
        title: "Psychiatry Clinical Guideline #35",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 35.",
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
        title: "Psychiatry Clinical Guideline #36",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 36.",
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
        title: "Psychiatry Clinical Guideline #37",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 37.",
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
        title: "Psychiatry Clinical Guideline #38",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 38.",
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
        title: "Psychiatry Clinical Guideline #39",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 39.",
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
        title: "Psychiatry Clinical Guideline #40",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 40.",
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
        title: "Psychiatry Clinical Guideline #41",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 41.",
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
        title: "Psychiatry Clinical Guideline #42",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 42.",
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
        title: "Psychiatry Clinical Guideline #43",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 43.",
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
        title: "Psychiatry Clinical Guideline #44",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 44.",
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
        title: "Psychiatry Clinical Guideline #45",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 45.",
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
        title: "Psychiatry Clinical Guideline #46",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 46.",
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
        title: "Psychiatry Clinical Guideline #47",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 47.",
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
        title: "Psychiatry Clinical Guideline #48",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 48.",
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
        title: "Psychiatry Clinical Guideline #49",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 49.",
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
        title: "Psychiatry Clinical Guideline #50",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 50.",
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
        title: "Psychiatry Clinical Guideline #51",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 51.",
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
        title: "Psychiatry Clinical Guideline #52",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 52.",
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
        title: "Psychiatry Clinical Guideline #53",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 53.",
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
        title: "Psychiatry Clinical Guideline #54",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 54.",
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
        title: "Psychiatry Clinical Guideline #55",
        description: "Standard operating procedure for evaluating patient symptoms related to psychiatry condition 55.",
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
        protocolName: "Diagnostic Protocol 1 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2002",
        protocolName: "Diagnostic Protocol 2 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2003",
        protocolName: "Diagnostic Protocol 3 for Psychiatry Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2004",
        protocolName: "Diagnostic Protocol 4 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2005",
        protocolName: "Diagnostic Protocol 5 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2006",
        protocolName: "Diagnostic Protocol 6 for Psychiatry Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2007",
        protocolName: "Diagnostic Protocol 7 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2008",
        protocolName: "Diagnostic Protocol 8 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2009",
        protocolName: "Diagnostic Protocol 9 for Psychiatry Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2010",
        protocolName: "Diagnostic Protocol 10 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2011",
        protocolName: "Diagnostic Protocol 11 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2012",
        protocolName: "Diagnostic Protocol 12 for Psychiatry Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2013",
        protocolName: "Diagnostic Protocol 13 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2014",
        protocolName: "Diagnostic Protocol 14 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2015",
        protocolName: "Diagnostic Protocol 15 for Psychiatry Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2016",
        protocolName: "Diagnostic Protocol 16 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2017",
        protocolName: "Diagnostic Protocol 17 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2018",
        protocolName: "Diagnostic Protocol 18 for Psychiatry Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2019",
        protocolName: "Diagnostic Protocol 19 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2020",
        protocolName: "Diagnostic Protocol 20 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2021",
        protocolName: "Diagnostic Protocol 21 for Psychiatry Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2022",
        protocolName: "Diagnostic Protocol 22 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2023",
        protocolName: "Diagnostic Protocol 23 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2024",
        protocolName: "Diagnostic Protocol 24 for Psychiatry Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2025",
        protocolName: "Diagnostic Protocol 25 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2026",
        protocolName: "Diagnostic Protocol 26 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2027",
        protocolName: "Diagnostic Protocol 27 for Psychiatry Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2028",
        protocolName: "Diagnostic Protocol 28 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2029",
        protocolName: "Diagnostic Protocol 29 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2030",
        protocolName: "Diagnostic Protocol 30 for Psychiatry Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2031",
        protocolName: "Diagnostic Protocol 31 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2032",
        protocolName: "Diagnostic Protocol 32 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2033",
        protocolName: "Diagnostic Protocol 33 for Psychiatry Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2034",
        protocolName: "Diagnostic Protocol 34 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2035",
        protocolName: "Diagnostic Protocol 35 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2036",
        protocolName: "Diagnostic Protocol 36 for Psychiatry Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2037",
        protocolName: "Diagnostic Protocol 37 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2038",
        protocolName: "Diagnostic Protocol 38 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2039",
        protocolName: "Diagnostic Protocol 39 for Psychiatry Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2040",
        protocolName: "Diagnostic Protocol 40 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2041",
        protocolName: "Diagnostic Protocol 41 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2042",
        protocolName: "Diagnostic Protocol 42 for Psychiatry Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2043",
        protocolName: "Diagnostic Protocol 43 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2044",
        protocolName: "Diagnostic Protocol 44 for Psychiatry Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2045",
        protocolName: "Diagnostic Protocol 45 for Psychiatry Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Psychiatry Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
    ];
  }

  initConditions() {
    return [
      {
        icdCode: "PSY-301",
        conditionTitle: "Clinical Condition Psychiatry Case 1",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 1",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-302",
        conditionTitle: "Clinical Condition Psychiatry Case 2",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 2",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-303",
        conditionTitle: "Clinical Condition Psychiatry Case 3",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 3",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-304",
        conditionTitle: "Clinical Condition Psychiatry Case 4",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 4",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-305",
        conditionTitle: "Clinical Condition Psychiatry Case 5",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 5",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-306",
        conditionTitle: "Clinical Condition Psychiatry Case 6",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 6",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-307",
        conditionTitle: "Clinical Condition Psychiatry Case 7",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 7",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-308",
        conditionTitle: "Clinical Condition Psychiatry Case 8",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 8",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-309",
        conditionTitle: "Clinical Condition Psychiatry Case 9",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 9",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-310",
        conditionTitle: "Clinical Condition Psychiatry Case 10",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 10",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-311",
        conditionTitle: "Clinical Condition Psychiatry Case 11",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 11",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-312",
        conditionTitle: "Clinical Condition Psychiatry Case 12",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 12",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-313",
        conditionTitle: "Clinical Condition Psychiatry Case 13",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 13",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-314",
        conditionTitle: "Clinical Condition Psychiatry Case 14",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 14",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-315",
        conditionTitle: "Clinical Condition Psychiatry Case 15",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 15",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-316",
        conditionTitle: "Clinical Condition Psychiatry Case 16",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 16",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-317",
        conditionTitle: "Clinical Condition Psychiatry Case 17",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 17",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-318",
        conditionTitle: "Clinical Condition Psychiatry Case 18",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 18",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-319",
        conditionTitle: "Clinical Condition Psychiatry Case 19",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 19",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-320",
        conditionTitle: "Clinical Condition Psychiatry Case 20",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 20",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-321",
        conditionTitle: "Clinical Condition Psychiatry Case 21",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 21",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-322",
        conditionTitle: "Clinical Condition Psychiatry Case 22",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 22",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-323",
        conditionTitle: "Clinical Condition Psychiatry Case 23",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 23",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-324",
        conditionTitle: "Clinical Condition Psychiatry Case 24",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 24",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-325",
        conditionTitle: "Clinical Condition Psychiatry Case 25",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 25",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-326",
        conditionTitle: "Clinical Condition Psychiatry Case 26",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 26",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-327",
        conditionTitle: "Clinical Condition Psychiatry Case 27",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 27",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-328",
        conditionTitle: "Clinical Condition Psychiatry Case 28",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 28",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-329",
        conditionTitle: "Clinical Condition Psychiatry Case 29",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 29",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-330",
        conditionTitle: "Clinical Condition Psychiatry Case 30",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 30",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-331",
        conditionTitle: "Clinical Condition Psychiatry Case 31",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 31",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-332",
        conditionTitle: "Clinical Condition Psychiatry Case 32",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 32",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-333",
        conditionTitle: "Clinical Condition Psychiatry Case 33",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 33",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-334",
        conditionTitle: "Clinical Condition Psychiatry Case 34",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 34",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-335",
        conditionTitle: "Clinical Condition Psychiatry Case 35",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 35",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-336",
        conditionTitle: "Clinical Condition Psychiatry Case 36",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 36",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-337",
        conditionTitle: "Clinical Condition Psychiatry Case 37",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 37",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-338",
        conditionTitle: "Clinical Condition Psychiatry Case 38",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 38",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-339",
        conditionTitle: "Clinical Condition Psychiatry Case 39",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 39",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "PSY-340",
        conditionTitle: "Clinical Condition Psychiatry Case 40",
        symptoms: ["Symptom A for psychiatry", "Symptom B for psychiatry", "Symptom C for psychiatry"],
        firstLineTherapy: "Standard Psychiatry Therapeutic Regimen 40",
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

module.exports = new PsychiatryService();
