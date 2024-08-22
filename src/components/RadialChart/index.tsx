import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ProgressProps {
  percentage: number;
}

const RadialChart: React.FC<ProgressProps> = ({ percentage }) => {
  return (
    <div style={{ width: 150, height: 150 }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: '#000',
          pathColor: '#f8c3a7',
          trailColor: '#f8f8f8',
          textSize: '16px',
          strokeLinecap: 'round',
        })}
      />
    </div>
  );
};

export default RadialChart;