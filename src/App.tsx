
import { useState } from 'react';
import IncidentDashboard from './components/IncidentDashboard';
import { mockIncidents } from './data/mockIncidents';
import './App.css';

export default function App() {
  const [incidents, setIncidents] = useState(mockIncidents);

  return (
    <div className="app-container">
      <h1>Welcome to AI Safety Incident Dashboard</h1>
      <IncidentDashboard incidents={incidents} setIncidents={setIncidents} />
    </div>
  );
}
