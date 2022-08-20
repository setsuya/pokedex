import styled from 'styled-components';
import { lighten, darken, } from 'polished';

export const Tag = styled.span`
  font-variant: small-caps;
  font-weight: bold;
  color: #111;
  letter-spacing: 2px;
  transform: skewX(-20deg);

  & > div {
    transform: skewX(20deg);
  }

  &.small {
    font-size: 10px;
    padding: 0 10px;
  }

  &.medium {
    font-size: 13px;
    padding: 1px 15px;
  }

  &.large {
    font-size: 18px;
    padding: 0px 25px;
  }

  &.normal {
    background-color: #a8a878;
    border-top: 1px solid ${lighten(0.2, '#a8a878')};
    border-left: 1px solid ${lighten(0.2, '#a8a878')};
    border-right: 1px solid ${darken(0.2, '#a8a878')};
    border-bottom: 1px solid ${darken(0.2, '#a8a878')};
    color: ${darken(0.4, '#a8a878')};
  }

  &.fire {
    background-color: #f08030;
    border-top: 1px solid ${lighten(0.2, '#f08030')};
    border-left: 1px solid ${lighten(0.2, '#f08030')};
    border-right: 1px solid ${darken(0.2, '#f08030')};
    border-bottom: 1px solid ${darken(0.2, '#f08030')};
    color: ${darken(0.4, '#f08030')};
  }

  &.fighting {
    background-color: #c03028;
    border-top: 1px solid ${lighten(0.2, '#c03028')};
    border-left: 1px solid ${lighten(0.2, '#c03028')};
    border-right: 1px solid ${darken(0.2, '#c03028')};
    border-bottom: 1px solid ${darken(0.2, '#c03028')};
    color: ${darken(0.4, '#c03028')};
  }

  &.water {
    background-color: #6890f0;
    border-top: 1px solid ${lighten(0.2, '#6890f0')};
    border-left: 1px solid ${lighten(0.2, '#6890f0')};
    border-right: 1px solid ${darken(0.2, '#6890f0')};
    border-bottom: 1px solid ${darken(0.2, '#6890f0')};
    color: ${darken(0.4, '#6890f0')};
  }

  &.flying {
    background-color: #a890f0;
    border-top: 1px solid ${lighten(0.2, '#a890f0')};
    border-left: 1px solid ${lighten(0.2, '#a890f0')};
    border-right: 1px solid ${darken(0.2, '#a890f0')};
    border-bottom: 1px solid ${darken(0.2, '#a890f0')};
    color: ${darken(0.4, '#a890f0')};
  }

  &.grass {
    background-color: #78c850;
    border-top: 1px solid ${lighten(0.2, '#78c850')};
    border-left: 1px solid ${lighten(0.2, '#78c850')};
    border-right: 1px solid ${darken(0.2, '#78c850')};
    border-bottom: 1px solid ${darken(0.2, '#78c850')};
    color: ${darken(0.4, '#78c850')};
  }

  &.poison {
    background-color: #a040a0;
    border-top: 1px solid ${lighten(0.2, '#a040a0')};
    border-left: 1px solid ${lighten(0.2, '#a040a0')};
    border-right: 1px solid ${darken(0.2, '#a040a0')};
    border-bottom: 1px solid ${darken(0.2, '#a040a0')};
    color: ${darken(0.4, '#a040a0')};
  }

  &.electric {
    background-color: #f8d030;
    border-top: 1px solid ${lighten(0.2, '#f8d030')};
    border-left: 1px solid ${lighten(0.2, '#f8d030')};
    border-right: 1px solid ${darken(0.2, '#f8d030')};
    border-bottom: 1px solid ${darken(0.2, '#f8d030')};
    color: ${darken(0.4, '#f0d030')};
  }

  &.ground {
    background-color: #e0c068;
    border-top: 1px solid ${lighten(0.2, '#e0c068')};
    border-left: 1px solid ${lighten(0.2, '#e0c068')};
    border-right: 1px solid ${darken(0.2, '#e0c068')};
    border-bottom: 1px solid ${darken(0.2, '#e0c068')};
    color: ${darken(0.4, '#e0c068')};
  }

  &.psychic {
    background-color: #f85888;
    border-top: 1px solid ${lighten(0.2, '#f85888')};
    border-left: 1px solid ${lighten(0.2, '#f85888')};
    border-right: 1px solid ${darken(0.2, '#f85888')};
    border-bottom: 1px solid ${darken(0.2, '#f85888')};
    color: ${darken(0.4, '#f85858')};
  }

  &.rock {
    background-color: #b8a038;
    border-top: 1px solid ${lighten(0.2, '#b8a038')};
    border-left: 1px solid ${lighten(0.2, '#b8a038')};
    border-right: 1px solid ${darken(0.2, '#b8a038')};
    border-bottom: 1px solid ${darken(0.2, '#b8a038')};
    color: ${darken(0.4, '#b8a038')};
  }

  &.ice {
    background-color: #98d8d8;
    border-top: 1px solid ${lighten(0.2, '#98d8d8')};
    border-left: 1px solid ${lighten(0.2, '#98d8d8')};
    border-right: 1px solid ${darken(0.2, '#98d8d8')};
    border-bottom: 1px solid ${darken(0.2, '#98d8d8')};
    color: ${darken(0.4, '#98d8d8')};
  }

  &.bug {
    background-color: #a8b820;
    border-top: 1px solid ${lighten(0.2, '#a8b820')};
    border-left: 1px solid ${lighten(0.2, '#a8b820')};
    border-right: 1px solid ${darken(0.2, '#a8b820')};
    border-bottom: 1px solid ${darken(0.2, '#a8b820')};
    color: ${darken(0.4, '#a8b820')};
  }

  &.dragon {
    background-color: #7038f8;
    border-top: 1px solid ${lighten(0.2, '#7038f8')};
    border-left: 1px solid ${lighten(0.2, '#7038f8')};
    border-right: 1px solid ${darken(0.2, '#7038f8')};
    border-bottom: 1px solid ${darken(0.2, '#7038f8')};
    color: ${darken(0.4, '#7038f8')};
  }

  &.ghost {
    background-color: #705898;
    border-top: 1px solid ${lighten(0.2, '#705898')};
    border-left: 1px solid ${lighten(0.2, '#705898')};
    border-right: 1px solid ${darken(0.2, '#705898')};
    border-bottom: 1px solid ${darken(0.2, '#705898')};
    color: ${darken(0.4, '#705898')};
  }

  &.dark {
    background-color: #705848;
    border-top: 1px solid ${lighten(0.2, '#705848')};
    border-left: 1px solid ${lighten(0.2, '#705848')};
    border-right: 1px solid ${darken(0.2, '#705848')};
    border-bottom: 1px solid ${darken(0.2, '#705848')};
    color: ${darken(0.4, '#705848')};
  }

  &.steel {
    background-color: #b8b8d0;
    border-top: 1px solid ${lighten(0.2, '#b8b8d0')};
    border-left: 1px solid ${lighten(0.2, '#b8b8d0')};
    border-right: 1px solid ${darken(0.2, '#b8b8d0')};
    border-bottom: 1px solid ${darken(0.2, '#b8b8d0')};
    color: ${darken(0.4, '#b8b8d0')};
  }

  &.fairy {
    background-color: #ee99ac;
    border-top: 1px solid ${lighten(0.2, '#ee99ac')};
    border-left: 1px solid ${lighten(0.2, '#ee99ac')};
    border-right: 1px solid ${darken(0.2, '#ee99ac')};
    border-bottom: 1px solid ${darken(0.2, '#ee99ac')};
    color: ${darken(0.4, '#ee99ac')};
  }
`;
