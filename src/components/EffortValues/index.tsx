import {
  EffortValuesProps,
} from '../../types';

import {
  Container,
  Stat,
  Title,
  Value,
} from './styles';

const EffortValues = (
  {
    hp,
    attack,
    defense,
    specialAttack,
    specialDefense,
    speed,
  }: EffortValuesProps
) => {
  return (
    <Container>
      <Stat>
        <Title>HP</Title>
        <Value>{hp}</Value>
      </Stat>
      <Stat>
        <Title>Atk</Title>
        <Value>{attack}</Value>
      </Stat>
      <Stat>
        <Title>Def</Title>
        <Value>{defense}</Value>
      </Stat>
      <Stat>
        <Title>S.Atk</Title>
        <Value>{specialAttack}</Value>
      </Stat>
      <Stat>
        <Title>S.Def</Title>
        <Value>{specialDefense}</Value>
      </Stat>
      <Stat>
        <Title>Spd</Title>
        <Value>{speed}</Value>
      </Stat>
    </Container>
  );
}

export default EffortValues;
