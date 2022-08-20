import styled from 'styled-components';

export const Container = styled.div`
  padding: 6px;
`;

export const Description = styled.div`
  padding-bottom: 6px;
  font-size: 12px;
  font-weight: bold;
`;

export const Graph = styled.div`
  border: 1px solid #222224;
  padding: 4px;

  & > div {
    background-color: #e0e0e0;
    position: relative;
    width: 100%;
    height: 120px;
  }
`;

export const Point = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: black;
  left: calc((100% - 2px) / 99 * ${props => props.level - 1});
  top: ${props => (1640000 - props.experience) * (118 / 1640000)}px;
`;

export const Legend = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: bold;

  & > div:nth-of-type(1) {
    flex-grow: 1;
    text-align: left;
  }

  & > div:nth-of-type(2) {
    flex-grow: 1;
    text-align: center;
  }

  & > div:nth-of-type(3) {
    flex-grow: 1;
    text-align: right;
  }
`;
