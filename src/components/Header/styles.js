import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1000;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ee1515;
  padding: 4px 0;
  border-bottom: 4px solid #222224;
  font-size: 36px;

  & .button {
    cursor: pointer;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
`;

export const Icon = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  color: #222224;
  display: flex;
  align-items: center;
  font-size: 24px;
  border-radius: 10px 0 0 10px;
  padding-left: 5px;
`;

export const Input = styled.input`
  outline: 0;
  border: 0;
  background-color: rgba(255, 255, 255, 0.5);
  color: #222224;
  font-size: 24px;
  font-family: 'Quicksand', sans-serif;
  padding: 0 5px;
`;

export const Button = styled.button`
  outline: 0;
  border: 0;
  color: #f0f0f0;
  background-color: #222224;
  font-size: 28px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 0 10px 10px 0;
  padding: 2px 12px;

  &:disabled {
    color: #999;
  }
`;
