import React, { useEffect, useState } from 'react';
import { appointmentService } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { Calendar, Clock, Filter, CheckCircle2, XCircle, FileText } from 'lucide-react';

const Appointments = () => {
  const { user, isPatient, isDoctor } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filterTab, setFilterTab] = useState('All'); // 'All', 'Upcoming', 'History'

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await appointmentService.getAppointments();
        setAppointments(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch appointment history');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const filteredAppointments = appointments.filter((apt) => {
    if (filterTab === 'Upcoming') {
      return apt.status === 'Pending' || apt.status === 'Confirmed';
    }
    if (filterTab === 'History') {
      return apt.status === 'Completed' || apt.status === 'Cancelled' || apt.status === 'Rejected';
    }
    return true;
  });

  return (
    <div style={{ padding: '3rem 0' }}>
      <div className="container">
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>
            {isDoctor ? 'Doctor Appointment Schedule' : 'Appointment History'}
          </h1>
          <p style={{ color: '#64748b' }}>
            View upcoming consultations and past medical appointment history
          </p>
        </div>

        {/* Tab Filters */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {['All', 'Upcoming', 'History'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilterTab(tab)}
              className={`btn ${filterTab === tab ? 'btn-primary' : 'btn-outline'} btn-sm`}
            >
              {tab} Appointments
            </button>
          ))}
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        {loading ? (
          <p style={{ textAlign: 'center', padding: '2rem 0' }}>Loading appointment history...</p>
        ) : filteredAppointments.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
            <Calendar size={48} color="#94a3b8" style={{ marginBottom: '1rem' }} />
            <h3>No {filterTab !== 'All' ? filterTab : ''} Appointments Found</h3>
            <p style={{ color: '#64748b' }}>There are no records matching your selected filter.</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>{isDoctor ? 'Patient' : 'Doctor'}</th>
                  <th>Specialization</th>
                  <th>Date & Time</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments.map((apt) => {
                  const targetName = isDoctor ? apt.patientId?.name : apt.doctorId?.name;
                  const spec = isDoctor ? 'Patient Appointment' : apt.doctorId?.specialization;

                  return (
                    <tr key={apt._id}>
                      <td style={{ fontWeight: '700', color: '#0f172a' }}>{targetName || 'User'}</td>
                      <td style={{ color: '#0284c7', fontWeight: '600', fontSize: '0.85rem' }}>{spec}</td>
                      <td>
                        <div style={{ fontWeight: '600' }}>{apt.date}</div>
                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{apt.time}</div>
                      </td>
                      <td style={{ maxWidth: '240px', fontSize: '0.85rem' }}>{apt.reason}</td>
                      <td>
                        <span className={`badge badge-${apt.status.toLowerCase()}`}>{apt.status}</span>
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

export default Appointments;
