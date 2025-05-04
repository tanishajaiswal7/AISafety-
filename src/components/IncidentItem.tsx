import { useState } from 'react';
import { AIIncident } from '../types/incident';

interface IncidentItemProps {
  incident: AIIncident;
}

export default function IncidentItem({ incident }: IncidentItemProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="incident-item">
      <div className="incident-header">
        <h3>{incident.title}</h3>
        <div className="meta">
          <span className={`severity ${incident.severity.toLowerCase()}`}>
            {incident.severity}
          </span>
          <span className="date">
            {new Date(incident.reported_at).toLocaleDateString()}
          </span>
          <button
            onClick={() => setExpanded(!expanded)}
            className="toggle-btn"
          >
            {expanded ? '▲ Hide' : '▼ View'} Details
          </button>
        </div>
      </div>

      {expanded && (
        <div className="incident-description">
          <p>{incident.description}</p>
        </div>
      )}
    </div>
  );
}
