import * as React from 'react';
import { shallow } from 'enzyme';
import Number2Words from '../Number2Words';

test('The text should be three', () => {
  const component = shallow(<Number2Words value={3}/>);

  expect(component.text()).toMatch('three');

  expect(component).toMatchSnapshot();
});

test('The text should be eight hundred ninety four', () => {
  const component = shallow(<Number2Words value={894} />);

  expect(component.text()).toMatch('eight hundred ninety four');

  expect(component).toMatchSnapshot();
});

const word = 'fourteen billion six hundred million seven hundred twenty eight thousand one hundred ninety five';
test(`The text should be ${word}`, () => {
  const component = shallow(<Number2Words value={14600728195} />);

  expect(component.text()).toMatch(word);

  expect(component).toMatchSnapshot();
});
