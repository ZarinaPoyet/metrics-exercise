import React, { useRef, useLayoutEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import moment from 'moment';

function useContainerWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }

    window.addEventListener('resize', updateWidth);
    updateWidth();

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, [ref]);

  return width;
}

function calculateAverages(metrics, interval) {
  const grouped = {};
  metrics.forEach((metric) => {
    const key = moment(metric.timestamp).startOf(interval).format();
    grouped[key] = grouped[key] || [];
    grouped[key].push(metric.value);
  });
  const averages = Object.entries(grouped).map(([time, values]) => ({
    time: moment(time).format('YYYY-MM-DD HH:mm'),
    avg: values.reduce((a, b) => a + b, 0) / values.length,
  }));
  return averages;
}

function AveragesChart({ metrics, interval, name }) {
  const containerRef = useRef();
  const containerWidth = useContainerWidth(containerRef);
  const data = calculateAverages(metrics, interval);

  return (
    <div ref={containerRef} className="chart-container">
      <h3>{name}:</h3>
      <LineChart
        width={containerWidth}
        height={300}
        data={data}
        margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" tickMargin={20} />
        <YAxis tickMargin={20} />
        <Tooltip />
        <Legend
          align="right"
          verticalAlign="top"
          layout="vertical"
          wrapperStyle={{ paddingLeft: 20 }}
        />
        <Line
          type="monotone"
          dataKey="avg"
          stroke="#3148D1"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
}

export default AveragesChart;
