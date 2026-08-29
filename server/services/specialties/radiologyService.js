/**
 * MediCare Radiology Clinical Service Module
 * Handles diagnostic protocols, consultation guidelines, and clinical referral logic for Radiology.
 */

class RadiologyService {
  constructor() {
    this.specialtyName = "Radiology";
    this.departmentCode = "DEP-121";
    this.clinicalGuidelines = this.initGuidelines();
    this.diagnosticProtocols = this.initProtocols();
    this.commonConditions = this.initConditions();
  }

  initGuidelines() {
    return [
      {
        id: "GL-1001",
        title: "Radiology Clinical Guideline #1",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 1.",
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
        title: "Radiology Clinical Guideline #2",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 2.",
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
        title: "Radiology Clinical Guideline #3",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 3.",
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
        title: "Radiology Clinical Guideline #4",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 4.",
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
        title: "Radiology Clinical Guideline #5",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 5.",
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
        title: "Radiology Clinical Guideline #6",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 6.",
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
        title: "Radiology Clinical Guideline #7",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 7.",
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
        title: "Radiology Clinical Guideline #8",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 8.",
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
        title: "Radiology Clinical Guideline #9",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 9.",
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
        title: "Radiology Clinical Guideline #10",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 10.",
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
        title: "Radiology Clinical Guideline #11",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 11.",
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
        title: "Radiology Clinical Guideline #12",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 12.",
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
        title: "Radiology Clinical Guideline #13",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 13.",
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
        title: "Radiology Clinical Guideline #14",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 14.",
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
        title: "Radiology Clinical Guideline #15",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 15.",
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
        title: "Radiology Clinical Guideline #16",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 16.",
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
        title: "Radiology Clinical Guideline #17",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 17.",
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
        title: "Radiology Clinical Guideline #18",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 18.",
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
        title: "Radiology Clinical Guideline #19",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 19.",
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
        title: "Radiology Clinical Guideline #20",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 20.",
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
        title: "Radiology Clinical Guideline #21",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 21.",
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
        title: "Radiology Clinical Guideline #22",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 22.",
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
        title: "Radiology Clinical Guideline #23",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 23.",
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
        title: "Radiology Clinical Guideline #24",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 24.",
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
        title: "Radiology Clinical Guideline #25",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 25.",
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
        title: "Radiology Clinical Guideline #26",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 26.",
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
        title: "Radiology Clinical Guideline #27",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 27.",
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
        title: "Radiology Clinical Guideline #28",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 28.",
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
        title: "Radiology Clinical Guideline #29",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 29.",
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
        title: "Radiology Clinical Guideline #30",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 30.",
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
        title: "Radiology Clinical Guideline #31",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 31.",
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
        title: "Radiology Clinical Guideline #32",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 32.",
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
        title: "Radiology Clinical Guideline #33",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 33.",
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
        title: "Radiology Clinical Guideline #34",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 34.",
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
        title: "Radiology Clinical Guideline #35",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 35.",
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
        title: "Radiology Clinical Guideline #36",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 36.",
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
        title: "Radiology Clinical Guideline #37",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 37.",
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
        title: "Radiology Clinical Guideline #38",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 38.",
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
        title: "Radiology Clinical Guideline #39",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 39.",
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
        title: "Radiology Clinical Guideline #40",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 40.",
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
        title: "Radiology Clinical Guideline #41",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 41.",
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
        title: "Radiology Clinical Guideline #42",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 42.",
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
        title: "Radiology Clinical Guideline #43",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 43.",
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
        title: "Radiology Clinical Guideline #44",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 44.",
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
        title: "Radiology Clinical Guideline #45",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 45.",
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
        title: "Radiology Clinical Guideline #46",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 46.",
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
        title: "Radiology Clinical Guideline #47",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 47.",
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
        title: "Radiology Clinical Guideline #48",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 48.",
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
        title: "Radiology Clinical Guideline #49",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 49.",
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
        title: "Radiology Clinical Guideline #50",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 50.",
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
        title: "Radiology Clinical Guideline #51",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 51.",
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
        title: "Radiology Clinical Guideline #52",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 52.",
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
        title: "Radiology Clinical Guideline #53",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 53.",
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
        title: "Radiology Clinical Guideline #54",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 54.",
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
        title: "Radiology Clinical Guideline #55",
        description: "Standard operating procedure for evaluating patient symptoms related to radiology condition 55.",
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
        protocolName: "Diagnostic Protocol 1 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2002",
        protocolName: "Diagnostic Protocol 2 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2003",
        protocolName: "Diagnostic Protocol 3 for Radiology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2004",
        protocolName: "Diagnostic Protocol 4 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2005",
        protocolName: "Diagnostic Protocol 5 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2006",
        protocolName: "Diagnostic Protocol 6 for Radiology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2007",
        protocolName: "Diagnostic Protocol 7 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2008",
        protocolName: "Diagnostic Protocol 8 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2009",
        protocolName: "Diagnostic Protocol 9 for Radiology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2010",
        protocolName: "Diagnostic Protocol 10 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2011",
        protocolName: "Diagnostic Protocol 11 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2012",
        protocolName: "Diagnostic Protocol 12 for Radiology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2013",
        protocolName: "Diagnostic Protocol 13 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2014",
        protocolName: "Diagnostic Protocol 14 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2015",
        protocolName: "Diagnostic Protocol 15 for Radiology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2016",
        protocolName: "Diagnostic Protocol 16 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2017",
        protocolName: "Diagnostic Protocol 17 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2018",
        protocolName: "Diagnostic Protocol 18 for Radiology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2019",
        protocolName: "Diagnostic Protocol 19 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2020",
        protocolName: "Diagnostic Protocol 20 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2021",
        protocolName: "Diagnostic Protocol 21 for Radiology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2022",
        protocolName: "Diagnostic Protocol 22 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2023",
        protocolName: "Diagnostic Protocol 23 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2024",
        protocolName: "Diagnostic Protocol 24 for Radiology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2025",
        protocolName: "Diagnostic Protocol 25 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2026",
        protocolName: "Diagnostic Protocol 26 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2027",
        protocolName: "Diagnostic Protocol 27 for Radiology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2028",
        protocolName: "Diagnostic Protocol 28 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2029",
        protocolName: "Diagnostic Protocol 29 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2030",
        protocolName: "Diagnostic Protocol 30 for Radiology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2031",
        protocolName: "Diagnostic Protocol 31 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2032",
        protocolName: "Diagnostic Protocol 32 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2033",
        protocolName: "Diagnostic Protocol 33 for Radiology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2034",
        protocolName: "Diagnostic Protocol 34 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2035",
        protocolName: "Diagnostic Protocol 35 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2036",
        protocolName: "Diagnostic Protocol 36 for Radiology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2037",
        protocolName: "Diagnostic Protocol 37 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2038",
        protocolName: "Diagnostic Protocol 38 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2039",
        protocolName: "Diagnostic Protocol 39 for Radiology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2040",
        protocolName: "Diagnostic Protocol 40 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2041",
        protocolName: "Diagnostic Protocol 41 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2042",
        protocolName: "Diagnostic Protocol 42 for Radiology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2043",
        protocolName: "Diagnostic Protocol 43 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
      {
        protocolId: "PRT-2044",
        protocolName: "Diagnostic Protocol 44 for Radiology Assessment",
        triageCategory: "Routine",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "24 hours"
      },
      {
        protocolId: "PRT-2045",
        protocolName: "Diagnostic Protocol 45 for Radiology Assessment",
        triageCategory: "Urgent",
        requiredLabTests: ["Complete Blood Count", "Metabolic Panel", "Specialized Radiology Biomarkers"],
        contraindications: ["Known allergy to contrast agents", "Severe renal impairment"],
        expectedTurnaround: "48 hours"
      },
    ];
  }

  initConditions() {
    return [
      {
        icdCode: "RAD-301",
        conditionTitle: "Clinical Condition Radiology Case 1",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 1",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-302",
        conditionTitle: "Clinical Condition Radiology Case 2",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 2",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-303",
        conditionTitle: "Clinical Condition Radiology Case 3",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 3",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-304",
        conditionTitle: "Clinical Condition Radiology Case 4",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 4",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-305",
        conditionTitle: "Clinical Condition Radiology Case 5",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 5",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-306",
        conditionTitle: "Clinical Condition Radiology Case 6",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 6",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-307",
        conditionTitle: "Clinical Condition Radiology Case 7",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 7",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-308",
        conditionTitle: "Clinical Condition Radiology Case 8",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 8",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-309",
        conditionTitle: "Clinical Condition Radiology Case 9",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 9",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-310",
        conditionTitle: "Clinical Condition Radiology Case 10",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 10",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-311",
        conditionTitle: "Clinical Condition Radiology Case 11",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 11",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-312",
        conditionTitle: "Clinical Condition Radiology Case 12",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 12",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-313",
        conditionTitle: "Clinical Condition Radiology Case 13",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 13",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-314",
        conditionTitle: "Clinical Condition Radiology Case 14",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 14",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-315",
        conditionTitle: "Clinical Condition Radiology Case 15",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 15",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-316",
        conditionTitle: "Clinical Condition Radiology Case 16",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 16",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-317",
        conditionTitle: "Clinical Condition Radiology Case 17",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 17",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-318",
        conditionTitle: "Clinical Condition Radiology Case 18",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 18",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-319",
        conditionTitle: "Clinical Condition Radiology Case 19",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 19",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-320",
        conditionTitle: "Clinical Condition Radiology Case 20",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 20",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-321",
        conditionTitle: "Clinical Condition Radiology Case 21",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 21",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-322",
        conditionTitle: "Clinical Condition Radiology Case 22",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 22",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-323",
        conditionTitle: "Clinical Condition Radiology Case 23",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 23",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-324",
        conditionTitle: "Clinical Condition Radiology Case 24",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 24",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-325",
        conditionTitle: "Clinical Condition Radiology Case 25",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 25",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-326",
        conditionTitle: "Clinical Condition Radiology Case 26",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 26",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-327",
        conditionTitle: "Clinical Condition Radiology Case 27",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 27",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-328",
        conditionTitle: "Clinical Condition Radiology Case 28",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 28",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-329",
        conditionTitle: "Clinical Condition Radiology Case 29",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 29",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-330",
        conditionTitle: "Clinical Condition Radiology Case 30",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 30",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-331",
        conditionTitle: "Clinical Condition Radiology Case 31",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 31",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-332",
        conditionTitle: "Clinical Condition Radiology Case 32",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 32",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-333",
        conditionTitle: "Clinical Condition Radiology Case 33",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 33",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-334",
        conditionTitle: "Clinical Condition Radiology Case 34",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 34",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-335",
        conditionTitle: "Clinical Condition Radiology Case 35",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 35",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-336",
        conditionTitle: "Clinical Condition Radiology Case 36",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 36",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-337",
        conditionTitle: "Clinical Condition Radiology Case 37",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 37",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-338",
        conditionTitle: "Clinical Condition Radiology Case 38",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 38",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-339",
        conditionTitle: "Clinical Condition Radiology Case 39",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 39",
        followUpInterval: "4 weeks"
      },
      {
        icdCode: "RAD-340",
        conditionTitle: "Clinical Condition Radiology Case 40",
        symptoms: ["Symptom A for radiology", "Symptom B for radiology", "Symptom C for radiology"],
        firstLineTherapy: "Standard Radiology Therapeutic Regimen 40",
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

module.exports = new RadiologyService();
