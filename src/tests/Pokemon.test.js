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

// ! npx stryker run ./stryker/.conf.json

// Teste se é renderizado um card com as informações de determinado pokémon.
// O nome correto do Pokémon deve ser mostrado na tela;
// O tipo correto do pokémon deve ser mostrado na tela.
// O peso médio do pokémon deve ser exibido com um texto no formato Average weight: <value> <measurementUnit>; onde <value> e <measurementUnit> são, respectivamente, o peso médio do pokémon e sua unidade de medida.
// A imagem do Pokémon deve ser exibida. Ela deve conter um atributo src com a URL da imagem e um atributo alt com o texto <name> sprite, onde <name> é o nome do pokémon;

// Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon. O link deve possuir a URL /pokemons/<id>, onde <id> é o id do Pokémon exibido;

// Teste se ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon.
// Teste também se a URL exibida no navegador muda para /pokemon/<id>, onde <id> é o id do Pokémon cujos detalhes se deseja ver;

// Teste se existe um ícone de estrela nos Pokémons favoritados.
// O ícone deve ser uma imagem com o atributo src contendo o caminho /star-icon.svg;
// A imagem deve ter o atributo alt igual a <pokemon> is marked as favorite, onde <pokemon> é o nome do Pokémon exibido.
