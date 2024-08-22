import React from 'react';
import {ProgressBarContainer, ProgressFill, ProgressText} from './BarCharts.styled'

interface ProgressProps {
  percentage: number;
}



const BarCharts: React.FC<ProgressProps> = ({ percentage }) => {
  return (
    <ProgressBarContainer>
      <ProgressFill percentage={percentage} />
      <ProgressText>{`${percentage}%`}</ProgressText>
    </ProgressBarContainer>
  );
};

export default BarCharts;