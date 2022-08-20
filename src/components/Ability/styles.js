import styled from 'styled-components';

export const Container = styled.div`
  width: calc(50% - 10px);
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-weight: bold;
`;

export const Description = styled.div`
  font-size: 12px;
  font-style: italic;
  padding: 0 4px;
`;

export const Separator = styled.div`
  background-color: #222224;
  height: 2px;
  margin: 4px 0;
`;
