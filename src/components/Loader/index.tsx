import {
  LoaderProps,
} from '../../types';

import {
  CgPokemon,
} from 'react-icons/cg';

import {
  Container,
  Pokeball,
  Text,
} from './styles';

const Loader = (
  {
    text = 'Loading',
  }: LoaderProps
) => {
  return (
    <Container>
      <Pokeball>
        <CgPokemon />
      </Pokeball>
      <Text>
        {text}...
      </Text>
    </Container>
  );
}

export default Loader;
