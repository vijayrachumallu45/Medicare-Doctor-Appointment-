describe('Appointment Conflict & Date Validation Tests', () => {
  const isPastDate = (dateStr) => {
    const appointmentDate = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return isNaN(appointmentDate.getTime()) || appointmentDate < today;
  };

  const hasConflict = (existingAppointments, doctorId, date, time) => {
    return existingAppointments.some(
      app => app.doctorId === doctorId &&
             app.date === date &&
             app.time === time &&
             ['Pending', 'Confirmed'].includes(app.status)
    );
  };

  it('should detect past dates as invalid', () => {
    expect(isPastDate('2020-01-01')).toBe(true);
    expect(isPastDate('invalid-date')).toBe(true);
  });

  it('should allow future dates', () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 7);
    const dateStr = futureDate.toISOString().split('T')[0];
    expect(isPastDate(dateStr)).toBe(false);
  });

  it('should detect double-booking conflict for same doctor, date, and time', () => {
    const existing = [
      { doctorId: 'doc1', date: '2026-09-15', time: '10:00 AM', status: 'Confirmed' },
      { doctorId: 'doc1', date: '2026-09-15', time: '11:00 AM', status: 'Cancelled' }
    ];

    expect(hasConflict(existing, 'doc1', '2026-09-15', '10:00 AM')).toBe(true);
    expect(hasConflict(existing, 'doc1', '2026-09-15', '11:00 AM')).toBe(false);
    expect(hasConflict(existing, 'doc1', '2026-09-15', '02:00 PM')).toBe(false);
  });
});
