import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { doctorService } from '../services/api';
import { User, Mail, Shield, Award, Clock, Calendar, Save, CheckCircle2 } from 'lucide-react';

const Profile = () => {
  const { user, isDoctor } = useAuth();

  const [qualification, setQualification] = useState('');
  const [experience, setExperience] = useState('');
  const [about, setAbout] = useState('');
  const [availableTime, setAvailableTime] = useState('');

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isDoctor) {
      doctorService.getDoctorProfile()
        .then((data) => {
          const doc = data.doctor;
          setQualification(doc.qualification || '');
          setExperience(doc.experience || '');
          setAbout(doc.about || '');
          setAvailableTime(doc.availableTime || '');
        })
        .catch((err) => {
          setError(err.message || 'Failed to load doctor profile');
        });
    }
  }, [isDoctor]);

  const handleDoctorUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMsg('');

    try {
      await doctorService.updateDoctorProfile({
        qualification,
        experience,
        about,
        availableTime
      });
      setSuccessMsg('Profile updated successfully!');
      setTimeout(() => setSuccessMsg(''), 3000);
    } catch (err) {
      setError(err.message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '3rem 0' }}>
      <div className="container" style={{ maxWidth: '700px' }}>
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #e2e8f0' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User size={30} />
            </div>
            <div>
              <h1 style={{ fontSize: '1.6rem' }}>{user?.name}</h1>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{user?.email} • <span style={{ textTransform: 'capitalize', fontWeight: '700' }}>{user?.role} Account</span></p>
            </div>
          </div>

          {error && <div className="alert alert-danger">{error}</div>}
          {successMsg && <div className="alert alert-success">{successMsg}</div>}

          {/* Patient Profile view */}
          {!isDoctor && (
            <div>
              <h3 style={{ marginBottom: '1rem' }}>Account Details</h3>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" className="form-control" value={user?.name || ''} disabled style={{ backgroundColor: '#f1f5f9' }} />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" className="form-control" value={user?.email || ''} disabled style={{ backgroundColor: '#f1f5f9' }} />
              </div>
              <div className="form-group">
                <label>Account Role</label>
                <input type="text" className="form-control" value={user?.role?.toUpperCase() || ''} disabled style={{ backgroundColor: '#f1f5f9' }} />
              </div>
            </div>
          )}

          {/* Doctor Profile edit view */}
          {isDoctor && (
            <form onSubmit={handleDoctorUpdate}>
              <h3 style={{ marginBottom: '1rem' }}>Manage Doctor Profile</h3>

              <div className="form-group">
                <label>Qualifications</label>
                <input
                  type="text"
                  className="form-control"
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  placeholder="e.g. MBBS, MD - Cardiology"
                  required
                />
              </div>

              <div className="form-group">
                <label>Years of Experience</label>
                <input
                  type="text"
                  className="form-control"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  placeholder="e.g. 10 years"
                  required
                />
              </div>

              <div className="form-group">
                <label>Available Consultation Hours</label>
                <input
                  type="text"
                  className="form-control"
                  value={availableTime}
                  onChange={(e) => setAvailableTime(e.target.value)}
                  placeholder="e.g. 09:00 AM - 05:00 PM"
                  required
                />
              </div>

              <div className="form-group">
                <label>About Doctor / Biography</label>
                <textarea
                  className="form-control"
                  rows={4}
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  placeholder="Write a brief professional description..."
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={loading}>
                <Save size={18} /> {loading ? 'Saving Changes...' : 'Save Profile Changes'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
