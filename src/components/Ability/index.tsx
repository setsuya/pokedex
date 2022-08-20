import {
  AbilityProps,
} from '../../types';

import {
  BiLockAlt,
} from 'react-icons/bi';

import {
  Container,
  Name,
  Description,
  Separator,
} from './styles';

const Ability = (
  {
    name,
    isHidden,
    shortEffect,
  }:AbilityProps
) => {
  return (
    <Container>
      <Name>
        {name}{isHidden && <BiLockAlt />}
      </Name>
      <Separator />
      <Description>
        {shortEffect}
      </Description>
    </Container>
  );
};

export default Ability;
