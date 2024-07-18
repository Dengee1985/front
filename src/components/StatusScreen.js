// src/components/StatusScreen.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StatusScreen() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch reports from server
    axios.get('/api/reports')
      .then(response => {
        setReports(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the reports!', error);
      });
  }, []);

  return (
    <div>
      <h1>Track Report</h1>
      <ul>
        {reports.map(report => (
          <li key={report.id}>
            {report.description} - Status: {report.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StatusScreen;
