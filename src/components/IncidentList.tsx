import { useState } from 'react';
import { AIIncident, Severity, SortOrder } from '../types/incident';
import IncidentItem from './IncidentItem';

interface IncidentListProps {
  incidents: AIIncident[];
}

export default function IncidentList({ incidents }: IncidentListProps) {
  const [severityFilter, setSeverityFilter] = useState<Severity | 'All'>('All');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');

  const filteredIncidents = incidents
    .filter(incident =>
      severityFilter === 'All' || incident.severity === severityFilter
    )
    .sort((a, b) =>
      sortOrder === 'newest'
        ? new Date(b.reported_at).getTime() - new Date(a.reported_at).getTime()
        : new Date(a.reported_at).getTime() - new Date(b.reported_at).getTime()
    );

  return (
    <div className="incident-list">
      <div className="controls">
        <select
          value={severityFilter}
          onChange={(e) => setSeverityFilter(e.target.value as Severity | 'All')}
        >
          <option value="All">All Severities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as SortOrder)}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      <div className="incidents-container">
        {filteredIncidents.map(incident => (
          <IncidentItem key={incident.id} incident={incident} />
        ))}
      </div>
    </div>
  );
}
