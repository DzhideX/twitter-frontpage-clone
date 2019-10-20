import React from 'react';
import { shallow } from 'enzyme';
import Navigation from '../../components/Navigation';
import {createSerializer} from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));


it('renders without crashing', () => {
  const wrapper = shallow(<Navigation />);
  expect(wrapper).toMatchSnapshot();
});