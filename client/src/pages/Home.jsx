import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { doctorService } from '../services/api';
import DoctorCard from '../components/DoctorCard';
import {
  Search,
  Calendar,
  UserCheck,
  Heart,
  ShieldCheck,
  Activity,
  Award,
  ArrowRight,
  Smile,
  Zap,
  Stethoscope
} from 'lucide-react';

const Home = () => {
  const [featuredDoctors, setFeaturedDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedDoctors = async () => {
      try {
        const data = await doctorService.getDoctors();
        setFeaturedDoctors(data.slice(0, 3));
      } catch (error) {
        console.error('Failed to load featured doctors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedDoctors();
  }, []);

  const specializations = [
    { name: 'Cardiologist', icon: Heart, count: 'Heart Health Specialist' },
    { name: 'Dermatologist', icon: ShieldCheck, count: 'Skin & Cosmetic Care' },
    { name: 'General Physician', icon: Activity, count: 'Primary Healthcare' },
    { name: 'Pediatrician', icon: Smile, count: 'Child & Infant Care' },
    { name: 'Orthopedic', icon: Zap, count: 'Bone & Joint Surgery' },
    { name: 'Dentist', icon: Stethoscope, count: 'Dental & Oral Health' },
    { name: 'Neurologist', icon: Award, count: 'Nerve & Brain Specialist' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #e0f2fe 0%, #ffffff 100%)',
          padding: '4rem 0',
          borderBottom: '1px solid #e2e8f0'
        }}
      >
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#0284c7',
                color: '#fff',
                padding: '0.35rem 0.85rem',
                borderRadius: '50px',
                fontSize: '0.85rem',
                fontWeight: '600',
                marginBottom: '1.25rem'
              }}
            >
              <Heart size={16} /> Welcome to MediCare
            </div>
            <h1 style={{ fontSize: '2.75rem', color: '#0f172a', marginBottom: '1.25rem', lineHeight: 1.15 }}>
              Your Health, Our Priority – Book Appointments Easily
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '2rem', lineHeight: 1.6 }}>
              Connect with top-rated medical specialists, schedule hassle-free consultations, and manage your health journey with ease.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/doctors" className="btn btn-primary btn-lg">
                <Search size={20} /> Find a Doctor
              </Link>
              <Link to="/register" className="btn btn-outline btn-lg">
                Register as Patient
              </Link>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600"
              alt="Healthcare Professionals"
              style={{
                width: '100%',
                maxHeight: '380px',
                objectFit: 'cover',
                borderRadius: '20px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Specialization Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 className="section-title">Explore Specializations</h2>
          <p className="section-subtitle">Find experts across various medical disciplines</p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {specializations.map((spec, idx) => {
              const IconComp = spec.icon;
              return (
                <Link
                  key={idx}
                  to={`/doctors?specialization=${encodeURIComponent(spec.name)}`}
                  className="card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '2rem 1.25rem',
                    cursor: 'pointer'
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: '#e0f2fe',
                      color: '#0284c7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem'
                    }}
                  >
                    <IconComp size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.35rem' }}>{spec.name}</h3>
                  <span style={{ fontSize: '0.85rem', color: '#64748b' }}>{spec.count}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ backgroundColor: '#f8fafc', padding: '4rem 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <h2 className="section-title">How MediCare Works</h2>
          <p className="section-subtitle">4 simple steps to schedule your doctor appointment</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#0284c7', marginBottom: '0.5rem' }}>01</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Search Specialist</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Browse through verified doctors by specialization and qualifications.</p>
            </div>

            <div className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#0284c7', marginBottom: '0.5rem' }}>02</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>View Availability</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Check doctor profiles, consultation hours, and available working days.</p>
            </div>

            <div className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#0284c7', marginBottom: '0.5rem' }}>03</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Book Appointment</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Select your preferred date, time slot, and reason for consultation.</p>
            </div>

            <div className="card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#0284c7', marginBottom: '0.5rem' }}>04</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Get Care</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Receive instant confirmation and visit your doctor at the scheduled time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Doctors Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '0.35rem' }}>Featured Doctors</h2>
              <p style={{ color: '#64748b', fontSize: '1rem' }}>Top rated healthcare specialists available for booking</p>
            </div>
            <Link to="/doctors" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              View All Doctors <ArrowRight size={18} />
            </Link>
          </div>

          {loading ? (
            <p style={{ textAlign: 'center', padding: '2rem 0' }}>Loading doctors...</p>
          ) : (
            <div className="doctors-grid">
              {featuredDoctors.map((doc) => (
                <DoctorCard key={doc._id} doctor={doc} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
