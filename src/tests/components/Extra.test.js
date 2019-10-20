import React from 'react';
import { shallow } from 'enzyme';
import Extra from '../../components/Extra';
import {createSerializer} from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));


it('renders without crashing', () => {
  const wrapper = shallow(<Extra />);
  expect(wrapper).toMatchSnapshot();
});