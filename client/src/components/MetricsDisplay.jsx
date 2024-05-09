import React from 'react';
import AveragesChart from './AveragesChart';
import moment from 'moment';

function MetricsDisplay({ metrics }) {
  return (
    <div>
      <div className="metrics-table">
        <div className="table-header">
          <div>n</div>
          <div>Metric Name</div>
          <div>Value</div>
          <div>Time</div>
        </div>
        {metrics.map((metric, index) => (
          <div key={metric._id || index} className="table-row">
            <div>{index + 1}</div>
            <div>{metric.name}</div>
            <div>{metric.value}</div>
            <div>{moment(metric.timestamp).format('YYYY-MM-DD HH:mm')}</div>
          </div>
        ))}
      </div>
      <AveragesChart
        metrics={metrics}
        interval="minute"
        name="Averages per Minute"
      />
      <AveragesChart
        metrics={metrics}
        interval="hour"
        name="Averages per Hour"
      />
      <AveragesChart metrics={metrics} interval="day" name="Averages per Day" />
    </div>
  );
}

export default MetricsDisplay;
