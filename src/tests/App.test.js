import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

test('Tests if there is nav links at top of screen', () => {
  renderWithRouter(<App />);

  const linkHome = screen.getByRole('link', { name: /home/i });
  const linkAbout = screen.getByRole('link', { name: /about/i });
  const linkFavorite = screen.getByRole('link', { name: /favorite/i });

  expect(linkHome).toBeInTheDocument();
  // userEvent.click(linkHome);
  expect(linkAbout).toBeInTheDocument();
  // userEvent.click(linkAbout);
  expect(linkFavorite).toBeInTheDocument();
  // userEvent.click(linkFavorite);
});

// ! npx stryker run ./stryker/Pokedex.conf.json

// Teste se o topo da aplicação contém um conjunto fixo de links de navegação.

// ? O primeiro link deve possuir o texto Home.

// ? O segundo link deve possuir o texto About.

// ? O terceiro link deve possuir o texto Favorite Pokémons.

// Teste se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação.

// Teste se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação.

// Teste se a aplicação é redirecionada para a página de Pokémons Favoritados, na URL /favorites, ao clicar no link Favorite Pokémons da barra de navegação.

// Teste se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida.
