import {
  TypeTagProps,
} from '../../types';

import {
  Tag,
} from './styles';

const TypeTag = (
  {
    type = 'normal',
    size = 'small',
  }: TypeTagProps
) => {
  return (
    <Tag className={`${type.toLowerCase()} ${size.toLowerCase()}`}>
      <div>{type}</div>
    </Tag>
  );
};

export default TypeTag;
