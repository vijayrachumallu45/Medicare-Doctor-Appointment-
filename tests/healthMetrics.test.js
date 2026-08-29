const { getSystemMetrics } = require('../server/utils/systemMetrics');

describe('System Health & Telemetry Metrics Tests', () => {
  it('should return valid system metrics structure', () => {
    const metrics = getSystemMetrics();
    expect(metrics).toHaveProperty('uptimeSeconds');
    expect(metrics).toHaveProperty('memory');
    expect(metrics.memory).toHaveProperty('rssMB');
    expect(metrics.memory).toHaveProperty('heapTotalMB');
    expect(metrics.memory).toHaveProperty('heapUsedMB');
    expect(metrics).toHaveProperty('databaseStatus');
    expect(metrics).toHaveProperty('nodeVersion');
    expect(metrics).toHaveProperty('platform');
  });

  it('should format memory statistics as numbers in MB format', () => {
    const metrics = getSystemMetrics();
    expect(parseFloat(metrics.memory.rssMB)).toBeGreaterThan(0);
    expect(parseFloat(metrics.memory.heapUsedMB)).toBeGreaterThan(0);
  });
});
