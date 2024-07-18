// src/components/HomeScreen.js

import React from 'react';
import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <div>
      <h1>Social Crime App</h1>
      <nav>
        <ul>
          <li><Link to="/report">Report a Crime</Link></li>
          <li><Link to="/admin">Admin Dashboard</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default HomeScreen;
