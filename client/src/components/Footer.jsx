import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Stethoscope size={24} color="#38bdf8" />
              <span>MediCare</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '1rem' }}>
              MediCare is a simple full-stack doctor appointment system designed for effortless patient booking and doctor appointment management.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/doctors">Find Doctors</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register Account</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Specializations</h4>
            <ul className="footer-links">
              <li><Link to="/doctors?specialization=Cardiologist">Cardiology</Link></li>
              <li><Link to="/doctors?specialization=Dermatologist">Dermatology</Link></li>
              <li><Link to="/doctors?specialization=Pediatrician">Pediatrics</Link></li>
              <li><Link to="/doctors?specialization=General Physician">General Medicine</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="footer-links" style={{ fontSize: '0.85rem' }}>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <MapPin size={16} /> 123 Healthcare Blvd, Medical Hub
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Phone size={16} /> +1 (800) 555-MEDICARE
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Mail size={16} /> contact@medicare-demo.com
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} MediCare – Doctor Appointment System. Academic Demo Project.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
