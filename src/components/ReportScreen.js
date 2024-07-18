import React, { useState } from 'react';
import './ReportScreen.css';

function ReportScreen() {
  const [typeOfCrime, setTypeOfCrime] = useState('');
  const [location, setLocation] = useState('');
  const [file, setFile] = useState(null);
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ typeOfCrime, location, file, date, description });
  };

  return (
    <div className="report-screen">
      <h2>Report a Crime</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="typeOfCrime">Type of Crime:</label>
          <input
            type="text"
            id="typeOfCrime"
            value={typeOfCrime}
            onChange={(e) => setTypeOfCrime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="file">Choose File:</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date of Action:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReportScreen;
