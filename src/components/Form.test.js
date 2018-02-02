import React from 'react';
import { mount, shallow } from 'enzyme';
import _ from 'lodash';
import Form from './Form';

it('renders without crashing', () => {
  shallow(<Form updateResults={() => {}} />);
});

it('calls updateResults with new age when age changed', () => {
  const spy = jest.fn();
  const wrapper = shallow(<Form updateResults={spy} />);
  wrapper
    .find('input[name="age"]')
    .simulate('change', { target: { name: 'age', value: '10' } });
  expect(wrapper.state('age')).toBe('10');
  expect(_.last(spy.mock.calls)[0].age).toBe(10);
});

it('calls updateResults with new retirementAge when retirementAge changed', () => {
  const spy = jest.fn();
  const wrapper = shallow(<Form updateResults={spy} />);
  wrapper
    .find('input[name="age"]')
    .simulate('change', { target: { name: 'retirementAge', value: '83' } });
  expect(wrapper.state('retirementAge')).toEqual('83');
  expect(_.last(spy.mock.calls)[0].retirementAge).toBe(83);
});

it('calls updateResults with new savings when savings changed', () => {
  const spy = jest.fn();
  const wrapper = shallow(<Form updateResults={spy} />);
  wrapper
    .find('input[name="savings"]')
    .simulate('change', { target: { name: 'savings', value: '6727' } });
  expect(wrapper.state('savings')).toEqual('6727');
  expect(_.last(spy.mock.calls)[0].savings).toBe(6727);
});

it('calls updateResults with new contribution when contribution changed', () => {
  const spy = jest.fn();
  const wrapper = shallow(<Form updateResults={spy} />);
  wrapper
    .find('input[name="contribution"]')
    .simulate('change', { target: { name: 'contribution', value: '833' } });
  expect(wrapper.state('contribution')).toEqual('833');
  expect(_.last(spy.mock.calls)[0].contribution).toBe(833);
});

it('calls updateResults with new returnRate when returnRate changed', () => {
  const spy = jest.fn();
  const wrapper = shallow(<Form updateResults={spy} />);
  wrapper
    .find('input[name="returnRate"]')
    .simulate('change', { target: { name: 'returnRate', value: '.03' } });
  expect(wrapper.state('returnRate')).toEqual('.03');
  expect(_.last(spy.mock.calls)[0].returnRate).toBe(0.03);
});
