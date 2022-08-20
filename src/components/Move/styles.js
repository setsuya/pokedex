import styled from 'styled-components';

export const Container = styled.div``;

export const MainInfo = styled.div`
  display: flex;
  gap: 4px;
`;

export const Stats = styled.div`
  display: flex;
  gap: 2px;
`;

export const Stat = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  background-color: #222224;
  color: #f0f0f0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1px 6px;
  font-variant: small-caps;
  transform: skewX(-20deg);

  & > div {
    transform: skewX(20deg);
  }

  & > div:nth-of-type(1) {
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 1px;
  }

  & > div:nth-of-type(2) {
    font-size: 14px;
  }
`;

export const Name = styled.div`
  text-align: left;
  flex-grow: 1;
  font-weight: bold;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
`;

export const Description = styled.div`
  text-align: left;
  font-size: 12px;
  font-style: italic;
  padding: 0 4px;
`;

export const Separator = styled.div`
  background-color: #222224;
  height: 1px;
  margin: 4px 0;
`;
