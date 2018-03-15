import React from 'react';
import { mount, shallow } from 'enzyme';
import _ from 'lodash';
import Form from './Form';

it('renders without crashing', () => {
  shallow(<Form updateResults={() => {}} />);
});

it('calls updateResults with new age when age1 changed', () => {
  const spy = jest.fn();
  const wrapper = shallow(<Form updateResults={spy} />);
  wrapper
    .find('input[name="age1"]')
    .simulate('change', { target: { name: 'age1', value: '10' } });
  expect(wrapper.state('age1')).toBe('10');
  expect(_.last(spy.mock.calls)[0].age1).toBe(10);
});

it('calls updateResults with new age when age2 changed', () => {
  const spy = jest.fn();
  const wrapper = shallow(<Form updateResults={spy} />);
  wrapper
    .find('input[name="age2"]')
    .simulate('change', { target: { name: 'age2', value: '22' } });
  expect(wrapper.state('age2')).toBe('22');
  expect(_.last(spy.mock.calls)[0].age2).toBe(22);
});

it('calls updateResults with new retirementAge when retirementAge1 changed', () => {
  const spy = jest.fn();
  const wrapper = shallow(<Form updateResults={spy} />);
  wrapper
    .find('input[name="retirementAge1"]')
    .simulate('change', { target: { name: 'retirementAge1', value: '83' } });
  expect(wrapper.state('retirementAge1')).toEqual('83');
  expect(_.last(spy.mock.calls)[0].retirementAge1).toBe(83);
});

it('calls updateResults with new retirementAge when retirementAge2 changed', () => {
  const spy = jest.fn();
  const wrapper = shallow(<Form updateResults={spy} />);
  wrapper
    .find('input[name="retirementAge2"]')
    .simulate('change', { target: { name: 'retirementAge2', value: '84' } });
  expect(wrapper.state('retirementAge2')).toEqual('84');
  expect(_.last(spy.mock.calls)[0].retirementAge2).toBe(84);
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

it('calls updateResults with new contribution when contribution1 changed', () => {
  const spy = jest.fn();
  const wrapper = shallow(<Form updateResults={spy} />);
  wrapper
    .find('input[name="contribution1"]')
    .simulate('change', { target: { name: 'contribution1', value: '833' } });
  expect(wrapper.state('contribution1')).toEqual('833');
  expect(_.last(spy.mock.calls)[0].contribution1).toBe(833);
});

it('calls updateResults with new contribution when contribution2 changed', () => {
  const spy = jest.fn();
  const wrapper = shallow(<Form updateResults={spy} />);
  wrapper
    .find('input[name="contribution2"]')
    .simulate('change', { target: { name: 'contribution2', value: '222' } });
  expect(wrapper.state('contribution2')).toEqual('222');
  expect(_.last(spy.mock.calls)[0].contribution2).toBe(222);
});

it('calls updateResults with new returnRate when returnRate changed', () => {
  const spy = jest.fn();
  const wrapper = shallow(<Form updateResults={spy} />);
  wrapper
    .find('input[name="returnRate"]')
    .simulate('change', { target: { name: 'returnRate', value: '3' } });
  expect(wrapper.state('returnRate')).toEqual('3');
  expect(_.last(spy.mock.calls)[0].returnRate).toBe(0.03);
});
