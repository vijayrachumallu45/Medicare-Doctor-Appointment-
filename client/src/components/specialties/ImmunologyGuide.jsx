import React, { useState } from 'react';
import { Stethoscope, CheckCircle2, AlertCircle, Info, Calendar } from 'lucide-react';

/**
 * MediCare Immunology Patient Guide & Information Component
 */
const ImmunologyGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const guideTopics = [
    {
      id: "TOPIC-101",
      title: "Immunology Healthcare Insight #1",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-102",
      title: "Immunology Healthcare Insight #2",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-103",
      title: "Immunology Healthcare Insight #3",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-104",
      title: "Immunology Healthcare Insight #4",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-105",
      title: "Immunology Healthcare Insight #5",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-106",
      title: "Immunology Healthcare Insight #6",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-107",
      title: "Immunology Healthcare Insight #7",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-108",
      title: "Immunology Healthcare Insight #8",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-109",
      title: "Immunology Healthcare Insight #9",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-110",
      title: "Immunology Healthcare Insight #10",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-111",
      title: "Immunology Healthcare Insight #11",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-112",
      title: "Immunology Healthcare Insight #12",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-113",
      title: "Immunology Healthcare Insight #13",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-114",
      title: "Immunology Healthcare Insight #14",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-115",
      title: "Immunology Healthcare Insight #15",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-116",
      title: "Immunology Healthcare Insight #16",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-117",
      title: "Immunology Healthcare Insight #17",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-118",
      title: "Immunology Healthcare Insight #18",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-119",
      title: "Immunology Healthcare Insight #19",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-120",
      title: "Immunology Healthcare Insight #20",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-121",
      title: "Immunology Healthcare Insight #21",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-122",
      title: "Immunology Healthcare Insight #22",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-123",
      title: "Immunology Healthcare Insight #23",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-124",
      title: "Immunology Healthcare Insight #24",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-125",
      title: "Immunology Healthcare Insight #25",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-126",
      title: "Immunology Healthcare Insight #26",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-127",
      title: "Immunology Healthcare Insight #27",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-128",
      title: "Immunology Healthcare Insight #28",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-129",
      title: "Immunology Healthcare Insight #29",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-130",
      title: "Immunology Healthcare Insight #30",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-131",
      title: "Immunology Healthcare Insight #31",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-132",
      title: "Immunology Healthcare Insight #32",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-133",
      title: "Immunology Healthcare Insight #33",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-134",
      title: "Immunology Healthcare Insight #34",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-135",
      title: "Immunology Healthcare Insight #35",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
    {
      id: "TOPIC-136",
      title: "Immunology Healthcare Insight #36",
      summary: "Important medical information regarding immunology wellness and preventive consultation.",
      details: "Patients consulting a immunology specialist are encouraged to maintain a record of daily health parameters and bring previous clinical reports.",
      recommendation: "Consult your certified immunology specialist for personalized medical evaluation."
    },
  ];

  return (
    <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <Stethoscope size={24} color="#0284c7" />
        <h3 style={{ fontSize: '1.25rem' }}>Immunology Patient Educational Guide</h3>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
        <button
          className={`btn ${activeTab === 'overview' ? 'btn-primary' : 'btn-outline'} btn-sm`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`btn ${activeTab === 'guidelines' ? 'btn-primary' : 'btn-outline'} btn-sm`}
          onClick={() => setActiveTab('guidelines')}
        >
          Clinical Guidelines
        </button>
      </div>

      {activeTab === 'overview' && (
        <div>
          <p style={{ color: '#475569', marginBottom: '1rem', lineHeight: '1.6' }}>
            Comprehensive patient education material for immunology consultations. Review common symptoms, preparation tips, and specialist appointment expectations.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {guideTopics.slice(0, 6).map(topic => (
              <div key={topic.id} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem', backgroundColor: '#f8fafc' }}>
                <h4 style={{ fontSize: '1rem', color: '#0f172a', marginBottom: '0.35rem' }}>{topic.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.5rem' }}>{topic.summary}</p>
                <div style={{ fontSize: '0.8rem', color: '#0284c7', fontWeight: '600' }}>✓ Verified Clinical Information</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'guidelines' && (
        <div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {guideTopics.slice(6, 12).map(topic => (
              <li key={topic.id} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="#16a34a" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <div>
                  <strong style={{ fontSize: '0.95rem' }}>{topic.title}</strong>
                  <p style={{ fontSize: '0.85rem', color: '#475569', marginTop: '0.15rem' }}>{topic.details}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImmunologyGuide;
