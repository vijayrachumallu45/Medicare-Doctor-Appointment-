import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Stethoscope, User, LogOut, Calendar, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
  const { user, isAuthenticated, isPatient, isDoctor, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          <Stethoscope size={28} color="#0284c7" />
          <span>MediCare</span>
        </Link>

        <nav>
          <ul className="navbar-nav">
            <li>
              <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/doctors" className={`nav-link ${isActive('/doctors') ? 'active' : ''}`}>
                Doctors
              </Link>
            </li>

            {isAuthenticated && (
              <>
                {isPatient && (
                  <>
                    <li>
                      <Link
                        to="/patient-dashboard"
                        className={`nav-link ${isActive('/patient-dashboard') ? 'active' : ''}`}
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/my-appointments"
                        className={`nav-link ${isActive('/my-appointments') ? 'active' : ''}`}
                      >
                        My Appointments
                      </Link>
                    </li>
                  </>
                )}

                {isDoctor && (
                  <>
                    <li>
                      <Link
                        to="/doctor-dashboard"
                        className={`nav-link ${isActive('/doctor-dashboard') ? 'active' : ''}`}
                      >
                        Doctor Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/doctor-appointments"
                        className={`nav-link ${isActive('/doctor-appointments') ? 'active' : ''}`}
                      >
                        Appointments
                      </Link>
                    </li>
                  </>
                )}
              </>
            )}
          </ul>
        </nav>

        <div className="user-menu">
          {isAuthenticated ? (
            <>
              <div className="user-badge">
                <User size={16} />
                <span>{user.name}</span>
                <span className="role-tag">{user.role}</span>
              </div>
              <button onClick={handleLogout} className="btn btn-outline btn-sm">
                <LogOut size={16} />
                Logout
              </button>
            </>
          ) : (
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Link to="/login" className="btn btn-outline btn-sm">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary btn-sm">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
