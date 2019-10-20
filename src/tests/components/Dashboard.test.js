import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../../components/Dashboard';
import {createSerializer} from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));


it('renders without crashing', () => {
  const wrapper = shallow(<Dashboard />);
  expect(wrapper).toMatchSnapshot();
});