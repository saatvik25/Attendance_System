import React from 'react';
import PropTypes from 'prop-types';
import './SubmitButton.css'; // Import your custom CSS for styling

const SubmitButton = ({ attendanceRecords, selectedDate }) => {
  const handleSubmit = () => {
    // Implement logic to handle the submission of attendance records
    console.log('Attendance records:', attendanceRecords);
    console.log('Selected date:', selectedDate);
    // Add your submission logic here
  };

  return (
    <button className="submit-button" onClick={handleSubmit}>
      Submit Attendance
    </button>
  );
};

SubmitButton.propTypes = {
  attendanceRecords: PropTypes.array.isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
};

export default SubmitButton;
