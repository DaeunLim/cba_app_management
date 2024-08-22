import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  width: 30px;
  height: 150px;
  background-color: #f8f8f8;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
`;

export const ProgressFill = styled.div<{ percentage: number }>`
  width: 100%;
  height: ${({ percentage }) => percentage}%;
  background-color: #f8c3a7;
  border-radius: 10px 10px 0 0;
`;

export const ProgressText = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: #000;
`;