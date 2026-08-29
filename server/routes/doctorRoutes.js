const express = require('express');
const router = express.Router();
const {
  getDoctors,
  getDoctorById,
  getDoctorProfile,
  updateDoctorProfile
} = require('../controllers/doctorController');
const { protect, isDoctor } = require('../middleware/authMiddleware');

router.get('/', getDoctors);
router.get('/profile/me', protect, isDoctor, getDoctorProfile);
router.put('/profile/me', protect, isDoctor, updateDoctorProfile);
router.get('/:id', getDoctorById);

module.exports = router;
