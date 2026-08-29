const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');

// @desc    Book a new appointment
// @route   POST /api/appointments
// @access  Private (Patient)
const createAppointment = async (req, res) => {
  try {
    const { doctorId, date, time, reason } = req.body;

    if (!doctorId || !date || !time || !reason) {
      return res.status(400).json({ message: 'Please fill in all required fields (Doctor, Date, Time, Reason)' });
    }

    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: 'Selected doctor not found' });
    }

    // Validate that appointment date is not in the past
    const appointmentDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isNaN(appointmentDate.getTime()) || appointmentDate < today) {
      return res.status(400).json({ message: 'Appointment date cannot be in the past' });
    }

    // Check for double-booking conflicts
    const existingConflict = await Appointment.findOne({
      doctorId,
      date,
      time,
      status: { $in: ['Pending', 'Confirmed'] }
    });

    if (existingConflict) {
      return res.status(400).json({ message: 'Doctor is already booked for this date and time slot' });
    }

    const appointment = await Appointment.create({
      patientId: req.user._id,
      doctorId,
      date,
      time,
      reason,
      status: 'Pending'
    });

    const populatedAppointment = await Appointment.findById(appointment._id)
      .populate('doctorId', 'name specialization qualification image availableDays availableTime')
      .populate('patientId', 'name email');

    return res.status(201).json({
      message: 'Appointment booked successfully',
      appointment: populatedAppointment
    });
  } catch (error) {
    console.error('Create Appointment Error:', error);
    return res.status(500).json({ message: 'Error booking appointment', error: error.message });
  }
};

// @desc    Get user appointments (Patient's or Doctor's)
// @route   GET /api/appointments
// @access  Private
const getAppointments = async (req, res) => {
  try {
    let appointments = [];

    if (req.user.role === 'patient') {
      appointments = await Appointment.find({ patientId: req.user._id })
        .populate('doctorId', 'name specialization qualification experience image')
        .sort({ date: 1, time: 1 });
    } else if (req.user.role === 'doctor') {
      const doctor = await Doctor.findOne({ userId: req.user._id });
      if (!doctor) {
        return res.status(404).json({ message: 'Doctor record not found for this user' });
      }

      appointments = await Appointment.find({ doctorId: doctor._id })
        .populate('patientId', 'name email')
        .populate('doctorId', 'name specialization')
        .sort({ date: 1, time: 1 });
    }

    return res.json(appointments);
  } catch (error) {
    console.error('Get Appointments Error:', error);
    return res.status(500).json({ message: 'Error retrieving appointments', error: error.message });
  }
};

// @desc    Update appointment status (Confirm, Reject, Mark Completed, Cancel)
// @route   PUT /api/appointments/:id
// @access  Private
const updateAppointmentStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const allowedStatuses = ['Pending', 'Confirmed', 'Rejected', 'Completed', 'Cancelled'];

    if (!status || !allowedStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status value provided' });
    }

    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Permission checks
    if (req.user.role === 'patient') {
      if (appointment.patientId.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: 'Not authorized to modify this appointment' });
      }
      if (status !== 'Cancelled') {
        return res.status(400).json({ message: 'Patients can only cancel their appointments' });
      }
    } else if (req.user.role === 'doctor') {
      const doctor = await Doctor.findOne({ userId: req.user._id });
      if (!doctor || appointment.doctorId.toString() !== doctor._id.toString()) {
        return res.status(403).json({ message: 'Not authorized to modify appointments for another doctor' });
      }
    }

    appointment.status = status;
    await appointment.save();

    const updatedAppointment = await Appointment.findById(appointment._id)
      .populate('patientId', 'name email')
      .populate('doctorId', 'name specialization qualification');

    return res.json({
      message: `Appointment marked as ${status}`,
      appointment: updatedAppointment
    });
  } catch (error) {
    console.error('Update Appointment Status Error:', error);
    return res.status(500).json({ message: 'Error updating appointment', error: error.message });
  }
};

// @desc    Delete/Cancel an appointment
// @route   DELETE /api/appointments/:id
// @access  Private
const deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    if (req.user.role === 'patient' && appointment.patientId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this appointment' });
    }

    await appointment.deleteOne();
    return res.json({ message: 'Appointment cancelled successfully' });
  } catch (error) {
    console.error('Delete Appointment Error:', error);
    return res.status(500).json({ message: 'Error deleting appointment', error: error.message });
  }
};

module.exports = {
  createAppointment,
  getAppointments,
  updateAppointmentStatus,
  deleteAppointment
};
