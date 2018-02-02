import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Form from './Form';
import Results from './Results';

it('renders without crashing', () => {
  shallow(<App />);
});

it('contains a Form component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Form).length).toBe(1);
});

it('contains a Result component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Results).length).toBe(1);
});
