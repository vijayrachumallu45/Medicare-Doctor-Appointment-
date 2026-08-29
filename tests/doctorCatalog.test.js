describe('Doctor Catalog Extended Tests', () => {
  const doctors = [
    { name: 'Dr. Alice', specialization: 'Cardiologist', rating: 4.9, consultationFee: 150 },
    { name: 'Dr. Bob', specialization: 'Dermatologist', rating: 4.5, consultationFee: 80 },
    { name: 'Dr. Charlie', specialization: 'Cardiologist', rating: 4.7, consultationFee: 120 }
  ];

  it('should filter doctors by minimum rating', () => {
    const minRating = 4.7;
    const filtered = doctors.filter(d => d.rating >= minRating);
    expect(filtered.length).toBe(2);
    expect(filtered.map(d => d.name)).toEqual(['Dr. Alice', 'Dr. Charlie']);
  });

  it('should filter doctors by maximum consultation fee', () => {
    const maxFee = 100;
    const filtered = doctors.filter(d => d.consultationFee <= maxFee);
    expect(filtered.length).toBe(1);
    expect(filtered[0].name).toBe('Dr. Bob');
  });

  it('should sort doctors by rating descending', () => {
    const sorted = [...doctors].sort((a, b) => b.rating - a.rating);
    expect(sorted[0].name).toBe('Dr. Alice');
    expect(sorted[2].name).toBe('Dr. Bob');
  });

  it('should sort doctors by consultation fee ascending', () => {
    const sorted = [...doctors].sort((a, b) => a.consultationFee - b.consultationFee);
    expect(sorted[0].name).toBe('Dr. Bob');
    expect(sorted[2].name).toBe('Dr. Alice');
  });
});
