import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Hospital App</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/appointments">Appointments</a></li>
          <li><a href="/patients">Patients</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;