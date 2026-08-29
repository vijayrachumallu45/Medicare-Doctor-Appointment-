import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 3000 // Quick timeout so standalone mode switches immediately
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('medicare_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

// ----------------------------------------------------
// LOCAL STANDALONE MOCK STORE (No Backend Required)
// ----------------------------------------------------
const INITIAL_DOCTORS = [
  {
    _id: 'doc_1',
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
    _id: 'doc_2',
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
    _id: 'doc_3',
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
    _id: 'doc_4',
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
    _id: 'doc_5',
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
    _id: 'doc_6',
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
    _id: 'doc_7',
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

const INITIAL_USERS = [
  {
    id: 'user_pat_1',
    name: 'John Doe',
    email: 'patient@medicare.com',
    password: 'password123',
    role: 'patient'
  },
  {
    id: 'user_doc_1',
    name: 'Dr. Arun Kumar',
    email: 'dr.arun@medicare.com',
    password: 'password123',
    role: 'doctor',
    doctorId: 'doc_1'
  },
  {
    id: 'user_doc_2',
    name: 'Dr. Priya Sharma',
    email: 'dr.priya@medicare.com',
    password: 'password123',
    role: 'doctor',
    doctorId: 'doc_2'
  }
];

const INITIAL_APPOINTMENTS = [
  {
    _id: 'apt_1',
    patientId: { id: 'user_pat_1', name: 'John Doe', email: 'patient@medicare.com' },
    doctorId: INITIAL_DOCTORS[0],
    date: '2026-09-05',
    time: '10:30 AM',
    reason: 'Routine cardiac checkup and BP evaluation',
    status: 'Confirmed',
    createdAt: new Date().toISOString()
  },
  {
    _id: 'apt_2',
    patientId: { id: 'user_pat_1', name: 'John Doe', email: 'patient@medicare.com' },
    doctorId: INITIAL_DOCTORS[1],
    date: '2026-09-10',
    time: '11:00 AM',
    reason: 'Skin rash inspection and dermatological advice',
    status: 'Pending',
    createdAt: new Date().toISOString()
  },
  {
    _id: 'apt_3',
    patientId: { id: 'user_pat_1', name: 'John Doe', email: 'patient@medicare.com' },
    doctorId: INITIAL_DOCTORS[2],
    date: '2026-08-15',
    time: '02:00 PM',
    reason: 'Annual physical examination and blood tests',
    status: 'Completed',
    createdAt: new Date().toISOString()
  }
];

function getLocalStore(key, defaultValue) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
}

function setLocalStore(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Storage write error:', e);
  }
}

// Initialize Local Store if empty
if (!localStorage.getItem('medicare_doctors')) {
  setLocalStore('medicare_doctors', INITIAL_DOCTORS);
}
if (!localStorage.getItem('medicare_users')) {
  setLocalStore('medicare_users', INITIAL_USERS);
}
if (!localStorage.getItem('medicare_appointments')) {
  setLocalStore('medicare_appointments', INITIAL_APPOINTMENTS);
}

// Helper to decode dummy token
function getCurrentSessionUser() {
  const token = localStorage.getItem('medicare_token');
  if (!token) return null;
  const users = getLocalStore('medicare_users', INITIAL_USERS);
  const matched = users.find((u) => u.id === token || u.email === token);
  return matched || users[0];
}

// ----------------------------------------------------
// EXPORTED SERVICES (With Hybrid Offline Fallback)
// ----------------------------------------------------

export const authService = {
  register: async (userData) => {
    try {
      const res = await api.post('/auth/register', userData);
      return res.data;
    } catch (err) {
      console.warn('Backend server unavailable. Operating in Standalone Offline Mode.');
      const users = getLocalStore('medicare_users', INITIAL_USERS);
      const existing = users.find((u) => u.email.toLowerCase() === userData.email.toLowerCase());
      if (existing) {
        throw new Error('An account with this email already exists');
      }

      const newUserId = `user_${Date.now()}`;
      let doctorId = null;

      if (userData.role === 'doctor') {
        const doctors = getLocalStore('medicare_doctors', INITIAL_DOCTORS);
        const newDocId = `doc_${Date.now()}`;
        const newDoctor = {
          _id: newDocId,
          name: userData.name,
          email: userData.email,
          specialization: userData.specialization || 'General Physician',
          qualification: 'MBBS',
          experience: '5 years',
          about: `Dr. ${userData.name} is a dedicated health practitioner.`,
          availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          availableTime: '09:00 AM - 05:00 PM',
          image: ''
        };
        doctors.push(newDoctor);
        setLocalStore('medicare_doctors', doctors);
        doctorId = newDocId;
      }

      const newUser = {
        id: newUserId,
        name: userData.name,
        email: userData.email.toLowerCase(),
        password: userData.password,
        role: userData.role || 'patient',
        doctorId
      };

      users.push(newUser);
      setLocalStore('medicare_users', users);

      return {
        message: 'Registration successful',
        user: { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role, doctorId },
        token: newUser.id
      };
    }
  },

  login: async (credentials) => {
    try {
      const res = await api.post('/auth/login', credentials);
      return res.data;
    } catch (err) {
      console.warn('Backend server unavailable. Operating in Standalone Offline Mode.');
      const users = getLocalStore('medicare_users', INITIAL_USERS);
      const user = users.find((u) => u.email.toLowerCase() === credentials.email.toLowerCase());

      if (!user || user.password !== credentials.password) {
        throw new Error('Invalid email or password');
      }

      return {
        message: 'Login successful',
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          doctorId: user.doctorId || null
        },
        token: user.id
      };
    }
  },

  getMe: async () => {
    try {
      const res = await api.get('/auth/me');
      return res.data;
    } catch (err) {
      const user = getCurrentSessionUser();
      if (!user) throw new Error('Not authenticated');

      const doctors = getLocalStore('medicare_doctors', INITIAL_DOCTORS);
      const docProfile = user.doctorId ? doctors.find((d) => d._id === user.doctorId) : null;

      return {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          doctorId: user.doctorId || null,
          doctorDetails: docProfile
        }
      };
    }
  }
};

export const doctorService = {
  getDoctors: async (params = {}) => {
    try {
      const res = await api.get('/doctors', { params });
      return res.data;
    } catch (err) {
      let doctors = getLocalStore('medicare_doctors', INITIAL_DOCTORS);

      if (params.specialization && params.specialization !== 'All') {
        doctors = doctors.filter(
          (d) => d.specialization.toLowerCase() === params.specialization.toLowerCase()
        );
      }

      if (params.search) {
        const q = params.search.toLowerCase();
        doctors = doctors.filter(
          (d) =>
            d.name.toLowerCase().includes(q) ||
            d.specialization.toLowerCase().includes(q) ||
            d.qualification.toLowerCase().includes(q)
        );
      }

      return doctors;
    }
  },

  getDoctorById: async (id) => {
    try {
      const res = await api.get(`/doctors/${id}`);
      return res.data;
    } catch (err) {
      const doctors = getLocalStore('medicare_doctors', INITIAL_DOCTORS);
      const doctor = doctors.find((d) => d._id === id);
      if (!doctor) throw new Error('Doctor not found');
      return doctor;
    }
  },

  getDoctorProfile: async () => {
    try {
      const res = await api.get('/doctors/profile/me');
      return res.data;
    } catch (err) {
      const user = getCurrentSessionUser();
      const doctors = getLocalStore('medicare_doctors', INITIAL_DOCTORS);
      const appointments = getLocalStore('medicare_appointments', INITIAL_APPOINTMENTS);

      const doctor = doctors.find((d) => d._id === user?.doctorId) || doctors[0];

      const docApts = appointments.filter((a) => {
        const docId = typeof a.doctorId === 'object' ? a.doctorId._id : a.doctorId;
        return docId === doctor._id;
      });

      return {
        doctor,
        stats: {
          totalAppointments: docApts.length,
          pendingAppointments: docApts.filter((a) => a.status === 'Pending').length,
          confirmedAppointments: docApts.filter((a) => a.status === 'Confirmed').length,
          completedAppointments: docApts.filter((a) => a.status === 'Completed').length
        }
      };
    }
  },

  updateDoctorProfile: async (data) => {
    try {
      const res = await api.put('/doctors/profile/me', data);
      return res.data;
    } catch (err) {
      const user = getCurrentSessionUser();
      const doctors = getLocalStore('medicare_doctors', INITIAL_DOCTORS);
      const index = doctors.findIndex((d) => d._id === user?.doctorId);

      if (index !== -1) {
        doctors[index] = { ...doctors[index], ...data };
        setLocalStore('medicare_doctors', doctors);
        return { message: 'Doctor profile updated', doctor: doctors[index] };
      }
      throw new Error('Doctor profile not found');
    }
  }
};

export const appointmentService = {
  createAppointment: async (appointmentData) => {
    try {
      const res = await api.post('/appointments', appointmentData);
      return res.data;
    } catch (err) {
      const user = getCurrentSessionUser();
      const doctors = getLocalStore('medicare_doctors', INITIAL_DOCTORS);
      const doctor = doctors.find((d) => d._id === appointmentData.doctorId) || doctors[0];

      const appointments = getLocalStore('medicare_appointments', INITIAL_APPOINTMENTS);
      const newApt = {
        _id: `apt_${Date.now()}`,
        patientId: { id: user?.id || 'pat_anon', name: user?.name || 'Patient', email: user?.email || 'patient@medicare.com' },
        doctorId: doctor,
        date: appointmentData.date,
        time: appointmentData.time,
        reason: appointmentData.reason,
        status: 'Pending',
        createdAt: new Date().toISOString()
      };

      appointments.unshift(newApt);
      setLocalStore('medicare_appointments', appointments);

      return { message: 'Appointment booked successfully', appointment: newApt };
    }
  },

  getAppointments: async () => {
    try {
      const res = await api.get('/appointments');
      return res.data;
    } catch (err) {
      const user = getCurrentSessionUser();
      const appointments = getLocalStore('medicare_appointments', INITIAL_APPOINTMENTS);

      if (user?.role === 'doctor') {
        return appointments.filter((a) => {
          const docId = typeof a.doctorId === 'object' ? a.doctorId._id : a.doctorId;
          return docId === user.doctorId;
        });
      }

      // Patient appointments
      return appointments.filter((a) => {
        const patId = typeof a.patientId === 'object' ? a.patientId.id || a.patientId._id : a.patientId;
        return !patId || patId === user?.id || user?.role === 'patient';
      });
    }
  },

  updateStatus: async (id, status) => {
    try {
      const res = await api.put(`/appointments/${id}`, { status });
      return res.data;
    } catch (err) {
      const appointments = getLocalStore('medicare_appointments', INITIAL_APPOINTMENTS);
      const apt = appointments.find((a) => a._id === id);
      if (apt) {
        apt.status = status;
        setLocalStore('medicare_appointments', appointments);
        return { message: `Appointment marked as ${status}`, appointment: apt };
      }
      throw new Error('Appointment not found');
    }
  },

  cancelAppointment: async (id) => {
    try {
      const res = await api.delete(`/appointments/${id}`);
      return res.data;
    } catch (err) {
      const appointments = getLocalStore('medicare_appointments', INITIAL_APPOINTMENTS);
      const filtered = appointments.filter((a) => a._id !== id);
      setLocalStore('medicare_appointments', filtered);
      return { message: 'Appointment cancelled successfully' };
    }
  }
};

export default api;
