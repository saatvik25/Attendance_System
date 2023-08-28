import React from 'react';
import PropTypes from 'prop-types';
import './StudentCard.css'; // Import your custom CSS for styling

const StudentCard = ({ student, onMarkAttendance }) => {
  const handleAttendanceClick = () => {
    onMarkAttendance(student.id);
  };

  return (
    <div className={`student-card ${student.present ? 'present' : 'absent'}`}>
      <div className="student-info">
        <h3 className="student-name">{student.name}</h3>
      </div>
      <button
        className={`attendance-button ${student.present ? 'present' : 'absent'}`}
        onClick={handleAttendanceClick}
      >
        {student.present ? 'Present' : 'Absent'}
      </button>
    </div>
  );
};

StudentCard.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    present: PropTypes.bool.isRequired,
  }).isRequired,
  onMarkAttendance: PropTypes.func.isRequired,
};

export default StudentCard;
