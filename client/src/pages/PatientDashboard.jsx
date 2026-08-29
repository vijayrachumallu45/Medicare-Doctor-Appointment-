import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { appointmentService } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { Calendar, Clock, CheckCircle2, XCircle, AlertCircle, Plus, User, Stethoscope } from 'lucide-react';

const PatientDashboard = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionSuccess, setActionSuccess] = useState('');

  const fetchAppointments = async () => {
    try {
      const data = await appointmentService.getAppointments();
      setAppointments(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch appointments');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleCancel = async (id) => {
    if (!window.confirm('Are you sure you want to cancel this appointment?')) {
      return;
    }

    try {
      await appointmentService.updateStatus(id, 'Cancelled');
      setActionSuccess('Appointment cancelled successfully.');
      fetchAppointments();
      setTimeout(() => setActionSuccess(''), 3000);
    } catch (err) {
      setError(err.message || 'Failed to cancel appointment');
    }
  };

  // Metrics
  const upcomingCount = appointments.filter(
    (a) => a.status === 'Pending' || a.status === 'Confirmed'
  ).length;
  const completedCount = appointments.filter((a) => a.status === 'Completed').length;
  const cancelledCount = appointments.filter(
    (a) => a.status === 'Cancelled' || a.status === 'Rejected'
  ).length;

  return (
    <div style={{ padding: '3rem 0' }}>
      <div className="container">
        {/* Welcome Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>Welcome back, {user?.name}!</h1>
            <p style={{ color: '#64748b' }}>Manage your booked appointments and view health schedule</p>
          </div>

          <Link to="/doctors" className="btn btn-primary btn-lg">
            <Plus size={20} /> Book New Appointment
          </Link>
        </div>

        {/* Summary Metric Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: '#e0f2fe', color: '#0284c7' }}>
              <Calendar size={24} />
            </div>
            <div>
              <div className="stat-value">{upcomingCount}</div>
              <div className="stat-label">Upcoming Appointments</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: '#dcfce7', color: '#16a34a' }}>
              <CheckCircle2 size={24} />
            </div>
            <div>
              <div className="stat-value">{completedCount}</div>
              <div className="stat-label">Completed Consultations</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: '#fee2e2', color: '#dc2626' }}>
              <XCircle size={24} />
            </div>
            <div>
              <div className="stat-value">{cancelledCount}</div>
              <div className="stat-label">Cancelled / Rejected</div>
            </div>
          </div>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}
        {actionSuccess && <div className="alert alert-success">{actionSuccess}</div>}

        {/* Appointments Section */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>My Appointments</h2>
        </div>

        {loading ? (
          <p style={{ textAlign: 'center', padding: '2rem 0' }}>Loading your appointments...</p>
        ) : appointments.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
            <Calendar size={48} color="#94a3b8" style={{ marginBottom: '1rem' }} />
            <h3>No Appointments Found</h3>
            <p style={{ color: '#64748b', margin: '0.5rem 0 1.5rem' }}>
              You have not booked any medical appointments yet.
            </p>
            <Link to="/doctors" className="btn btn-primary">
              Find a Doctor & Book Now
            </Link>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Doctor</th>
                  <th>Specialization</th>
                  <th>Date & Time</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((apt) => {
                  const doc = apt.doctorId || {};
                  return (
                    <tr key={apt._id}>
                      <td>
                        <div style={{ fontWeight: '700', color: '#0f172a' }}>{doc.name || 'Doctor'}</div>
                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{doc.qualification}</div>
                      </td>
                      <td>
                        <span
                          style={{
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            color: '#0284c7'
                          }}
                        >
                          {doc.specialization}
                        </span>
                      </td>
                      <td>
                        <div style={{ fontWeight: '600' }}>{apt.date}</div>
                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{apt.time}</div>
                      </td>
                      <td style={{ maxWidth: '220px', fontSize: '0.85rem' }}>{apt.reason}</td>
                      <td>
                        <span className={`badge badge-${apt.status.toLowerCase()}`}>{apt.status}</span>
                      </td>
                      <td>
                        {(apt.status === 'Pending' || apt.status === 'Confirmed') && (
                          <button
                            onClick={() => handleCancel(apt._id)}
                            className="btn btn-danger btn-sm"
                          >
                            Cancel
                          </button>
                        )}
                        {apt.status === 'Completed' && (
                          <span style={{ fontSize: '0.85rem', color: '#16a34a', fontWeight: '600' }}>
                            ✓ Finished
                          </span>
                        )}
                        {(apt.status === 'Cancelled' || apt.status === 'Rejected') && (
                          <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Closed</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientDashboard;
