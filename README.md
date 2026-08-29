# MediCare – Doctor Appointment System

MediCare is a simple, clean, academic full-stack web application designed to allow patients to register, search for doctors, book appointments, and view appointment history, while doctors have a dedicated dashboard to manage their appointments.

## 📋 Features

### Patient
- User Registration & Secure Login (JWT)
- Search Doctors by Specialization
- Detailed Doctor Profiles (Qualifications, Experience, Hours)
- Simple Appointment Booking
- Patient Dashboard & Appointment History
- Cancel Pending / Confirmed Appointments

### Doctor
- Doctor Account Login
- Dashboard Metrics (Total, Pending, Confirmed, Completed)
- Confirm / Accept Pending Appointments
- Reject Appointments
- Mark Appointments as Completed
- Edit Doctor Profile Details

## 🛠️ Tech Stack
- **Frontend**: React, Vite, React Router, CSS
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs
- **Database**: MongoDB

## 🚀 Installation & Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB (Running locally on port 27017)

### 1. Clone Repository
```bash
git clone <repository-url>
cd Medicare
```

### 2. Install Dependencies
```bash
# Install root, backend, and frontend dependencies
npm install
npm install --prefix server
npm install --prefix client
```

### 3. Environment Setup
Create a `.env` file inside the `server/` folder using `server/.env.example`:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/medicare
JWT_SECRET=medicare_super_secret_jwt_key_2026
```

### 4. Seed Database with Demo Accounts & Doctors
```bash
npm run seed
```

### 5. Running the Application

**Run Backend Server:**
```bash
npm run server
# Server runs on http://localhost:5000
```

**Run Frontend Client:**
```bash
npm run client
# Client runs on http://localhost:3000
```

## 🔑 Demo Accounts

- **Patient Login**: `patient@medicare.com` / `password123`
- **Doctor Login**: `dr.arun@medicare.com` / `password123`
- **Doctor Login**: `dr.priya@medicare.com` / `password123`

## 🧪 Testing & Coverage
```bash
npm test
```
