import React, { useState } from 'react';
import moment from 'moment';
import '../App.css';

function MetricsForm({ onAddMetric }) {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [timestamp, setTimestamp] = useState(
    moment().format('YYYY-MM-DDTHH:mm')
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddMetric({ name, value: Number(value), timestamp });
    setName('');
    setValue('');
    setTimestamp(moment().format('YYYY-MM-DDTHH:mm'));
  };

  return (
    <>
      <h2>Metrics Management</h2>
      <form onSubmit={handleSubmit} className="metrics-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Metric Name"
          required
        />
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Value"
          required
        />
        <input
          type="datetime-local"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
          required
        />
        <button type="submit">Add Metric</button>
      </form>
    </>
  );
}

export default MetricsForm;
