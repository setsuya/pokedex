import {
  StatsProps,
} from '../../types';

import {
  Container,
  Column,
  Bars,
  Bar,
} from './styles';

const Stats = (
  {
    hp,
    attack,
    defense,
    specialAttack,
    specialDefense,
    speed,
  }: StatsProps
) => {
  return (
    <Container>
      <Column align="left">
        <div>HP</div>
        <div>Atk</div>
        <div>Def</div>
        <div>S.Atk</div>
        <div>S.Def</div>
        <div>Spd</div>
      </Column>
      <Bars>
        <Bar percentage={(hp / 255) * 100}>
          <div />
        </Bar>
        <Bar percentage={(attack / 255) * 100}>
          <div />
        </Bar>
        <Bar percentage={(defense / 255) * 100}>
          <div />
        </Bar>
        <Bar percentage={(specialAttack / 255) * 100}>
          <div />
        </Bar>
        <Bar percentage={(specialDefense / 255) * 100}>
          <div />
        </Bar>
        <Bar percentage={(speed / 255) * 100}>
          <div />
        </Bar>
      </Bars>
      <Column align="right">
        <div>{hp}</div>
        <div>{attack}</div>
        <div>{defense}</div>
        <div>{specialAttack}</div>
        <div>{specialDefense}</div>
        <div>{speed}</div>
      </Column>
    </Container>
  );
};

export default Stats;
