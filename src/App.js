import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Calendar from './components/Calendar';
import StudentList from './components/StudentList';
import AttendanceStatus from './components/AttendanceStatus';
import SubmitButton from './components/SubmitButton';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [attendanceRecords, setAttendanceRecords] = useState({});

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setAttendanceRecords({});
  };

  const handleAttendanceChange = (studentId, status) => {
    setAttendanceRecords((prevRecords) => ({
      ...prevRecords,
      [studentId]: status,
    }));
  };

  return (
    <div className="App">
      <Header courseName="Mathematics" />
      <Calendar selectedDate={selectedDate} onDateChange={handleDateChange} />
      <StudentList>
        {(students) =>
          students.map((student) => (
            <AttendanceStatus
              key={student.id}
              student={student}
              attendance={attendanceRecords[student.id] || false}
              onAttendanceChange={(status) =>
                handleAttendanceChange(student.id, status)
              }
            />
          ))
        }
      </StudentList>
      <SubmitButton
        attendanceRecords={attendanceRecords}
        selectedDate={selectedDate}
      />
    </div>
  );
}

export default App;
