import {
  MoveProps,
  MoveClassInterface,
} from '../../types';

import TypeTag from '../TypeTag';

import {
  Container,
  Stats,
  Stat,
  MainInfo,
  Name,
  Item,
  Description,
  Separator,
} from './styles';

const Move = (
  {
    moveInfo,
  }: MoveProps
) => {
  const moveClass: MoveClassInterface = {
    physical: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAOCAMAAAALzYw2AAAALHRFWHRDcmVhdGlvbiBUaW1lAFN1biAyMCBNYXIgMjAxMSAxMzo1ODo0NiAtMDAwMDdCvcMAAAAHdElNRQfbAxQNOweG+BWcAAAACXBIWXMAAAsSAAALEgHS3X78AAAABGdBTUEAALGPC/xhBQAAAAxQTFRFcyEI91Ix/8Yx/5xC6MB4SwAAAFhJREFUeNp9kIEKACEIQ9f2//98KpWeRYPEfNCawFOjiL/bhpI1YlShQdAASchOh06ncpSe6GxDsWqaLgioIKB75rMXz/zQkXPUKJcluG/UcwneIHLU2UMfND4Be8c88CUAAAAASUVORK5CYII=',
    special: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAOCAMAAAALzYw2AAAALHRFWHRDcmVhdGlvbiBUaW1lAFN1biAyMCBNYXIgMjAxMSAxMzo1OToxMSAtMDAwMFXH5hcAAAAHdElNRQfbAxQNOxgL8BhpAAAACXBIWXMAAAsSAAALEgHS3X78AAAABGdBTUEAALGPC/xhBQAAAAxQTFRFSjlSUnOtlLXext7/Zrz2swAAAGNJREFUeNp9kNEWgCAIQ8f8/3+OQVaIuSfOriADOMp+9YUcErGBdFviix8oZN5owqiQ/jxaRXj3TuiWXI3MssNYvkPSMBh7+ehlrAjgC+W3FZoi2IyCNafsPAJazqzrPc9nvwAiSAFis2pBTQAAAABJRU5ErkJggg==',
    status: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAOCAMAAAALzYw2AAAALHRFWHRDcmVhdGlvbiBUaW1lAFN1biAyMCBNYXIgMjAxMSAxMzo1OTozOCAtMDAwMIJ6pLkAAAAHdElNRQfbAxQNOzA+RbCTAAAACXBIWXMAAAsSAAALEgHS3X78AAAABGdBTUEAALGPC/xhBQAAAAxQTFRFUlJSraWUxsa9////2hlPbgAAAFlJREFUeNp9kNEWgDAIQgn//58Tmzk7Nh65OhzAUdevdkiTiAHSbYmFXygUu3SMDhnj8a4hdxM+w5aaoBIHSGYM6+KEnrOoIDqUyfVX4nNt5XG3WiG9z3PtN0TIAZCXwzOqAAAAAElFTkSuQmCC',
  };

  return (
    <Container>
      <MainInfo>
        <Name>
          {moveInfo.display_name}
        </Name>
        <Item>
          <TypeTag type={moveInfo.type} />
        </Item>
        <Item>
          <img src={moveClass[moveInfo.damage_class]} alt={moveInfo.damage_class} />
        </Item>
      </MainInfo>
      <Stats>
        <Stat>
          <div>Accuracy</div>
          <div>{moveInfo.accuracy ? `${moveInfo.accuracy}%` : '---'}</div>
        </Stat>
        <Stat>
          <div>Power</div>
          <div>{moveInfo.power ? moveInfo.power : '---'}</div>
        </Stat>
        <Stat>
          <div>PP</div>
          <div>{moveInfo.pp}</div>
        </Stat>
      </Stats>
      <Separator />
      <Description>
        {moveInfo.short_effect}
      </Description>
    </Container>
  );
};

export default Move;
