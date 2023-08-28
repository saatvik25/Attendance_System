import React, { useState, useEffect } from 'react';
import StudentCard from './StudentCard';
import './StudentList.css'; // Import your custom CSS for styling

function StudentList() {
  const initialStudents = [
    { id: 1, name: 'Registration 01', present: false },
    { id: 2, name: 'Registration 02', present: false },
    { id: 3, name: 'Registration 03', present: false },
    { id: 4, name: 'Registration 04', present: false },
    { id: 5, name: 'Registration 05', present: false },
    { id: 6, name: 'Registration 06', present: false },
    { id: 7, name: 'Registration 07', present: false },
    { id: 8, name: 'Registration 08', present: false },
    { id: 9, name: 'Registration 09', present: false },
    { id: 10, name: 'Registration 10', present: false }

  ];

  const [students, setStudents] = useState(initialStudents);

  const handleMarkAttendance = (studentId) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId ? { ...student, present: !student.present } : student
      )
    );
  };

  useEffect(() => {
    // Simulated API call or database fetch could go here
    // For now, using static data
  }, []);

  return (
    <div className="student-list-container">
      <h2 className="student-list-heading">Student List</h2>
      <div className="student-list">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onMarkAttendance={handleMarkAttendance}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentList;
