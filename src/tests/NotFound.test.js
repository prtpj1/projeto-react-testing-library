import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import { NotFound } from '../components';

test('Test the NotFound Component', () => {
  renderWithRouter(<NotFound />);

  const notFoundH2 = screen.getByRole(
    'heading',
    { Level: 2,
      name: /Page requested not found/i },
  );

  const notFoundImg = screen.getByRole('img',
    { name: /Pikachu crying because the page requested was not found/i });

 
  expect(notFoundImg.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');

  expect(notFoundH2).toBeInTheDocument();
});
