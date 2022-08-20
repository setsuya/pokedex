import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 10px;
  padding: 6px;
`;

export const Column = styled.div`
  text-align: ${props => props.align};
  display: flex;
  flex-direction: column;
  font-variant: small-caps;
`;

export const Bars = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Bar = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;

  & > div {
    background: linear-gradient(to right, #ee1515 ${props => props.percentage}%, #e0e0e0 ${props => props.percentage}%);
    height: 8px;
    align-self: middle;
    width: 100%;
    transform: skewX(-20deg);
    box-shadow: 2px 2px 0 #222224;
  }
`;
