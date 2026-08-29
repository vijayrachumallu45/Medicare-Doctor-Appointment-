/**
 * Password Strength Utility
 * Validates password criteria and calculates strength score.
 */

const validatePasswordStrength = (password) => {
  if (!password || typeof password !== 'string') {
    return { isValid: false, score: 0, message: 'Password is required' };
  }

  if (password.length < 6) {
    return { isValid: false, score: 1, message: 'Password must be at least 6 characters long' };
  }

  let score = 1;
  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  return {
    isValid: true,
    score,
    message: score >= 3 ? 'Strong password' : 'Moderate password'
  };
};

module.exports = {
  validatePasswordStrength
};
