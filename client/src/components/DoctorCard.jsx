import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Clock, ArrowRight, UserCheck } from 'lucide-react';

const DoctorCard = ({ doctor }) => {
  const fallbackImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&background=0284c7&color=fff&size=250`;

  return (
    <div className="card doctor-card">
      <img
        src={doctor.image || fallbackImage}
        alt={doctor.name}
        className="doctor-image"
        onError={(e) => {
          e.target.src = fallbackImage;
        }}
      />
      <div className="doctor-specialization">{doctor.specialization}</div>
      <h3 className="doctor-name">{doctor.name}</h3>
      <div className="doctor-qualification">{doctor.qualification}</div>

      <div className="doctor-meta">
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <Award size={16} color="#0284c7" /> {doctor.experience} exp
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <Clock size={16} color="#0d9488" /> Available
        </span>
      </div>

      <p className="doctor-desc">
        {doctor.about && doctor.about.length > 110
          ? `${doctor.about.substring(0, 110)}...`
          : doctor.about || 'Experienced healthcare specialist committed to compassionate patient care.'}
      </p>

      <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem' }}>
        <Link to={`/doctors/${doctor._id}`} className="btn btn-outline btn-block btn-sm">
          View Profile <ArrowRight size={16} />
        </Link>
        <Link to={`/book-appointment?doctorId=${doctor._id}`} className="btn btn-primary btn-block btn-sm">
          Book
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
