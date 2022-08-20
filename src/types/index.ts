export type TypeTagProps = {
  type: string,
  size?: string,
};

export type LoaderProps = {
  text?: string,
};

export type AbilityProps = {
  name: string,
  isHidden: boolean,
  shortEffect: string,
};

export type GenderSplitProps = {
  genderRate: number,
};

export type StatsProps = {
  hp: number,
  attack: number,
  defense: number,
  specialAttack: number,
  specialDefense: number,
  speed: number,
};

export type MoveProps = {
  moveInfo: {
    display_name: string,
    type: string,
    damage_class: string,
    accuracy?: number,
    power?: number,
    pp: number,
    short_effect: string,
  }
};

export interface MoveClassInterface {
  [key: string]: string,
};

export type EffortValuesProps = {
  hp: number,
  attack: number,
  defense: number,
  specialAttack: number,
  specialDefense: number,
  speed: number,
};

interface LevelsInterface {
  level: number,
  experience: number,
};

export type GrowthRateProps = {
  levels: LevelsInterface[],
  description: string,
};

export interface PokemonInterface {
  main_data: any,
  species_data: any,
  growth_data: any,
};

export interface GenericLanguageInterface {
  language: {
    name: string,
  },
  name?: string,
  short_effect?: string,
  description?: string,
};
