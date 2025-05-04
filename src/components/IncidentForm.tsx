import { useState } from 'react';
import { Severity } from '../types/incident';

interface IncidentFormProps {
  onSubmit: (incident: { title: string; description: string; severity: Severity }) => void;
}

export default function IncidentForm({ onSubmit }: IncidentFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<Severity>('Medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert('Please fill all fields');
      return;
    }
    onSubmit({ title, description, severity });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="incident-form">
      <input
        type="text"
        placeholder="Incident title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Detailed description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="form-group">
        <label>Severity:</label>
        <select
          value={severity}
          onChange={(e) => setSeverity(e.target.value as Severity)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button type="submit">Report Incident</button>
    </form>
  );
}
