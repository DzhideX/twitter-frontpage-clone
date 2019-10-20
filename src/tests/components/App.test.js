import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';
import {createSerializer} from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));


it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});