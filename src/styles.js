import styled from 'styled-components';
import { lighten, darken, } from 'polished';

function getSize(size) {
  switch (size) {
    case 'full':
      return '100%';
    case 'half':
      return '50%';
    default:
      return '100%';
  }
}

export const AppTitle = styled.div`
  background-color: #ee1515;
  font-size: 32px;
  font-variant: small-caps;
  font-weight: bold;
  letter-spacing: 4px;
`;

export const Header = styled.div`
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
    background-color: ${lighten(0.08, '#222224')};
    color: ${darken(0.15, '#f0f0f0')};
    cursor: default;
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div`
  text-align: center;
  width: ${props => getSize(props.size)};
`;

export const Title = styled.div`
  background-color: #222224;
  font-variant: small-caps;
  font-weight: bold;
  color: #f0f0f0;
  padding: 6px 0;
  font-size: 14px;
`;

export const Portrait = styled.img`
  filter: drop-shadow(1px 1px 0 #111);
`;

export const Name = styled.span`
  font-size: 21px;
  font-weight: bold;
`;

export const Genera = styled.span`
  font-style: italic;
  font-size: 12px;
`;

export const Types = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
`;

export const Data = styled.div`
  padding: 6px;
`;

export const Abilities = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 6px;
  gap: 10px;
`;

export const EggGroups = styled.div`
  display: flex;
  justify-content: center;
  padding: 6px;
`;

export const EggGroup = styled.div`
  flex-basis: 0;
  flex-grow: 1;
`;

export const Moves = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 6px;
`;
