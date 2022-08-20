import axios from 'axios';

import {
  PokemonInterface,
} from '../types';

import {
  translate,
} from '../helpers';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export const getPokemon = async (number: number) => {
  console.log('Fetching main data...');
  const data = await api.get(`/pokemon/${number}`);

  console.log('Fetching species...');
  const species = await api.get(data.data.species.url);

  console.log('Fetching growth rate...');
  const growthRate = await api.get(species.data.growth_rate.url);

  console.log('Fetching abilities...');
  for (let i = 0; i < data.data.abilities.length; i++) {
    let item = data.data.abilities[i];

    const ability = await api.get(item.ability.url);

    item = {...item,
      display_name: translate(ability.data.names, 'name'),
      short_effect: translate(ability.data.effect_entries, 'short_effect'),
    };

    data.data.abilities[i] = item;
  }

  console.log('Fetching egg groups...');
  for (let i = 0; i < species.data.egg_groups.length; i++) {
    let item = species.data.egg_groups[i];

    const eggGroup = await api.get(item.url);

    item = {...item,
      display_name: translate(eggGroup.data.names, 'name'),
    };

    species.data.egg_groups[i] = item;
  }

  console.log('Fetching moves...');
  const movesPromises = [];

  for (const item of data.data.moves) {
    movesPromises.push(api.get(item.move.url));
  }

  await Promise.allSettled(movesPromises)
    .then(async (results: any) => {
      for (let i = 0; i < results.length; i++) {
        if (results[i].status === 'fulfilled') {
          let item = data.data.moves[i];

          item = {...item,
            display_name: translate(results[i].value.data.names, 'name'),
            type: results[i].value.data.type.name,
            damage_class: results[i].value.data.damage_class.name,
            short_effect: results[i].value.data.effect_entries.length ? translate(results[i].value.data.effect_entries, 'short_effect').replace(/\$effect_chance/g, results[i].value.data.effect_chance) : '?????',
            accuracy: results[i].value.data.accuracy,
            power: results[i].value.data.power,
            pp: results[i].value.data.pp,
          };

          data.data.moves[i] = item;
        } else {
          let item = data.data.moves[i];

          item = {...item,
            display_name: '?????',
            type: 'normal',
            damage_class: 'special',
            short_effect: '?????',
            accuracy: '???',
            power: '???',
            pp: '??',
          };

          data.data.moves[i] = item;
        }
      }
    });

  const result: PokemonInterface = {
    main_data: data.data,
    species_data: species.data,
    growth_data: growthRate.data,
  };

  return result;
};
