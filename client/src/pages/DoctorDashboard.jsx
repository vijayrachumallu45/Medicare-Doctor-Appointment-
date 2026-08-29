import React, { useEffect, useState } from 'react';
import { appointmentService, doctorService } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { Calendar, CheckCircle2, XCircle, Clock, User, AlertCircle, RefreshCw } from 'lucide-react';

const DoctorDashboard = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [doctorStats, setDoctorStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const loadDashboardData = async () => {
    setLoading(true);
    setError('');
    try {
      const [aptsData, profileData] = await Promise.all([
        appointmentService.getAppointments(),
        doctorService.getDoctorProfile()
      ]);
      setAppointments(aptsData);
      setDoctorStats(profileData.stats);
    } catch (err) {
      setError(err.message || 'Failed to load doctor dashboard');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  const handleStatusUpdate = async (id, newStatus) => {
    setUpdatingId(id);
    setError('');
    setSuccessMsg('');

    try {
      await appointmentService.updateStatus(id, newStatus);
      setSuccessMsg(`Appointment marked as ${newStatus}`);
      await loadDashboardData();
      setTimeout(() => setSuccessMsg(''), 3000);
    } catch (err) {
      setError(err.message || `Failed to update status to ${newStatus}`);
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div style={{ padding: '3rem 0' }}>
      <div className="container">
        {/* Doctor Welcome Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'inline-block', backgroundColor: '#e0f2fe', color: '#0284c7', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.5rem' }}>
              DOCTOR PORTAL
            </div>
            <h1 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>Welcome, {user?.name}!</h1>
            <p style={{ color: '#64748b' }}>Manage patient appointments and consultation updates</p>
          </div>

          <button onClick={loadDashboardData} className="btn btn-outline btn-sm">
            <RefreshCw size={16} /> Refresh Schedule
          </button>
        </div>

        {/* Doctor Stats Metric Cards */}
        {doctorStats && (
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: '#e0f2fe', color: '#0284c7' }}>
                <Calendar size={24} />
              </div>
              <div>
                <div className="stat-value">{doctorStats.totalAppointments}</div>
                <div className="stat-label">Total Appointments</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: '#fef3c7', color: '#d97706' }}>
                <Clock size={24} />
              </div>
              <div>
                <div className="stat-value">{doctorStats.pendingAppointments}</div>
                <div className="stat-label">Pending Requests</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: '#e0f2fe', color: '#0284c7' }}>
                <CheckCircle2 size={24} />
              </div>
              <div>
                <div className="stat-value">{doctorStats.confirmedAppointments}</div>
                <div className="stat-label">Confirmed Upcoming</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: '#dcfce7', color: '#16a34a' }}>
                <CheckCircle2 size={24} />
              </div>
              <div>
                <div className="stat-value">{doctorStats.completedAppointments}</div>
                <div className="stat-label">Completed Consultations</div>
              </div>
            </div>
          </div>
        )}

        {error && <div className="alert alert-danger">{error}</div>}
        {successMsg && <div className="alert alert-success">{successMsg}</div>}

        {/* Appointments Management Table */}
        <h2 style={{ marginBottom: '1.25rem' }}>Patient Appointment Requests</h2>

        {loading ? (
          <p style={{ textAlign: 'center', padding: '2rem 0' }}>Loading appointment schedule...</p>
        ) : appointments.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
            <Calendar size={48} color="#94a3b8" style={{ marginBottom: '1rem' }} />
            <h3>No Appointments Found</h3>
            <p style={{ color: '#64748b' }}>No patient booking requests have been recorded for your account yet.</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Patient Name</th>
                  <th>Contact Email</th>
                  <th>Date & Time</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Manage Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((apt) => {
                  const patient = apt.patientId || {};
                  const isUpdating = updatingId === apt._id;

                  return (
                    <tr key={apt._id}>
                      <td style={{ fontWeight: '700', color: '#0f172a' }}>
                        {patient.name || 'Patient'}
                      </td>
                      <td style={{ color: '#64748b', fontSize: '0.85rem' }}>
                        {patient.email || 'N/A'}
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
                        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                          {apt.status === 'Pending' && (
                            <>
                              <button
                                onClick={() => handleStatusUpdate(apt._id, 'Confirmed')}
                                disabled={isUpdating}
                                className="btn btn-primary btn-sm"
                              >
                                Accept / Confirm
                              </button>
                              <button
                                onClick={() => handleStatusUpdate(apt._id, 'Rejected')}
                                disabled={isUpdating}
                                className="btn btn-danger btn-sm"
                              >
                                Reject
                              </button>
                            </>
                          )}

                          {apt.status === 'Confirmed' && (
                            <>
                              <button
                                onClick={() => handleStatusUpdate(apt._id, 'Completed')}
                                disabled={isUpdating}
                                className="btn btn-secondary btn-sm"
                              >
                                Mark Completed
                              </button>
                              <button
                                onClick={() => handleStatusUpdate(apt._id, 'Cancelled')}
                                disabled={isUpdating}
                                className="btn btn-outline btn-sm"
                              >
                                Cancel
                              </button>
                            </>
                          )}

                          {apt.status === 'Completed' && (
                            <span style={{ fontSize: '0.85rem', color: '#16a34a', fontWeight: '600' }}>
                              ✓ Completed
                            </span>
                          )}

                          {(apt.status === 'Rejected' || apt.status === 'Cancelled') && (
                            <span style={{ fontSize: '0.85rem', color: '#dc2626' }}>
                              Closed
                            </span>
                          )}
                        </div>
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

export default DoctorDashboard;
