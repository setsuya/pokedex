import React, {
  useState,
  useEffect,
  useCallback,
  ChangeEvent,
} from 'react';
import './App.css';

import {
  getPokemon,
} from './api';
import {
  translate,
  getCaptureRate,
  getHatchSteps,
} from './helpers';

import {
  PokemonInterface,
} from './types';

import TypeTag from './components/TypeTag';
import GenderSplit from './components/GenderSplit';
import Ability from './components/Ability';
import EffortValues from './components/EffortValues';
import Stats from './components/Stats';
import GrowthRate from './components/GrowthRate';
import Move from './components/Move';
import Loader from './components/Loader';

import {
  AppTitle,
  Header,
  SearchBar,
  Icon,
  Input,
  Button,
  Row,
  Column,
  Title,
  Portrait,
  Name,
  Genera,
  Types,
  Data,
  Abilities,
  EggGroups,
  EggGroup,
  Moves,
} from './styles';

import {
  BiCaretLeft,
  BiCaretRight,
  BiSearchAlt2,
  BiHash,
} from 'react-icons/bi';

const App = () => {
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInterface>();
  const [pokemonNumber, setPokemonNumber] = useState<number>(1);

  const getInfo = useCallback(async (number: number) => {
    setPokemonInfo(undefined);

    const data: PokemonInterface = await getPokemon(number);

    setPokemonInfo(data);
  }, []);

  useEffect(() => {
    getInfo(1);
  }, [getInfo]);

  return (
    <div className="App">
      <AppTitle>
        Pokédex
      </AppTitle>
      <Header>
        <BiCaretLeft
          className="button"
          onClick={() => {
            if (pokemonInfo && pokemonInfo.main_data.id > 1) {
              getInfo(pokemonInfo.main_data.id - 1);
            }
          }}
        />
        <SearchBar>
          <Icon>
            <BiHash />
          </Icon>
          <Input
            type="number"
            min="1"
            max="898"
            step="1"
            value={pokemonNumber}
            onChange={(ev: ChangeEvent<HTMLInputElement>) => {
              setPokemonNumber(Number(ev.target.value));
            }}
          />
          <Button
            onClick={() => {
              getInfo(pokemonNumber);
            }}
            disabled={!pokemonNumber || pokemonNumber < 1 || pokemonNumber > 898}
          >
            <BiSearchAlt2 />
          </Button>
        </SearchBar>
        <BiCaretRight
          className="button"
          onClick={() => {
            if (pokemonInfo && pokemonInfo.main_data.id < 898) {
              getInfo(pokemonInfo.main_data.id + 1);
            }
          }}
        />
      </Header>
      {pokemonInfo ? (
        <>
          <Row>
            <Column size="full">
              <Portrait
                src={pokemonInfo.main_data.sprites.front_default}
                alt={translate(pokemonInfo.species_data.names, 'name')}
              />
            </Column>
          </Row>
          <Row>
            <Column size="full">
              <Name>
                #{pokemonInfo.main_data.id} {translate(pokemonInfo.species_data.names, 'name')}
              </Name>
            </Column>
          </Row>
          <Row>
            <Column size="full">
              <Genera>
                {translate(pokemonInfo.species_data.genera, 'genus')}
              </Genera>
            </Column>
          </Row>
          <Row>
            <Column size="full">
              <Types>
                {pokemonInfo.main_data.types.map((item: any) => {
                  return (
                    <TypeTag
                      key={`type_${item.type.name}`}
                      type={item.type.name}
                      size="large"
                    />
                  );
                })}
              </Types>
            </Column>
          </Row>
          <Row>
            <Column size="half">
              <Title>Weight</Title>
              <Data>{(pokemonInfo.main_data.weight / 10).toFixed(2)}kg</Data>
            </Column>
            <Column size="half">
              <Title>Height</Title>
              <Data>{(pokemonInfo.main_data.height / 10).toFixed(2)}m</Data>
            </Column>
          </Row>
          <Row>
            <Column size="full">
              <Title>Gender split</Title>
              <GenderSplit
                genderRate={pokemonInfo.species_data.gender_rate}
              />
            </Column>
          </Row>
          <Row>
            <Column size="full">
              <Title>Abilities</Title>
              <Abilities>
                {pokemonInfo.main_data.abilities.map((item: any, index: number) => {
                  return (
                    <Ability
                      key={`ability_${index}`}
                      name={item.display_name}
                      isHidden={item.is_hidden}
                      shortEffect={item.short_effect}
                    />
                  );
                })}
              </Abilities>
            </Column>
          </Row>
          <Row>
            <Column size="full">
              <Title>Egg groups</Title>
              <EggGroups>
                {(pokemonInfo.species_data.egg_groups.length > 0) && (pokemonInfo.species_data.egg_groups[0].name !== 'no-eggs') ? pokemonInfo.species_data.egg_groups.map((item: any) => {
                  return (
                    <EggGroup
                      key={item.name}
                    >
                      {item.display_name}
                    </EggGroup>
                  );
                }) : (
                  <EggGroup>
                    -----
                  </EggGroup>
                )}
              </EggGroups>
            </Column>
          </Row>
          <Row>
            <Column size="half">
              <Title>Happiness</Title>
              <Data>{pokemonInfo.species_data.base_happiness}</Data>
            </Column>
            <Column size="half">
              <Title>Hatch steps</Title>
              <Data>{getHatchSteps(pokemonInfo.species_data.hatch_counter)}</Data>
            </Column>
          </Row>
          <Row>
            <Column size="half">
              <Title>Experience</Title>
              <Data>{pokemonInfo.main_data.base_experience}</Data>
            </Column>
            <Column size="half">
              <Title>Catch chance</Title>
              <Data>{getCaptureRate(pokemonInfo.species_data.capture_rate)}</Data>
            </Column>
          </Row>
          <Row>
            <Column size="full">
              <Title>Effort values</Title>
              <EffortValues
                hp={pokemonInfo.main_data.stats[0].effort}
                attack={pokemonInfo.main_data.stats[1].effort}
                defense={pokemonInfo.main_data.stats[2].effort}
                specialAttack={pokemonInfo.main_data.stats[3].effort}
                specialDefense={pokemonInfo.main_data.stats[4].effort}
                speed={pokemonInfo.main_data.stats[5].effort}
              />
            </Column>
          </Row>
          <Row>
            <Column size="full">
              <Title>Stats</Title>
              <Stats
                hp={pokemonInfo.main_data.stats[0].base_stat}
                attack={pokemonInfo.main_data.stats[1].base_stat}
                defense={pokemonInfo.main_data.stats[2].base_stat}
                specialAttack={pokemonInfo.main_data.stats[3].base_stat}
                specialDefense={pokemonInfo.main_data.stats[4].base_stat}
                speed={pokemonInfo.main_data.stats[5].base_stat}
              />
            </Column>
          </Row>
          <Row>
            <Column size="full">
              <Title>Growth rate</Title>
              <GrowthRate
                levels={pokemonInfo.growth_data.levels}
                description={translate(pokemonInfo.growth_data.descriptions, 'description')}
              />
            </Column>
          </Row>
          <Row>
            <Column size="full">
              <Title>Moves</Title>
              <Moves>
                {pokemonInfo.main_data.moves.map((item: any, index: number) => {
                  return (
                    <Move
                      key={`move_${index}`}
                      moveInfo={item}
                    />
                  );
                })}
              </Moves>
            </Column>
          </Row>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
