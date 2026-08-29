const { validatePasswordStrength } = require('../server/utils/passwordStrength');
const { validateRegister, validateLogin } = require('../server/middleware/authValidator');

describe('Auth Validator & Password Strength Tests', () => {
  describe('Password Strength Utility', () => {
    it('should reject short passwords', () => {
      const res = validatePasswordStrength('123');
      expect(res.isValid).toBe(false);
      expect(res.message).toContain('at least 6 characters');
    });

    it('should calculate strength score for complex passwords', () => {
      const weak = validatePasswordStrength('simple');
      const strong = validatePasswordStrength('P@ssword123!');
      expect(weak.isValid).toBe(true);
      expect(strong.score).toBeGreaterThan(weak.score);
    });
  });

  describe('Validation Middleware', () => {
    let req, res, next;

    beforeEach(() => {
      req = { body: {} };
      res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      next = jest.fn();
    });

    it('should reject registration if email is invalid', () => {
      req.body = { name: 'John', email: 'invalid-email', password: 'password123' };
      validateRegister(req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ message: expect.stringContaining('valid email') }));
      expect(next).not.toHaveBeenCalled();
    });

    it('should call next if registration data is valid', () => {
      req.body = { name: 'John', email: 'john@example.com', password: 'password123' };
      validateRegister(req, res, next);
      expect(next).toHaveBeenCalled();
    });

    it('should reject login if password is missing', () => {
      req.body = { email: 'user@example.com' };
      validateLogin(req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(next).not.toHaveBeenCalled();
    });
  });
});
