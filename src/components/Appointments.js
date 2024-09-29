import React, { useState, useEffect } from 'react';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments from API
    // Update state with fetched appointments
  }, []);

  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.patient} - {appointment.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;