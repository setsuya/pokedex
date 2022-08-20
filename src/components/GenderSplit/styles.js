import styled from 'styled-components';

export const Container = styled.div`
  padding: 6px;
`;

export const Bar = styled.div`
  display: flex;
  height: 12px;
  background-color: #e0e0e0;
  transform: skewX(-20deg);
  box-shadow: 2px 2px 0 #222224;
`;

export const MaleBar = styled.div`
  width: ${props => props.size}%;
  background-color: #3355ff;
`;

export const FemaleBar = styled.div`
  width: ${props => props.size}%;
  background-color: #ff77dd;
`;

export const Split = styled.div`
  display: flex;
  margin-top: 4px;
`;

export const MaleSplit = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  display: flex;
  gap: 3px;
  align-items: center;
  justify-content: flex-start;
`;

export const FemaleSplit = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  display: flex;
  gap: 3px;
  align-items: center;
  justify-content: flex-end;
`;
