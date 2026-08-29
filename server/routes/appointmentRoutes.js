const express = require('express');
const router = express.Router();
const {
  createAppointment,
  getAppointments,
  updateAppointmentStatus,
  deleteAppointment
} = require('../controllers/appointmentController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.route('/')
  .post(createAppointment)
  .get(getAppointments);

router.route('/:id')
  .put(updateAppointmentStatus)
  .delete(deleteAppointment);

module.exports = router;
