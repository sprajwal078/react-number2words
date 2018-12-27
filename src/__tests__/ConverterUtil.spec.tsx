import { ConverterUtil } from '../converterUtil';

describe('ConverterUtil', () => {
  test('util should exist', () => {
    expect(new ConverterUtil(2)).toBeTruthy();
  });

  describe('sub 20s', () => {
    test('0 should be one', () => {
      expect(new ConverterUtil(0).getWords()).toMatch('zero');
    });
    test('1 should be one', () => {
      expect(new ConverterUtil(1).getWords()).toMatch('one');
    });
    test('2 should be two', () => {
      expect(new ConverterUtil(2).getWords()).toMatch('two');
    });
    test('3 should be three', () => {
      expect(new ConverterUtil(3).getWords()).toMatch('three');
    });
    test('4 should be four', () => {
      expect(new ConverterUtil(4).getWords()).toMatch('four');
    });
    test('5 should be five', () => {
      expect(new ConverterUtil(5).getWords()).toMatch('five');
    });
    test('6 should be six', () => {
      expect(new ConverterUtil(6).getWords()).toMatch('six');
    });
    test('7 should be seven', () => {
      expect(new ConverterUtil(7).getWords()).toMatch('seven');
    });
    test('8 should be eight', () => {
      expect(new ConverterUtil(8).getWords()).toMatch('eight');
    });
    test('9 should be nine', () => {
      expect(new ConverterUtil(9).getWords()).toMatch('nine');
    });
    test('10 should be ten', () => {
      expect(new ConverterUtil(10).getWords()).toMatch('ten');
    });
    test('11 should be eleven', () => {
      expect(new ConverterUtil(11).getWords()).toMatch('eleven');
    });
    test('12 should be twelve', () => {
      expect(new ConverterUtil(12).getWords()).toMatch('twelve');
    });
    test('13 should be thirteen', () => {
      expect(new ConverterUtil(13).getWords()).toMatch('thirteen');
    });
    test('14 should be fourteen', () => {
      expect(new ConverterUtil(14).getWords()).toMatch('fourteen');
    });
    test('15 should be fifteen', () => {
      expect(new ConverterUtil(15).getWords()).toMatch('fifteen');
    });
    test('16 should be sixteen', () => {
      expect(new ConverterUtil(16).getWords()).toMatch('sixteen');
    });
    test('17 should be seventeen', () => {
      expect(new ConverterUtil(17).getWords()).toMatch('seventeen');
    });
    test('18 should be eighteen', () => {
      expect(new ConverterUtil(18).getWords()).toMatch('eighteen');
    });
    test('19 should be nineteen', () => {
      expect(new ConverterUtil(19).getWords()).toMatch('nineteen');
    });
  });

  describe('negative number', () => {
    test('-13 should be minus thirteen', () => {
      expect(new ConverterUtil(-13).getWords()).toMatch('minus thirteen');
    });
  });

  describe('tenths', () => {
    test('10 should be ten', () => {
      expect(new ConverterUtil(10).getWords()).toMatch('ten');
    });
    test('20 should be twenty', () => {
      expect(new ConverterUtil(20).getWords()).toMatch('twenty');
    });
    test('30 should be thirty', () => {
      expect(new ConverterUtil(30).getWords()).toMatch('thirty');
    });
    test('40 should be forty', () => {
      expect(new ConverterUtil(40).getWords()).toMatch('forty');
    });
    test('50 should be fifty', () => {
      expect(new ConverterUtil(50).getWords()).toMatch('fifty');
    });
    test('60 should be sixty', () => {
      expect(new ConverterUtil(60).getWords()).toMatch('sixty');
    });
    test('70 should be seventy', () => {
      expect(new ConverterUtil(70).getWords()).toMatch('seventy');
    });
    test('80 should be eighty', () => {
      expect(new ConverterUtil(80).getWords()).toMatch('eighty');
    });
    test('90 should be ninety', () => {
      expect(new ConverterUtil(90).getWords()).toMatch('ninety');
    });
    test('100 should be one hundred', () => {
      expect(new ConverterUtil(100).getWords()).toMatch('one hundred');
    });
    test('1000 should be one thousand', () => {
      expect(new ConverterUtil(1000).getWords()).toMatch('one thousand');
    });
    test('10000 should be ten thousand', () => {
      expect(new ConverterUtil(10000).getWords()).toMatch('ten thousand');
    });
    test('100000 should be one hundred thousand', () => {
      expect(new ConverterUtil(100000).getWords()).toMatch('one hundred thousand');
    });
    test('1000000 should be one million', () => {
      expect(new ConverterUtil(1000000).getWords()).toMatch('one million');
    });
    test('10000000 should be ten million', () => {
      expect(new ConverterUtil(10000000).getWords()).toMatch('ten million');
    });
    test('100000000 should be one hundred million', () => {
      expect(new ConverterUtil(100000000).getWords()).toMatch('one hundred million');
    });
    test('1000000000 should be one billion', () => {
      expect(new ConverterUtil(1000000000).getWords()).toMatch('one billion');
    });
    test('10000000000 should be ten billion', () => {
      expect(new ConverterUtil(10000000000).getWords()).toMatch('ten billion');
    });
    test('100000000000 should be one hundred billion', () => {
      expect(new ConverterUtil(100000000000).getWords()).toMatch('one hundred billion');
    });
    test('1000000000000 should be one trillion', () => {
      expect(new ConverterUtil(1000000000000).getWords()).toMatch('one trillion');
    });
    test('10000000000000 should be ten trillion', () => {
      expect(new ConverterUtil(10000000000000).getWords()).toMatch('ten trillion');
    });
    test('100000000000000 should be one hundred trillion', () => {
      expect(new ConverterUtil(100000000000000).getWords()).toMatch('one hundred trillion');
    });
    test('1000000000000000 should be empty', () => {
      expect(new ConverterUtil(1000000000000000).getWords()).toMatch('');
    });
  });

  describe('100 to 999', () => {
    test('123 should be one hundred twenty three', () => {
      expect(new ConverterUtil(123).getWords()).toMatch('one hundred twenty three');
    });
    test('257 should be two hundred fifty seven', () => {
      expect(new ConverterUtil(257).getWords()).toMatch('two hundred fifty seven');
    });
    test('382 should be three hundred eighty two', () => {
      expect(new ConverterUtil(382).getWords()).toMatch('three hundred eighty two');
    });
    test('495 should be four hundred ninety five', () => {
      expect(new ConverterUtil(495).getWords()).toMatch('four hundred ninety five');
    });
    test('572 should be five hundred seventy two', () => {
      expect(new ConverterUtil(572).getWords()).toMatch('five hundred seventy two');
    });
    test('690 should be six hundred ninety', () => {
      expect(new ConverterUtil(690).getWords()).toMatch('six hundred ninety');
    });
    test('765 should be seven hundred sixty five', () => {
      expect(new ConverterUtil(765).getWords()).toMatch('seven hundred sixty five');
    });
    test('878 should be eight hundred seventy eight', () => {
      expect(new ConverterUtil(878).getWords()).toMatch('eight hundred seventy eight');
    });
    test('999 should be nine hundred ninety nine', () => {
      expect(new ConverterUtil(999).getWords()).toMatch('nine hundred ninety nine');
    });
  });

  describe('thousand to million', () => {
    test('1243 should be one thousand two hundred forty three', () => {
      expect(new ConverterUtil(1243).getWords()).toMatch('one thousand two hundred forty three');
    });

    test('3756 should be three thousand seven hundred fifty six', () => {
      expect(new ConverterUtil(3756).getWords()).toMatch('three thousand seven hundred fifty six');
    });

    test('57432 should be fifty seven thousand four hundred thirty two', () => {
      expect(new ConverterUtil(57432).getWords()).toMatch('fifty seven thousand four hundred thirty two');
    });

    test('987654 should be nine hundred eighty seven thousand six hundred fifty four', () => {
      expect(new ConverterUtil(987654).getWords())
        .toMatch('nine hundred eighty seven thousand six hundred fifty four');
    });
  });

  describe('million to billion', () => {
    test('1000003 should be one million three', () => {
      expect(new ConverterUtil(1000003).getWords()).toMatch('one million three');
    });

    test('13800264 should be thirteen million eight hundred thousand two hundred sixty four', () => {
      expect(new ConverterUtil(13800264).getWords())
        .toMatch('thirteen million eight hundred thousand two hundred sixty four');
    });

    test(
      '999999999 should be nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine',
      () => {
        expect(new ConverterUtil(999999999).getWords())
          .toMatch('nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine');
      });
  });

  describe('billion to trillion', () => {
    const word1 = 'one billion two hundred thirty four million five hundred sixty seven thousand eighty nine';
    test(`1234567089 should be ${word1}`, () => {
      expect(new ConverterUtil(1234567089).getWords()).toMatch(word1);
    });

    const word2 = 'fourteen billion six hundred million seven hundred twenty eight thousand one hundred ninety five';
    test(`14600728195 should be ${word2}`, () => {
      expect(new ConverterUtil(14600728195).getWords()).toMatch(word2);
    });

    const word3 = `nine hundred ninety nine billion
                   nine hundred ninety nine million
                   nine hundred ninety nine thousand
                   nine hundred ninety nine`.replace(/\s+/g, ' ');
    test(`999999999999 should be ${word3}`, () => {
      expect(new ConverterUtil(999999999999).getWords()).toMatch(word3);
    });
  });

  describe('trillion to 999 trillion', () => {
    const word1 = `seven trillion
                   eight hundred five billion
                   two hundred sixty three million
                   seven hundred sixty five thousand
                   four hundred thirty two`.replace(/\s+/g, ' ');
    test(`7805263765432 should be ${word1}`, () => {
      expect(new ConverterUtil(7805263765432).getWords()).toMatch(word1);
    });

    const word2 = `seventeen trillion
                   two hundred sixty five billion
                   two hundred sixty three million
                   seven hundred sixty five thousand
                   four hundred thirty two`.replace(/\s+/g, ' ');
    test(`17265263765432 should be ${word2}`, () => {
      expect(new ConverterUtil(17265263765432).getWords()).toMatch(word2);
    });

    const word3 = `nine hundred seventeen trillion
                   two hundred sixty five billion
                   two hundred sixty three million
                   seven hundred sixty five thousand
                   four hundred thirty two`.replace(/\s+/g, ' ');
    test(`917265263765432 should be ${word3}`, () => {
      expect(new ConverterUtil(917265263765432).getWords()).toMatch(word3);
    });

    test(`1917265263765432 is greater than 999 trillion, it should be empty`, () => {
      expect(new ConverterUtil(1917265263765432).getWords()).toMatch('');
    });
  });

  describe('decimal inputs', () => {
    test('should output one point one two three', () => {
      expect(new ConverterUtil(1.123).getWords()).toMatch('one point one two three');
    });

    test('should output two point four five six', () => {
      expect(new ConverterUtil(2.456).getWords()).toMatch('two point four five six');
    });

    test('should output five point zero nine eight seven', () => {
      expect(new ConverterUtil(5.0987).getWords()).toMatch('five point zero nine eight seven');
    });
  });
});
