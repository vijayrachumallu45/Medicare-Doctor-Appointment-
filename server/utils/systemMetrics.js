/**
 * System Metrics Utility
 * Retrieves process memory, uptime, and system diagnostics telemetry.
 */

const mongoose = require('mongoose');

const getSystemMetrics = () => {
  const memoryUsage = process.memoryUsage();

  return {
    uptimeSeconds: Math.floor(process.uptime()),
    memory: {
      rssMB: (memoryUsage.rss / 1024 / 1024).toFixed(2),
      heapTotalMB: (memoryUsage.heapTotal / 1024 / 1024).toFixed(2),
      heapUsedMB: (memoryUsage.heapUsed / 1024 / 1024).toFixed(2)
    },
    databaseStatus: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    nodeVersion: process.version,
    platform: process.platform,
    environment: process.env.NODE_ENV || 'development'
  };
};

module.exports = {
  getSystemMetrics
};
