import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';
// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// Enzyme.configure({ adapter: new Adapter() });

it('expect to render Card Component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'Juan Snow',
      username: 'JuanNieves',
      email: 'juan@gmail.com'
    }
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
