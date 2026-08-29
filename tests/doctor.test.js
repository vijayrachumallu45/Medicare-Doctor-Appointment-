describe('Doctor Catalog Tests', () => {
  it('should filter doctors by specialization correctly', () => {
    const doctors = [
      { name: 'Dr. Arun', specialization: 'Cardiologist' },
      { name: 'Dr. Priya', specialization: 'Dermatologist' }
    ];
    const filtered = doctors.filter(d => d.specialization === 'Cardiologist');
    expect(filtered.length).toBe(1);
    expect(filtered[0].name).toBe('Dr. Arun');
  });
});
