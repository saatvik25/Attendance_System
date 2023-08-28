import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css'; // Import your custom CSS for styling

const Calendar = ({ selectedDate, onDateChange }) => {
  const handleDateSelection = (date) => {
    // Pass the selected date to the parent component
    onDateChange(date);
  };

  return (
    <div className="calendar-container">
      <h3 className="calendar-title">Select Date:</h3>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateSelection}
        dateFormat="yyyy-MM-dd"
        className="date-picker"
      />
    </div>
  );
};

export default Calendar;
