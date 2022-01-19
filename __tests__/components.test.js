import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../src/components/Calculator';
import Navbar from '../src/components/Navbar';
import CalculatorPage from '../src/components/calculator-page';
import HomePage from '../src/components/home-page';
import QuotesPage from '../src/components/quotes-page';

it('renders correctly', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Navbar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<CalculatorPage />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<HomePage />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<QuotesPage />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
