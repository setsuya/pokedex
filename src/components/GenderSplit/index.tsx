import {
  GenderSplitProps,
} from '../../types';

import {
  BiMaleSign,
  BiFemaleSign,
} from 'react-icons/bi';

import {
  Container,
  Bar,
  MaleBar,
  FemaleBar,
  Split,
  MaleSplit,
  FemaleSplit,
} from './styles';

const GenderSplit = (
  {
    genderRate,
  }: GenderSplitProps
) => {
  return (
    <Container>
      <Bar>
        {genderRate !== -1 && (
          <>
            <MaleBar size={(8 - genderRate) * 12.5} />
            <FemaleBar size={genderRate * 12.5} />
          </>
        )}
      </Bar>
      <Split>
        <MaleSplit><BiMaleSign />{genderRate !== -1 ? (8 - genderRate) * 12.5 : 0}%</MaleSplit>
        <FemaleSplit>{genderRate !== -1 ? genderRate * 12.5 : 0}%<BiFemaleSign /></FemaleSplit>
      </Split>
    </Container>
  );
};

export default GenderSplit;
