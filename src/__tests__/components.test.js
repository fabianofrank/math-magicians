import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';
import Navbar from '../components/Navbar';
import CalculatorPage from '../components/calculator-page';
import HomePage from '../components/home-page';
import QuotesPage from '../components/quotes-page';

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
