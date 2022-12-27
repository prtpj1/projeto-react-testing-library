import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

const POKEMON_ID = '/pokemons/25';
describe('Test if a card is rendered with infos of a specific pokemon', () => {
  test('Test if the card shows the correct pokemon name" ', () => {
    renderWithRouter(<App />);
    const pokemonName = screen.getByText(/Pikachu/i);

    expect(pokemonName).toBeInTheDocument();
  });

  test('Test if the card shows the correct pokemon type" ', () => {
    renderWithRouter(<App />);
    const pokemonType = screen.getByTestId('pokemon-type');

    expect(pokemonType.innerHTML).toMatch(/Electric/i);
  });

  test('Test if the pokemon img is showed with scr(URL) and alt w/ <name> sprite', () => {
    renderWithRouter(<App />);
    const img = screen.getByAltText(/Pikachu sprite/i);
    expect(img).toBeDefined();
    expect(img.src).toContain('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('Test if card has a link to details w/ URL /pokemons/<id>', () => {
    const { history } = renderWithRouter(<App />);

    const linkMoreDetails = screen.getByRole('link', { name: /more details/i });
    expect(linkMoreDetails).toBeInTheDocument();
    userEvent.click(linkMoreDetails);
    expect(history.location.pathname).toBe(POKEMON_ID);
  });

  test('Test if clicking on link is redirected to PokemonDetails page ', () => {
    const { history } = renderWithRouter(<App />);

    const linkMoreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkMoreDetails);
    expect(history.location.pathname).toBe(POKEMON_ID);
  });

  test('Test if there is a star icon if the pokemon is marked as favorite"', () => {
    const { history } = renderWithRouter(<App />);
    history.push(POKEMON_ID);
    userEvent.click(screen.getByRole('checkbox', { name: /pokémon favoritado/i }));

    const starIcon = screen.getByAltText(/Pikachu is marked as favorite/i);

    expect(starIcon).toBeDefined();
    expect(starIcon.src).toBe('http://localhost/star-icon.svg');
  });
});
