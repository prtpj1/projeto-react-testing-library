import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import { FavoritePokemons } from '../components';

test('Tests if its showed the message "No favorite pokemon found"', async () => {
  renderWithRouter(<FavoritePokemons />);

  const noFav = await screen.findByText(/No favorite pokemon/i);
  // console.log(noFav);

  expect(noFav).toBeInTheDocument();
});

// ! npx stryker run ./stryker/.conf.json

// * Teste se é exibido na tela a mensagem No favorite pokemon found, se a pessoa não tiver pokémons favoritos.

// todo Teste se é exibido todos os cards de pokémons favoritados.
