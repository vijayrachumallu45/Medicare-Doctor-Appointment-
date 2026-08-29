import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { doctorService } from '../services/api';
import DoctorCard from '../components/DoctorCard';
import { Search, Filter, Stethoscope } from 'lucide-react';

const Doctors = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const selectedSpecialization = searchParams.get('specialization') || 'All';

  const specializations = [
    'All',
    'Cardiologist',
    'Dermatologist',
    'General Physician',
    'Pediatrician',
    'Orthopedic',
    'Dentist',
    'Neurologist'
  ];

  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await doctorService.getDoctors({
          specialization: selectedSpecialization,
          search: searchTerm
        });
        setDoctors(data);
      } catch (err) {
        setError(err.message || 'Failed to load doctors list');
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [selectedSpecialization, searchTerm]);

  const handleSpecializationChange = (spec) => {
    if (spec === 'All') {
      searchParams.delete('specialization');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ specialization: spec });
    }
  };

  return (
    <div style={{ padding: '3rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1 className="section-title">Find Your Specialist</h1>
          <p className="section-subtitle">Browse through certified medical doctors and book an appointment</p>
        </div>

        {/* Filter & Search Bar */}
        <div className="card" style={{ marginBottom: '2rem', padding: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '260px', position: 'relative' }}>
                <Search
                  size={18}
                  style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}
                />
                <input
                  type="text"
                  className="form-control"
                  style={{ paddingLeft: '2.75rem' }}
                  placeholder="Search doctor by name, qualification, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div style={{ width: '220px' }}>
                <select
                  className="form-control"
                  value={selectedSpecialization}
                  onChange={(e) => handleSpecializationChange(e.target.value)}
                >
                  {specializations.map((spec, idx) => (
                    <option key={idx} value={spec}>
                      {spec === 'All' ? 'All Specializations' : spec}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Pill Filters */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#64748b', marginRight: '0.5rem' }}>
                Quick Filter:
              </span>
              {specializations.map((spec, idx) => {
                const isSelected = selectedSpecialization === spec;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSpecializationChange(spec)}
                    style={{
                      padding: '0.35rem 0.85rem',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      borderRadius: '50px',
                      border: '1px solid',
                      borderColor: isSelected ? '#0284c7' : '#cbd5e1',
                      backgroundColor: isSelected ? '#0284c7' : '#ffffff',
                      color: isSelected ? '#ffffff' : '#334155',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {spec}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Info */}
        {error && <div className="alert alert-danger">{error}</div>}

        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <p>Loading doctors list...</p>
          </div>
        ) : doctors.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
            <Stethoscope size={48} color="#94a3b8" style={{ marginBottom: '1rem' }} />
            <h3>No Doctors Found</h3>
            <p style={{ color: '#64748b', margin: '0.5rem 0 1.5rem' }}>
              We could not find any doctors matching "{selectedSpecialization !== 'All' ? selectedSpecialization : ''}{' '}
              {searchTerm}".
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                handleSpecializationChange('All');
              }}
              className="btn btn-outline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="doctors-grid">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;
