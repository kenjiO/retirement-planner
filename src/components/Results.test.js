import React from 'react';
import { shallow } from 'enzyme';
import Results from './Results';

it('renders without crashing', () => {
  shallow(<Results data={[]} />);
});
