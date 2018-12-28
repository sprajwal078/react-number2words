import * as React from 'react';
import { shallow } from 'enzyme';
import Number2Words from '../Number2Words';

describe('International System', () => {
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
});

describe('Hindu Arabic System', () => {
  describe('English', () => {
    const word = `fourteen arab
                  sixty crore
                  seven lakh
                  twenty eight thousand
                  one hundred ninety five`.replace(/\s+/g, ' ');
    test(`The text should be three ${word}`, () => {
      const component = shallow(<Number2Words value={14600728195} system="hinduArabic"/>);

      expect(component.text()).toMatch(word);

      expect(component).toMatchSnapshot();
    });
  });

  describe('Nepali', () => {
    const word = `चौध अर्ब साठ्ठी करोड सात लाख अठ्ठाइस हजार एक सय पन्चान्नब्बे`;
    test(`The text should be three ${word}`, () => {
      const component = shallow(<Number2Words value={14600728195} system="hinduArabic" language="np"/>);

      expect(component.text()).toMatch(word);

      expect(component).toMatchSnapshot();
    });
  });
});
