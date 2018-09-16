import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// Enzyme.configure({ adapter: new Adapter() });

it('expect to render Card Component', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
