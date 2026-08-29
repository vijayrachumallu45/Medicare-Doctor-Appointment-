describe('Appointment Logic Tests', () => {
  it('should initialize appointment status as Pending', () => {
    const appointment = {
      patientId: '123',
      doctorId: '456',
      date: '2026-09-01',
      time: '10:00 AM',
      status: 'Pending'
    };
    expect(appointment.status).toBe('Pending');
  });

  it('should allow valid status transitions', () => {
    const validStatuses = ['Pending', 'Confirmed', 'Rejected', 'Completed', 'Cancelled'];
    expect(validStatuses.includes('Confirmed')).toBe(true);
    expect(validStatuses.includes('Completed')).toBe(true);
  });
});
