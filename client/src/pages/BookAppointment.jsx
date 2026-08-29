import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { doctorService, appointmentService } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { Calendar, Clock, FileText, UserCheck, ArrowLeft, CheckCircle2 } from 'lucide-react';

const BookAppointment = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const initialDoctorId = searchParams.get('doctorId') || '';

  const [doctors, setDoctors] = useState([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState(initialDoctorId);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:00 AM');
  const [reason, setReason] = useState('');

  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const availableTimeSlots = [
    '09:00 AM',
    '09:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '02:00 PM',
    '02:30 PM',
    '03:00 PM',
    '03:30 PM',
    '04:00 PM',
    '04:30 PM'
  ];

  // Set default minimum date to today (YYYY-MM-DD)
  const todayStr = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const loadDoctors = async () => {
      try {
        const data = await doctorService.getDoctors();
        setDoctors(data);
        if (!selectedDoctorId && data.length > 0) {
          setSelectedDoctorId(data[0]._id);
        }
      } catch (err) {
        setError('Failed to load doctors list for booking.');
      } finally {
        setPageLoading(false);
      }
    };

    loadDoctors();
  }, [selectedDoctorId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    if (!selectedDoctorId) {
      setError('Please select a doctor.');
      return;
    }
    if (!date) {
      setError('Please select an appointment date.');
      return;
    }
    if (!time) {
      setError('Please select an appointment time slot.');
      return;
    }
    if (!reason.trim()) {
      setError('Please enter a brief reason for your appointment.');
      return;
    }

    setLoading(true);
    try {
      await appointmentService.createAppointment({
        doctorId: selectedDoctorId,
        date,
        time,
        reason: reason.trim()
      });

      setSuccessMsg('Appointment booked successfully.');
      setTimeout(() => {
        navigate('/my-appointments');
      }, 1500);
    } catch (err) {
      setError(err.message || 'Failed to book appointment.');
    } finally {
      setLoading(false);
    }
  };

  const selectedDoctorObj = doctors.find((d) => d._id === selectedDoctorId);

  if (pageLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 0' }}>
        <p>Loading booking form...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '3rem 0' }}>
      <div className="container" style={{ maxWidth: '750px' }}>
        <button onClick={() => navigate(-1)} className="btn btn-outline btn-sm" style={{ marginBottom: '1.5rem' }}>
          <ArrowLeft size={16} /> Back
        </button>

        <div className="card" style={{ padding: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '1.8rem', marginBottom: '0.35rem' }}>Book a Doctor Appointment</h1>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
              Fill in the details below to schedule your consultation with a certified doctor
            </p>
          </div>

          {error && <div className="alert alert-danger">{error}</div>}
          {successMsg && (
            <div className="alert alert-success" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={18} /> {successMsg}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Patient Name Notice */}
            <div className="form-group">
              <label>Patient Name</label>
              <input
                type="text"
                className="form-control"
                value={user?.name || ''}
                disabled
                style={{ backgroundColor: '#f1f5f9', cursor: 'not-allowed' }}
              />
            </div>

            {/* Doctor Selection */}
            <div className="form-group">
              <label>Select Doctor</label>
              <select
                className="form-control"
                value={selectedDoctorId}
                onChange={(e) => setSelectedDoctorId(e.target.value)}
                required
              >
                {doctors.map((doc) => (
                  <option key={doc._id} value={doc._id}>
                    {doc.name} — {doc.specialization} ({doc.qualification})
                  </option>
                ))}
              </select>
            </div>

            {/* Display Selected Doctor Brief Info */}
            {selectedDoctorObj && (
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '1rem',
                  marginBottom: '1.25rem',
                  fontSize: '0.85rem'
                }}
              >
                <strong>Doctor Details:</strong> {selectedDoctorObj.name} ({selectedDoctorObj.specialization}) |{' '}
                <span>Days: {selectedDoctorObj.availableDays?.join(', ') || 'Mon - Fri'}</span> |{' '}
                <span>Hours: {selectedDoctorObj.availableTime}</span>
              </div>
            )}

            {/* Date Selection */}
            <div className="form-group">
              <label>Appointment Date</label>
              <input
                type="date"
                className="form-control"
                min={todayStr}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            {/* Time Slot Selection */}
            <div className="form-group">
              <label>Select Preferred Time Slot</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '0.5rem' }}>
                {availableTimeSlots.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setTime(slot)}
                    style={{
                      padding: '0.5rem',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      borderRadius: '8px',
                      border: '1px solid',
                      borderColor: time === slot ? '#0284c7' : '#cbd5e1',
                      backgroundColor: time === slot ? '#0284c7' : '#ffffff',
                      color: time === slot ? '#ffffff' : '#334155',
                      cursor: 'pointer'
                    }}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Reason for Appointment */}
            <div className="form-group">
              <label>Reason for Visit / Short Description</label>
              <textarea
                className="form-control"
                rows={3}
                placeholder="e.g. Regular health checkup, mild headache, skin consultation..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={loading}>
              {loading ? 'Booking Appointment...' : 'Confirm & Book Appointment'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
