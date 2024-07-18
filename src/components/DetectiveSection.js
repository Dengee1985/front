import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DetectiveSection.css';

function DetectiveSection() {
  const [detectives, setDetectives] = useState([]);

  useEffect(() => {
    axios.get('/api/detectives')
      .then(response => {
        setDetectives(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the detectives!", error);
      });
  }, []);

  return (
    <div className="detective-section">
      <h2>Detectives</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Case</th>
            <th>Case Development</th>
            <th>Files</th>
          </tr>
        </thead>
        <tbody>
          {detectives.map(detective => (
            <tr key={detective.id}>
              <td>{detective.name}</td>
              <td>{detective.dateOfCase}</td>
              <td>{detective.caseDevelopment}</td>
              <td>
                {detective.files.map(file => (
                  <a key={file.id} href={file.url} target="_blank" rel="noopener noreferrer">{file.name}</a>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DetectiveSection;
