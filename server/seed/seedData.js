const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') });

const User = require('../models/User');
const Doctor = require('../models/Doctor');
const Appointment = require('../models/Appointment');

const seedDatabase = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/medicare';
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB for seeding...');

    // Clear existing data
    await User.deleteMany({});
    await Doctor.deleteMany({});
    await Appointment.deleteMany({});
    console.log('Cleared existing database records.');

    // Common password hash for test accounts
    const salt = await bcrypt.genSalt(10);
    const demoPassword = await bcrypt.hash('password123', salt);

    // 1. Create Demo Patient
    const patientUser = await User.create({
      name: 'John Doe',
      email: 'patient@medicare.com',
      password: demoPassword,
      role: 'patient'
    });

    // 2. Fictional Doctors List (Requirement #19)
    const doctorsData = [
      {
        name: 'Dr. Arun Kumar',
        email: 'dr.arun@medicare.com',
        specialization: 'Cardiologist',
        qualification: 'MBBS, MD - Cardiology',
        experience: '12 years',
        about: 'Dr. Arun Kumar is an experienced Cardiologist specializing in preventive heart health, hypertension control, and cardiovascular disease management.',
        availableDays: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
        availableTime: '09:00 AM - 04:00 PM',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400'
      },
      {
        name: 'Dr. Priya Sharma',
        email: 'dr.priya@medicare.com',
        specialization: 'Dermatologist',
        qualification: 'MBBS, MD - Dermatology',
        experience: '8 years',
        about: 'Dr. Priya Sharma is a certified dermatologist providing expert diagnosis and treatment for skin diseases, acne management, and cosmetic dermatology.',
        availableDays: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
        availableTime: '10:00 AM - 05:00 PM',
        image: 'https://images.unsplash.com/photo-1594824813566-88855ce78947?auto=format&fit=crop&q=80&w=400'
      },
      {
        name: 'Dr. Rahul Verma',
        email: 'dr.rahul@medicare.com',
        specialization: 'General Physician',
        qualification: 'MBBS, MD - Internal Medicine',
        experience: '10 years',
        about: 'Dr. Rahul Verma is a compassionate General Physician offering comprehensive care for acute ailments, chronic conditions, and general health checkups.',
        availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        availableTime: '08:30 AM - 03:30 PM',
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400'
      },
      {
        name: 'Dr. Sneha Rao',
        email: 'dr.sneha@medicare.com',
        specialization: 'Pediatrician',
        qualification: 'MBBS, DCH, MD - Pediatrics',
        experience: '9 years',
        about: 'Dr. Sneha Rao is a warm pediatric specialist dedicated to child development, newborn care, vaccinations, and adolescent medicine.',
        availableDays: ['Tuesday', 'Wednesday', 'Friday', 'Saturday'],
        availableTime: '09:30 AM - 04:30 PM',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400'
      },
      {
        name: 'Dr. Kiran Patel',
        email: 'dr.kiran@medicare.com',
        specialization: 'Orthopedic',
        qualification: 'MBBS, MS - Orthopedics',
        experience: '14 years',
        about: 'Dr. Kiran Patel is a renowned Orthopedic surgeon specializing in joint replacements, sports injuries, and spine rehabilitation.',
        availableDays: ['Monday', 'Thursday', 'Friday'],
        availableTime: '11:00 AM - 06:00 PM',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400'
      },
      {
        name: 'Dr. Ananya Singh',
        email: 'dr.ananya@medicare.com',
        specialization: 'Dentist',
        qualification: 'BDS, MDS - Endodontics',
        experience: '7 years',
        about: 'Dr. Ananya Singh is an expert dental surgeon providing pain-free root canals, teeth whitening, orthodontics, and preventative oral care.',
        availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Saturday'],
        availableTime: '10:00 AM - 06:00 PM',
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=400'
      },
      {
        name: 'Dr. Vikramaditya Joshi',
        email: 'dr.vikram@medicare.com',
        specialization: 'Neurologist',
        qualification: 'MBBS, DM - Neurology',
        experience: '15 years',
        about: 'Dr. Vikramaditya Joshi provides specialized treatment for neurological disorders, migraines, epilepsy, and nerve care.',
        availableDays: ['Tuesday', 'Thursday', 'Saturday'],
        availableTime: '09:00 AM - 02:00 PM',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400'
      }
    ];

    const createdDoctors = [];

    for (const docData of doctorsData) {
      // Create user account for doctor
      const docUser = await User.create({
        name: docData.name,
        email: docData.email,
        password: demoPassword,
        role: 'doctor'
      });

      // Create Doctor profile linked to user account
      const doctorProfile = await Doctor.create({
        userId: docUser._id,
        name: docData.name,
        specialization: docData.specialization,
        qualification: docData.qualification,
        experience: docData.experience,
        about: docData.about,
        availableDays: docData.availableDays,
        availableTime: docData.availableTime,
        image: docData.image
      });

      createdDoctors.push(doctorProfile);
    }

    // 3. Create Sample Appointments for Patient
    await Appointment.create({
      patientId: patientUser._id,
      doctorId: createdDoctors[0]._id, // Dr. Arun Kumar
      date: '2026-09-05',
      time: '10:30 AM',
      reason: 'Routine routine cardiac checkup and BP evaluation',
      status: 'Confirmed'
    });

    await Appointment.create({
      patientId: patientUser._id,
      doctorId: createdDoctors[1]._id, // Dr. Priya Sharma
      date: '2026-09-10',
      time: '11:00 AM',
      reason: 'Skin rash inspection and dermatological advice',
      status: 'Pending'
    });

    await Appointment.create({
      patientId: patientUser._id,
      doctorId: createdDoctors[2]._id, // Dr. Rahul Verma
      date: '2026-08-15',
      time: '02:00 PM',
      reason: 'Annual physical examination and blood tests',
      status: 'Completed'
    });

    console.log('Database seeded successfully!');
    console.log('\n--- DEMO LOGIN CREDENTIALS ---');
    console.log('Patient Login: patient@medicare.com / password123');
    console.log('Doctor Login (Dr. Arun Kumar): dr.arun@medicare.com / password123');
    console.log('Doctor Login (Dr. Priya Sharma): dr.priya@medicare.com / password123');
    console.log('-------------------------------\n');

    process.exit(0);
  } catch (error) {
    console.error('Seeding Error:', error);
    process.exit(1);
  }
};

seedDatabase();
