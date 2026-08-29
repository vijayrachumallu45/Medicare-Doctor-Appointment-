import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { doctorService } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { Award, Clock, Calendar, CheckCircle2, ArrowLeft, Stethoscope, Mail } from 'lucide-react';

const DoctorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const data = await doctorService.getDoctorById(id);
        setDoctor(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch doctor details');
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  const handleBookClick = () => {
    if (!isAuthenticated) {
      navigate(`/login?redirect=/book-appointment?doctorId=${id}`);
    } else {
      navigate(`/book-appointment?doctorId=${id}`);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 0' }}>
        <p>Loading doctor profile...</p>
      </div>
    );
  }

  if (error || !doctor) {
    return (
      <div className="container" style={{ padding: '3rem 0', textAlign: 'center' }}>
        <div className="card">
          <h2 style={{ color: '#dc2626', marginBottom: '1rem' }}>Doctor Profile Not Found</h2>
          <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>{error || 'The requested doctor could not be located.'}</p>
          <Link to="/doctors" className="btn btn-primary">
            <ArrowLeft size={18} /> Back to Doctors
          </Link>
        </div>
      </div>
    );
  }

  const fallbackImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&background=0284c7&color=fff&size=400`;

  return (
    <div style={{ padding: '3rem 0' }}>
      <div className="container">
        <Link to="/doctors" className="btn btn-outline btn-sm" style={{ marginBottom: '1.5rem' }}>
          <ArrowLeft size={16} /> Back to Doctors List
        </Link>

        <div className="card" style={{ padding: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '2.5rem', alignItems: 'start' }}>
            <div>
              <img
                src={doctor.image || fallbackImage}
                alt={doctor.name}
                style={{
                  width: '100%',
                  height: '320px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  backgroundColor: '#f1f5f9'
                }}
                onError={(e) => {
                  e.target.src = fallbackImage;
                }}
              />

              <div style={{ marginTop: '1.5rem' }}>
                <button onClick={handleBookClick} className="btn btn-primary btn-block btn-lg">
                  <Calendar size={20} /> Book Appointment
                </button>
              </div>
            </div>

            <div>
              <span
                style={{
                  display: 'inline-block',
                  backgroundColor: '#e0f2fe',
                  color: '#0284c7',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '50px',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase'
                }}
              >
                {doctor.specialization}
              </span>

              <h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>{doctor.name}</h1>
              <p style={{ fontSize: '1.1rem', color: '#475569', fontWeight: '600', marginBottom: '1.5rem' }}>
                {doctor.qualification}
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                  padding: '1.25rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '12px',
                  marginBottom: '2rem',
                  border: '1px solid #e2e8f0'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Award size={16} color="#0284c7" /> Total Experience
                  </div>
                  <div style={{ fontWeight: '700', fontSize: '1.1rem', marginTop: '0.25rem' }}>{doctor.experience}</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Calendar size={16} color="#0d9488" /> Consultation Days
                  </div>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem', marginTop: '0.25rem' }}>
                    {doctor.availableDays ? doctor.availableDays.join(', ') : 'Mon - Fri'}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Clock size={16} color="#d97706" /> Available Hours
                  </div>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem', marginTop: '0.25rem' }}>
                    {doctor.availableTime || '09:00 AM - 05:00 PM'}
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>About Doctor</h3>
                <p style={{ color: '#334155', lineHeight: 1.7, fontSize: '1rem' }}>{doctor.about}</p>
              </div>

              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#475569' }}>Services & Special Highlights</h4>
                <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.95rem', color: '#334155' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="#16a34a" /> Comprehensive Medical Consultation
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="#16a34a" /> Prescription & Health Advice
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="#16a34a" /> Digital Follow-up Appointments
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="#16a34a" /> Personalized Care Plan
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
