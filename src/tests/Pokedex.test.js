import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Test the Pokedex Component', () => {
  test('Test if exist a Heading h2 with the text "Encountered pokémons" ', () => {
    renderWithRouter(<App />);

    const pokedexH2 = screen.getAllByRole(
      'heading',
      { Level: 2,
        name: /Encountered pokémons/i },
    );
    expect(pokedexH2).toBeDefined();
  });
  test('Test the filter buttons', () => {
    renderWithRouter(<App />);

    const btnPokemonType = screen.getAllByTestId('pokemon-type-button');
    expect(btnPokemonType).toBeDefined();

    const btnFilterType = screen.getByRole('button', { name: /Psychic/i });
    expect(btnFilterType).toBeDefined();
    userEvent.click(btnFilterType);

    const psychicType = screen.getByTestId('pokemon-type');
    expect(psychicType.innerHTML).toMatch(/Psychic/i);

    const btnAll = screen.getByRole('button', { name: /All/i });
    expect(btnAll).toBeDefined();
  });

  test('Test if there exist the button "All"', () => {
    renderWithRouter(<App />);
    const btnAll = screen.getByRole('button', { name: /All/i });
    expect(btnAll).toBeDefined();
    userEvent.click(btnAll);
  });

  test('Test multiple clicks on button "Proximo Pokemon"', () => {
    renderWithRouter(<App />);
    const actualPokemon = screen.getByTestId('pokemon-name');
    const nextPokemon = screen.getByTestId('pokemon-name');

    expect(actualPokemon.innerHTML).toMatch(/Pikachu/i);
    userEvent.click(screen.getByRole('button', { name: /Próximo pokémon/i }));
    expect(nextPokemon.innerHTML).toMatch(/Charmander/i);
  });
});
