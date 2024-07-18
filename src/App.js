import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import ReportScreen from './components/ReportScreen';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/report" element={<ReportScreen />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
