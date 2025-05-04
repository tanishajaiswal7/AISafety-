import { useState } from 'react';
import { AIIncident } from '../types/incident';
import IncidentList from './IncidentList';
import IncidentForm from './IncidentForm';
import './basic.css';

interface IncidentDashboardProps {
  incidents: AIIncident[];
  setIncidents: (incidents: AIIncident[]) => void;
}

export default function IncidentDashboard({ incidents, setIncidents }: IncidentDashboardProps) {
  const [showForm, setShowForm] = useState(false);
  const [showIncidents, setShowIncidents] = useState(false);

  const handleAddIncident = (newIncident: { title: string; description: string; severity: string }) => {
    setIncidents([
      ...incidents,
      {
        ...newIncident,
        id: Math.max(...incidents.map(i => i.id), 0) + 1,
        reported_at: new Date().toISOString()
      }
    ]);
    setShowForm(false);
  };

  return (
    <div className="incident-dashboard">
      

      <div className="options">
        <button onClick={() => setShowIncidents(!showIncidents)}>
          {showIncidents ? 'Hide AI Safety Incidents' : 'Show AI Safety Incidents'}
        </button>
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Hide Report Form' : 'Report New Incident'}
        </button>
      </div>

      {showForm && <IncidentForm onSubmit={handleAddIncident} />}
      {showIncidents && <IncidentList incidents={incidents} />}
    </div>
  );
}
