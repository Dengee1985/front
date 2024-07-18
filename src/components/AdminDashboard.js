import React, { useState } from 'react';
import './AdminDashboard.css'; // Make sure this CSS file exists and is correctly linked

const AdminDashboard = () => {
  // State variables for managing cases and form inputs
  const [cases, setCases] = useState([]);
  const [detectiveName, setDetectiveName] = useState('');
  const [caseNumber, setCaseNumber] = useState('');
  const [caseDevelopment, setCaseDevelopment] = useState('');
  const [caseStartDate, setCaseStartDate] = useState('');
  const [caseDates, setCaseDates] = useState([]);
  const [caseFiles, setCaseFiles] = useState([]);
  const [caseEndDate, setCaseEndDate] = useState('');
  const [reopenReason, setReopenReason] = useState('');
  const [reopenDate, setReopenDate] = useState('');

  // Handler to add a new date for case development
  const handleAddDate = () => {
    const newDate = {
      date: caseStartDate,
      description: caseDevelopment
    };

    setCaseDates([...caseDates, newDate]);
    setCaseDevelopment('');
  };

  // Handler to end the case
  const handleEndCase = () => {
    setCaseEndDate(new Date().toLocaleDateString());
  };

  // Handler to reopen the case
  const handleReopenCase = (caseIndex) => {
    const updatedCases = [...cases];
    updatedCases[caseIndex].caseEndDate = '';
    setCases(updatedCases);
  };

  // Handler to select files for a case
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setCaseFiles(files.map(file => file.name));
  };

  // Handler to submit the new case
  const handleSubmitCase = () => {
    const newCase = {
      detectiveName: detectiveName,
      caseNumber: caseNumber,
      caseStartDate: caseStartDate,
      caseEndDate: '',
      caseDates: caseDates,
      caseFiles: caseFiles
    };

    setCases([...cases, newCase]);
    // Reset form fields after submission
    setDetectiveName('');
    setCaseNumber('');
    setCaseStartDate('');
    setCaseDates([]);
    setCaseFiles([]);
  };

  return (
    <div className="admin-dashboard">
      {/* Form to add a new case */}
      <div className="add-case-form">
        <h3>Add New Case</h3>
        <input
          type="text"
          placeholder="Detective Name"
          value={detectiveName}
          onChange={(e) => setDetectiveName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Case Number"
          value={caseNumber}
          onChange={(e) => setCaseNumber(e.target.value)}
        />
        <input
          type="file"
          multiple
          onChange={handleFileChange}
        />
        <textarea
          placeholder="Case Development"
          value={caseDevelopment}
          onChange={(e) => setCaseDevelopment(e.target.value)}
        />
        <input
          type="date"
          value={caseStartDate}
          onChange={(e) => setCaseStartDate(e.target.value)}
        />
        <button onClick={handleAddDate}>Add Date of Development</button>
        <button onClick={handleSubmitCase}>Submit Case</button>
      </div>

      {/* Display added cases */}
      {cases.map((caseData, index) => (
        <div key={index} className="case-card">
          <h3>Case {caseData.caseNumber}</h3>
          <p>Detective Name: {caseData.detectiveName}</p>
          <p>Start Date of Case: {caseData.caseStartDate}</p>
          <p>End Date of Case: {caseData.caseEndDate || 'Not ended'}</p>
          <p>Case Development Dates:</p>
          <ul>
            {caseData.caseDates.map((date, idx) => (
              <li key={idx}>
                <p>Date: {date.date}</p>
                <p>Description: {date.description}</p>
              </li>
            ))}
          </ul>
          {caseData.caseEndDate ? (
            <button onClick={() => handleReopenCase(index)}>Reopen Case</button>
          ) : (
            <button onClick={handleEndCase}>End Case</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
