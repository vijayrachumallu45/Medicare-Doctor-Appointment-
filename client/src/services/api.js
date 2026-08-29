import axios from 'axios';

// Default to direct backend URL http://localhost:5000/api to avoid Vite proxy network errors
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request Interceptor: Attach JWT token if present
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

// Response Interceptor: Handle errors with friendly network error messages
api.interceptors.response.use(
  (response) => response,
  (error) => {
    let message = 'An unexpected error occurred';
    if (error.response && error.response.data && error.response.data.message) {
      message = error.response.data.message;
    } else if (error.message === 'Network Error') {
      message = 'Network Error: Cannot connect to backend server at http://localhost:5000. Please ensure the backend server is running.';
    } else if (error.message) {
      message = error.message;
    }
    return Promise.reject(new Error(message));
  }
);

// Auth Services
export const authService = {
  register: async (userData) => {
    const res = await api.post('/auth/register', userData);
    return res.data;
  },
  login: async (credentials) => {
    const res = await api.post('/auth/login', credentials);
    return res.data;
  },
  getMe: async () => {
    const res = await api.get('/auth/me');
    return res.data;
  }
};

// Doctor Services
export const doctorService = {
  getDoctors: async (params = {}) => {
    const res = await api.get('/doctors', { params });
    return res.data;
  },
  getDoctorById: async (id) => {
    const res = await api.get(`/doctors/${id}`);
    return res.data;
  },
  getDoctorProfile: async () => {
    const res = await api.get('/doctors/profile/me');
    return res.data;
  },
  updateDoctorProfile: async (data) => {
    const res = await api.put('/doctors/profile/me', data);
    return res.data;
  }
};

// Appointment Services
export const appointmentService = {
  createAppointment: async (appointmentData) => {
    const res = await api.post('/appointments', appointmentData);
    return res.data;
  },
  getAppointments: async () => {
    const res = await api.get('/appointments');
    return res.data;
  },
  updateStatus: async (id, status) => {
    const res = await api.put(`/appointments/${id}`, { status });
    return res.data;
  },
  cancelAppointment: async (id) => {
    const res = await api.delete(`/appointments/${id}`);
    return res.data;
  }
};

export default api;
