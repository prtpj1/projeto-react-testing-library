import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
// import { Pokemon } from '../components';

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
});

// ! npx stryker run ./stryker/.conf.json

// * Teste se página contém um heading h2 com o texto Encountered pokémons.

// todo Teste se é exibido o próximo Pokémon da lista quando o botão Próximo pokémon é clicado.

// todo O botão deve conter o texto Próximo pokémon;

// todo Os próximos Pokémons da lista devem ser mostrados, um a um, ao clicar sucessivamente no botão;

// todo O primeiro Pokémon da lista deve ser mostrado ao clicar no botão, se estiver no último Pokémon da lista;

// todo Teste se é mostrado apenas um Pokémon por vez.

// ? Teste se a Pokédex tem os botões de filtro.

// ? Deve existir um botão de filtragem para cada tipo de Pokémon, sem repetição.

// ? A partir da seleção de um botão de tipo, a Pokédex deve circular somente pelos pokémons daquele tipo;

// ? O texto do botão deve corresponder ao nome do tipo, ex. Psychic;

// ? O botão All precisa estar sempre visível.

// todo Teste se a Pokédex contém um botão para resetar o filtro

// todo O texto do botão deve ser All;

// todo A Pokedéx deverá mostrar os Pokémons normalmente (sem filtros) quando o botão All for clicado;

// todo Ao carregar a página, o filtro selecionado deverá ser All;
