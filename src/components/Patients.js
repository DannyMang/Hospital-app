import React, { useState, useEffect } from 'react';

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Fetch patients from API
    // Update state with fetched patients
  }, []);

  return (
    <div>
      <h2>Patients</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            {patient.name} - {patient.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Patients;