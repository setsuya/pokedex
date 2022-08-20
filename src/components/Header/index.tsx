import {
  Container,
  SearchBar,
  Icon,
  Input,
  Button,
} from './styles';

import {
  BiCaretLeft,
  BiCaretRight,
  BiHash,
  BiSearchAlt2,
} from 'react-icons/bi';

const Header = () => {
  return (
    <Container>
      <BiCaretLeft className="button" />
      <SearchBar>
        <Icon>
          <BiHash />
        </Icon>
        <Input type="number" min="1" max="898" step="1" />
        <Button>
          <BiSearchAlt2 />
        </Button>
      </SearchBar>
      <BiCaretRight className="button" />
    </Container>
  );
}

export default Header;
