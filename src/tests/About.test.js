import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import { About } from '../components';

test('Tests if there is information about Pokedex on screen', () => {
  renderWithRouter(<About />);

  const aboutH2 = screen.getAllByRole(
    'heading',
    { Level: 2,
      name: /About Pokédex/i },
  );
  const aboutParag1 = screen.queryByText(/This application simulates/i);
  const aboutParag2 = screen.queryByText(/One can filter Pokémons by type/i);
  const imgAbout = screen.getByRole('img', { name: /Pokédex/i });
  // console.log(imgAbout);

  expect(aboutH2).toBeDefined();
  expect(aboutParag1).toBeDefined();
  expect(aboutParag2).toBeDefined();
  expect(imgAbout.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});

// ! npx stryker run ./stryker/.conf.json

// ? Teste se a página contém as informações sobre a Pokédex.

// * Teste se a página contém um heading h2 com o texto About Pokédex.

// * Teste se a página contém dois parágrafos com texto sobre a Pokédex.

// ToDo: Teste se a página contém a seguinte imagem de uma Pokédex: 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png.'
