import {
  GrowthRateProps,
} from '../../types';

import {
  Container,
  Description,
  Graph,
  Point,
  Legend,
} from './styles';

const GrowthRate = (
  {
    levels,
    description,
  }: GrowthRateProps
) => {
  const points = [];

  for (const point of levels) {
    points.push(
      <Point
        key={`level_${point.level}`}
        level={point.level}
        experience={point.experience}
      />
    );
  }

  return (
    <Container>
      <Description>
        {description}
      </Description>
      <Graph>
        <div>
          {points}
        </div>
      </Graph>
      <Legend>
        <div>1</div>
        <div>50</div>
        <div>100</div>
      </Legend>
    </Container>
  );
}

export default GrowthRate;
