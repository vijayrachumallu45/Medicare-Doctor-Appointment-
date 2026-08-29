const Doctor = require('../models/Doctor');
const Appointment = require('../models/Appointment');

// @desc    Get all doctors (with optional specialization/query filter)
// @route   GET /api/doctors
// @access  Public
const getDoctors = async (req, res) => {
  try {
    const { specialization, search } = req.query;
    let filter = {};

    if (specialization && specialization !== 'All') {
      filter.specialization = { $regex: new RegExp(`^${specialization}$`, 'i') };
    }

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { specialization: { $regex: search, $options: 'i' } },
        { qualification: { $regex: search, $options: 'i' } }
      ];
    }

    const doctors = await Doctor.find(filter).sort({ createdAt: -1 });
    return res.json(doctors);
  } catch (error) {
    console.error('Get Doctors Error:', error);
    return res.status(500).json({ message: 'Error fetching doctors', error: error.message });
  }
};

// @desc    Get doctor by ID
// @route   GET /api/doctors/:id
// @access  Public
const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    return res.json(doctor);
  } catch (error) {
    console.error('Get Doctor By ID Error:', error);
    return res.status(500).json({ message: 'Error fetching doctor details', error: error.message });
  }
};

// @desc    Get logged-in doctor profile & dashboard stats
// @route   GET /api/doctors/profile/me
// @access  Private (Doctor)
const getDoctorProfile = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ userId: req.user._id });
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor profile not found' });
    }

    // Calculate appointment metrics
    const totalAppointments = await Appointment.countDocuments({ doctorId: doctor._id });
    const pendingAppointments = await Appointment.countDocuments({ doctorId: doctor._id, status: 'Pending' });
    const confirmedAppointments = await Appointment.countDocuments({ doctorId: doctor._id, status: 'Confirmed' });
    const completedAppointments = await Appointment.countDocuments({ doctorId: doctor._id, status: 'Completed' });

    return res.json({
      doctor,
      stats: {
        totalAppointments,
        pendingAppointments,
        confirmedAppointments,
        completedAppointments
      }
    });
  } catch (error) {
    console.error('Get Doctor Profile Error:', error);
    return res.status(500).json({ message: 'Error fetching doctor profile', error: error.message });
  }
};

// @desc    Update doctor profile
// @route   PUT /api/doctors/profile/me
// @access  Private (Doctor)
const updateDoctorProfile = async (req, res) => {
  try {
    let doctor = await Doctor.findOne({ userId: req.user._id });
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor profile not found' });
    }

    const { specialization, qualification, experience, about, availableDays, availableTime, image } = req.body;

    if (specialization) doctor.specialization = specialization;
    if (qualification) doctor.qualification = qualification;
    if (experience) doctor.experience = experience;
    if (about) doctor.about = about;
    if (availableDays) doctor.availableDays = availableDays;
    if (availableTime) doctor.availableTime = availableTime;
    if (image !== undefined) doctor.image = image;

    await doctor.save();

    return res.json({ message: 'Doctor profile updated successfully', doctor });
  } catch (error) {
    console.error('Update Doctor Profile Error:', error);
    return res.status(500).json({ message: 'Error updating doctor profile', error: error.message });
  }
};

module.exports = {
  getDoctors,
  getDoctorById,
  getDoctorProfile,
  updateDoctorProfile
};
