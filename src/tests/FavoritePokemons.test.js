import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import { FavoritePokemons } from '../components';

test('Tests if its showed the message "No favorite pokemon found"', async () => {
  renderWithRouter(<FavoritePokemons />);

  const noFav = await screen.findByText(/No favorite pokemon/i);
  
  expect(noFav).toBeInTheDocument();
});
