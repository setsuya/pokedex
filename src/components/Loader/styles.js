import styled, { keyframes, } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  padding: 5px;
  color: #222224;
  font-size: 42px;
  font-style: italic;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: left;
  overflow: hidden;
`;

export const Pokeball = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 360px;
  color: #ee1515;
  opacity: 0.15;
  animation: ${rotate} 3s linear infinite;
`;

export const Text = styled.div`
  position: relative;
  font-variant: small-caps;
  font-weight: bold;
`;
