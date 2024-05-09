import React, { useEffect, useState } from 'react';
import MetricsForm from './components/MetricsForm';
import MetricsDisplay from './components/MetricsDisplay';
import { fetchMetrics, addMetric } from './services/metricsService';
import './App.css';

function App() {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    fetchMetricsData();
  }, []);

  const fetchMetricsData = async () => {
    try {
      const data = await fetchMetrics();
      setMetrics(data);
    } catch (error) {
      console.error('Failed to fetch metrics', error);
    }
  };

  const handleAddMetric = async (metric) => {
    try {
      const newMetric = await addMetric(metric);
      setMetrics((currentMetrics) => [...currentMetrics, newMetric]);
    } catch (error) {
      console.error('Failed to add metric', error);
    }
  };

  return (
    <div className="app-container">
      <MetricsForm onAddMetric={handleAddMetric} />
      <MetricsDisplay metrics={metrics} />
    </div>
  );
}

export default App;
