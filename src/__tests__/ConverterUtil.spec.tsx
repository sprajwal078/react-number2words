import { ConverterUtil } from '../converterUtil';
import { WORD_MAPPING } from '../word-mapping';

describe('ConverterUtil', () => {
  test('util should exist', () => {
    expect(new ConverterUtil(2)).toBeTruthy();
  });

  describe('international number system', () => {
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

      const word = `nine hundred ninety nine million
                    nine hundred ninety nine thousand
                    nine hundred ninety nine`.replace(/\s+/g, ' ');
      test(
        `999999999 should be ${word}`,
        () => {
          expect(new ConverterUtil(999999999).getWords())
            .toMatch(word);
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

  describe('Hindu Arabic System', () => {
    describe('sub 20s', () => {
      test('0 should be one', () => {
        const util = new ConverterUtil(
          0,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('zero');
      });

      test('1 should be one', () => {
        const util = new ConverterUtil(
          1,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('one');
      });
      test('2 should be two', () => {
        const util = new ConverterUtil(
          2,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('two');
      });
      test('3 should be three', () => {
        const util = new ConverterUtil(
          3,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('three');
      });
      test('4 should be four', () => {
        const util = new ConverterUtil(
          4,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('four');
      });
      test('5 should be five', () => {
        const util = new ConverterUtil(
          5,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('five');
      });
      test('6 should be six', () => {
        const util = new ConverterUtil(
          6,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('six');
      });
      test('7 should be seven', () => {
        const util = new ConverterUtil(
          7,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('seven');
      });
      test('8 should be eight', () => {
        const util = new ConverterUtil(
          8,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('eight');
      });
      test('9 should be nine', () => {
        const util = new ConverterUtil(
          9,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('nine');
      });
      test('10 should be ten', () => {
        const util = new ConverterUtil(
          10,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('ten');
      });
      test('11 should be eleven', () => {
        const util = new ConverterUtil(
          11,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('eleven');
      });
      test('12 should be twelve', () => {
        const util = new ConverterUtil(
          12,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('twelve');
      });
      test('13 should be thirteen', () => {
        const util = new ConverterUtil(
          13,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('thirteen');
      });
      test('14 should be fourteen', () => {
        const util = new ConverterUtil(
          14,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('fourteen');
      });
      test('15 should be fifteen', () => {
        const util = new ConverterUtil(
          15,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('fifteen');
      });
      test('16 should be sixteen', () => {
        const util = new ConverterUtil(
          16,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('sixteen');
      });
      test('17 should be seventeen', () => {
        const util = new ConverterUtil(
          17,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('seventeen');
      });
      test('18 should be eighteen', () => {
        const util = new ConverterUtil(
          18,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('eighteen');
      });
      test('19 should be nineteen', () => {
        const util = new ConverterUtil(
          19,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('nineteen');
      });
    });

    describe('negative number', () => {
      const util = new ConverterUtil(
        -97,
        WORD_MAPPING.hinduArabic.en!.tenths,
        WORD_MAPPING.hinduArabic.en!.subHundreds,
        WORD_MAPPING.hinduArabic.en!.maxValue
      );
      test('-97 should be minus ninety seven', () => {
        expect(util.getWords()).toMatch('minus ninety seven');
      });
    });

    describe('tenths', () => {
      test('10 should be ten', () => {
        const util = new ConverterUtil(
          10,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('ten');
      });
      test('20 should be twenty', () => {
        const util = new ConverterUtil(
          20,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('twenty');
      });
      test('30 should be thirty', () => {
        const util = new ConverterUtil(
          30,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('thirty');
      });
      test('40 should be forty', () => {
        const util = new ConverterUtil(
          40,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('forty');
      });
      test('50 should be fifty', () => {
        const util = new ConverterUtil(
          50,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('fifty');
      });
      test('60 should be sixty', () => {
        const util = new ConverterUtil(
          60,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('sixty');
      });
      test('70 should be seventy', () => {
        const util = new ConverterUtil(
          70,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('seventy');
      });
      test('80 should be eighty', () => {
        const util = new ConverterUtil(
          80,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('eighty');
      });
      test('90 should be ninety', () => {
        const util = new ConverterUtil(
          90,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('ninety');
      });
      test('100 should be one hundred', () => {
        const util = new ConverterUtil(
          100,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('one hundred');
      });
      test('1000 should be one thousand', () => {
        const util = new ConverterUtil(
          1000,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('one thousand');
      });
      test('10000 should be ten thousand', () => {
        const util = new ConverterUtil(
          10000,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('ten thousand');
      });
      test('100000 should be one lakh', () => {
        const util = new ConverterUtil(
          100000,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('one lakh');
      });
      test('1000000 should be ten lakh', () => {
        const util = new ConverterUtil(
          1000000,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('ten lakh');
      });
      test('10000000 should be one crore', () => {
        const util = new ConverterUtil(
          10000000,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('one crore');
      });
      test('100000000 should be ten crore', () => {
        const util = new ConverterUtil(
          100000000,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('ten crore');
      });
      test('1000000000 should be one arab', () => {
        const util = new ConverterUtil(
          1000000000,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('one arab');
      });
      test('10000000000 should be ten arab', () => {
        const util = new ConverterUtil(
          10000000000,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('ten arab');
      });
      test('100000000000 should be one kharab', () => {
        const util = new ConverterUtil(
          100000000000,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('one kharab');
      });
      test('1000000000000 should be ten kharab', () => {
        const util = new ConverterUtil(
          1000000000000,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('ten kharab');
      });
    });

    describe('100 to 999', () => {
      test('123 should be one hundred twenty three', () => {
        const util = new ConverterUtil(
          123,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('one hundred twenty three');
      });
      test('257 should be two hundred fifty seven', () => {
        const util = new ConverterUtil(
          257,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('two hundred fifty seven');
      });
      test('382 should be three hundred eighty two', () => {
        const util = new ConverterUtil(
          382,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('three hundred eighty two');
      });
      test('495 should be four hundred ninety five', () => {
        const util = new ConverterUtil(
          495,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('four hundred ninety five');
      });
      test('572 should be five hundred seventy two', () => {
        const util = new ConverterUtil(
          572,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('five hundred seventy two');
      });
      test('690 should be six hundred ninety', () => {
        const util = new ConverterUtil(
          690,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('six hundred ninety');
      });
      test('765 should be seven hundred sixty five', () => {
        const util = new ConverterUtil(
          765,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('seven hundred sixty five');
      });
      test('878 should be eight hundred seventy eight', () => {
        const util = new ConverterUtil(
          878,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('eight hundred seventy eight');
      });
      test('999 should be nine hundred ninety nine', () => {
        const util = new ConverterUtil(
          999,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('nine hundred ninety nine');
      });
    });

    describe('thousand to lakh', () => {
      test('1243 should be one thousand two hundred forty three', () => {
        const util = new ConverterUtil(
          1243,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('one thousand two hundred forty three');
      });

      test('3756 should be three thousand seven hundred fifty six', () => {
        const util = new ConverterUtil(
          3756,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('three thousand seven hundred fifty six');
      });

      test('57432 should be fifty seven thousand four hundred thirty two', () => {
        const util = new ConverterUtil(
          57432,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('fifty seven thousand four hundred thirty two');
      });

      test('987654 should be nine lakh eighty seven thousand six hundred fifty four', () => {
        const util = new ConverterUtil(
          987654,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('nine lakh eighty seven thousand six hundred fifty four');
      });
    });

    describe('lakh to crore', () => {
      test('1000003 should be ten lakh three', () => {
        const util = new ConverterUtil(
          1000003,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('ten lakh three');
      });

      test('13800264 should be one crore thirty eight lakh two hundred sixty four', () => {
        const util = new ConverterUtil(
          13800264,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('one crore thirty eight lakh two hundred sixty four');
      });

      const word = `ninety nine crore
                    ninety nine lakh
                    ninety nine thousand
                    nine hundred ninety nine`.replace(/\s+/g, ' ');
      test(`999999999 should be ${word}`, () => {
        const util = new ConverterUtil(
          999999999,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch(word);
      });
    });

    describe('arab to kharab', () => {
      const word1 = `one arab
                     twenty three crore
                     forty five lakh
                     sixty seven thousand eighty nine`.replace(/\s+/g, ' ');
      test(`1234567089 should be ${word1}`, () => {
        const util = new ConverterUtil(
          1234567089,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch(word1);
      });

      const word2 = `fourteen arab
                   sixty crore
                   seven lakh
                   twenty eight thousand
                   one hundred ninety five`.replace(/\s+/g, ' ');
      test(`14600728195 should be ${word2}`, () => {
        const util = new ConverterUtil(
          14600728195,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch(word2);
      });

      const word3 = `nine kharab
                   ninety nine arab
                   ninety nine crore
                   ninety nine lakh
                   ninety nine thousand
                   nine hundred ninety nine`.replace(/\s+/g, ' ');
      test(`999999999999 should be ${word3}`, () => {
        const util = new ConverterUtil(
          999999999999,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch(word3);
      });

      const word4 = `ninety nine kharab
                   ninety nine arab
                   ninety nine crore
                   ninety nine lakh
                   ninety nine thousand
                   nine hundred ninety nine`.replace(/\s+/g, ' ');
      test(`9999999999999 should be ${word4}`, () => {
        const util = new ConverterUtil(
          9999999999999,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch(word4);
      });

      test(`10000000000000 should be empty`, () => {
        const util = new ConverterUtil(
          10000000000000,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('');
      });
    });

    describe('decimal inputs', () => {
      test('should output one point one two three', () => {
        const util = new ConverterUtil(
          1.123,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('one point one two three');
      });

      test('should output two point four five six', () => {
        const util = new ConverterUtil(
          2.456,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('two point four five six');
      });

      test('should output five point zero nine eight seven', () => {
        const util = new ConverterUtil(
          5.0987,
          WORD_MAPPING.hinduArabic.en!.tenths,
          WORD_MAPPING.hinduArabic.en!.subHundreds,
          WORD_MAPPING.hinduArabic.en!.maxValue
        );
        expect(util.getWords()).toMatch('five point zero nine eight seven');
      });
    });

    describe('Language', () => {
      describe('NP', () => {
        describe('0 - 10', () => {
          test('0 should be शून्य', () => {
            const util = new ConverterUtil(
              0,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('शून्य');
          });
          test('1 should be एक', () => {
            const util = new ConverterUtil(
              1,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('एक');
          });
          test('2 should be दुई', () => {
            const util = new ConverterUtil(
              2,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('दुई');
          });
          test('3 should be तीन', () => {
            const util = new ConverterUtil(
              3,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('तीन');
          });
          test('4 should be चार', () => {
            const util = new ConverterUtil(
              4,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('चार');
          });
          test('5 should be पाँच', () => {
            const util = new ConverterUtil(
              5,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('पाँच');
          });
          test('6 should be छ', () => {
            const util = new ConverterUtil(
              6,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('छ');
          });
          test('7 should be सात', () => {
            const util = new ConverterUtil(
              7,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('सात');
          });
          test('8 should be आठ', () => {
            const util = new ConverterUtil(
              8,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('आठ');
          });
          test('9 should be नौ', () => {
            const util = new ConverterUtil(
              9,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('नौ');
          });
          test('10 should be दश', () => {
            const util = new ConverterUtil(
              10,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('दश');
          });
        });

        describe('11 - 20', () => {
          test('11 should be एघार', () => {
            const util = new ConverterUtil(
              11,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('एघार');
          });
          test('12 should be बाह्र', () => {
            const util = new ConverterUtil(
              12,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('बाह्र');
          });
          test('13 should be तेह्र', () => {
            const util = new ConverterUtil(
              13,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('तेह्र');
          });
          test('14 should be चौध', () => {
            const util = new ConverterUtil(
              14,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('चौध');
          });
          test('15 should be पन्ध्र', () => {
            const util = new ConverterUtil(
              15,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('पन्ध्र');
          });
          test('16 should be सोह्र', () => {
            const util = new ConverterUtil(
              16,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('सोह्र');
          });
          test('17 should be सत्र', () => {
            const util = new ConverterUtil(
              17,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('सत्र');
          });
          test('18 should be अठार', () => {
            const util = new ConverterUtil(
              18,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('अठार');
          });
          test('19 should be उन्नाइस', () => {
            const util = new ConverterUtil(
              19,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('उन्नाइस');
          });
          test('20 should be बीस', () => {
            const util = new ConverterUtil(
              20,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('बीस');
          });
        });

        describe('21 - 30', () => {
          test('21 should be एक्काइस', () => {
            const util = new ConverterUtil(
              21,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('एक्काइस');
          });
          test('22 should be बाइस', () => {
            const util = new ConverterUtil(
              22,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('बाइस');
          });
          test('23 should be त्येइस', () => {
            const util = new ConverterUtil(
              23,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('त्येइस');
          });
          test('24 should be चौबीस', () => {
            const util = new ConverterUtil(
              24,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('चौबीस');
          });
          test('25 should be पच्चीस', () => {
            const util = new ConverterUtil(
              25,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('पच्चीस');
          });
          test('26 should be छब्बीस', () => {
            const util = new ConverterUtil(
              26,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('छब्बीस');
          });
          test('27 should be सत्ताइस', () => {
            const util = new ConverterUtil(
              27,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('सत्ताइस');
          });
          test('28 should be अठ्ठाइस', () => {
            const util = new ConverterUtil(
              28,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('अठ्ठाइस');
          });
          test('29 should be उनन्तीस', () => {
            const util = new ConverterUtil(
              29,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('उनन्तीस');
          });
          test('30 should be तीस', () => {
            const util = new ConverterUtil(
              30,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('तीस');
          });
        });

        describe('31 - 40', () => {
          test('31 should be एक्तीस', () => {
            const util = new ConverterUtil(
              31,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('एक्तीस');
          });
          test('32 should be बत्तीस', () => {
            const util = new ConverterUtil(
              32,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('बत्तीस');
          });
          test('33 should be तेत्तिस', () => {
            const util = new ConverterUtil(
              33,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('तेत्तिस');
          });
          test('34 should be चौंतीस', () => {
            const util = new ConverterUtil(
              34,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('चौंतीस');
          });
          test('35 should be पैंतीस', () => {
            const util = new ConverterUtil(
              35,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('पैंतीस');
          });
          test('36 should be छत्तीस', () => {
            const util = new ConverterUtil(
              36,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('छत्तीस');
          });
          test('37 should be सर्तीस', () => {
            const util = new ConverterUtil(
              37,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('सर्तीस');
          });
          test('38 should be अर्तीस', () => {
            const util = new ConverterUtil(
              38,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('अर्तीस');
          });
          test('39 should be उनन्चालीस', () => {
            const util = new ConverterUtil(
              39,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('उनन्चालीस');
          });
          test('40 should be चालीस', () => {
            const util = new ConverterUtil(
              40,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('चालीस');
          });
        });

        describe('41 - 50', () => {
          test('41 should be एकचालीस', () => {
            const util = new ConverterUtil(
              41,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('एकचालीस');
          });
          test('42 should be बयालीस', () => {
            const util = new ConverterUtil(
              42,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('बयालीस');
          });
          test('43 should be त्रिचालीस', () => {
            const util = new ConverterUtil(
              43,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('त्रिचालीस');
          });
          test('44 should be चवालीस', () => {
            const util = new ConverterUtil(
              44,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('चवालीस');
          });
          test('45 should be पैंतालीस', () => {
            const util = new ConverterUtil(
              45,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('पैंतालीस');
          });
          test('46 should be छयालीस', () => {
            const util = new ConverterUtil(
              46,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('छयालीस');
          });
          test('47 should be सर्चालीस', () => {
            const util = new ConverterUtil(
              47,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('सर्चालीस');
          });
          test('48 should be अर्चालीस', () => {
            const util = new ConverterUtil(
              48,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('अर्चालीस');
          });
          test('49 should be उनन्चास', () => {
            const util = new ConverterUtil(
              49,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('उनन्चास');
          });
          test('50 should be पचास', () => {
            const util = new ConverterUtil(
              50,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('पचास');
          });
        });

        describe('51 - 60', () => {
          test('51 should be एकाउन्न', () => {
            const util = new ConverterUtil(
              51,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('एकाउन्न');
          });
          test('52 should be बाउन्न', () => {
            const util = new ConverterUtil(
              52,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('बाउन्न');
          });
          test('53 should be त्रिपन्न', () => {
            const util = new ConverterUtil(
              53,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('त्रिपन्न');
          });
          test('54 should be चौवन्न', () => {
            const util = new ConverterUtil(
              54,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('चौवन्न');
          });
          test('55 should be पचपन्न', () => {
            const util = new ConverterUtil(
              55,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('पचपन्न');
          });
          test('56 should be छ्प्पन्न', () => {
            const util = new ConverterUtil(
              56,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('छ्प्पन्न');
          });
          test('57 should be सन्ताउन्न', () => {
            const util = new ConverterUtil(
              57,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('सन्ताउन्न');
          });
          test('58 should be अन्ठाउन्न', () => {
            const util = new ConverterUtil(
              58,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('अन्ठाउन्न');
          });
          test('59 should be उनान्साठ्ठी', () => {
            const util = new ConverterUtil(
              59,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('उनान्साठ्ठी');
          });
          test('60 should be साठ्ठी', () => {
            const util = new ConverterUtil(
              60,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('साठ्ठी');
          });
        });

        describe('61 - 70', () => {
          test('61 should be एकसट्ठी', () => {
            const util = new ConverterUtil(
              61,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('एकसट्ठी');
          });
          test('62 should be बैसट्ठी', () => {
            const util = new ConverterUtil(
              62,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('बैसट्ठी');
          });
          test('63 should be त्रिसट्ठी', () => {
            const util = new ConverterUtil(
              63,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('त्रिसट्ठी');
          });
          test('64 should be चौंसठ्ठी', () => {
            const util = new ConverterUtil(
              64,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('चौंसठ्ठी');
          });
          test('65 should be पैंसठ्ठी', () => {
            const util = new ConverterUtil(
              65,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('पैंसठ्ठी');
          });
          test('66 should be छैंसठ्ठी', () => {
            const util = new ConverterUtil(
              66,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('छैंसठ्ठी');
          });
          test('67 should be सर्सठ्ठी', () => {
            const util = new ConverterUtil(
              67,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('सर्सठ्ठी');
          });
          test('68 should be अर्सठ्ठी', () => {
            const util = new ConverterUtil(
              68,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('अर्सठ्ठी');
          });
          test('69 should be उनन्सत्तरी', () => {
            const util = new ConverterUtil(
              69,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('उनन्सत्तरी');
          });
          test('70 should be सत्तरी', () => {
            const util = new ConverterUtil(
              70,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('सत्तरी');
          });
        });

        describe('71 - 80', () => {
          test('71 should be एकत्तर', () => {
            const util = new ConverterUtil(
              71,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('एकत्तर');
          });
          test('72 should be बहत्तर', () => {
            const util = new ConverterUtil(
              72,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('बहत्तर');
          });
          test('73 should be त्रीहत्तर', () => {
            const util = new ConverterUtil(
              73,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('त्रीहत्तर');
          });
          test('74 should be चौरत्तर', () => {
            const util = new ConverterUtil(
              74,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('चौरत्तर');
          });
          test('75 should be पचहत्तर', () => {
            const util = new ConverterUtil(
              75,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('पचहत्तर');
          });
          test('76 should be छयत्तर', () => {
            const util = new ConverterUtil(
              76,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('छयत्तर');
          });
          test('77 should be सतहत्तर', () => {
            const util = new ConverterUtil(
              77,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('सतहत्तर');
          });
          test('78 should be अठहत्तर', () => {
            const util = new ConverterUtil(
              78,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('अठहत्तर');
          });
          test('79 should be उनास्सी', () => {
            const util = new ConverterUtil(
              79,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('उनास्सी');
          });
          test('80 should be अस्सी', () => {
            const util = new ConverterUtil(
              80,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('अस्सी');
          });
        });

        describe('81 - 90', () => {
          test('81 should be एकास्सी', () => {
            const util = new ConverterUtil(
              81,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('एकास्सी');
          });
          test('82 should be बयास्सी', () => {
            const util = new ConverterUtil(
              82,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('बयास्सी');
          });
          test('83 should be त्रियास्सी', () => {
            const util = new ConverterUtil(
              83,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('त्रियास्सी');
          });
          test('84 should be चैरस्सी', () => {
            const util = new ConverterUtil(
              84,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('चैरस्सी');
          });
          test('85 should be पचास्सी', () => {
            const util = new ConverterUtil(
              85,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('पचास्सी');
          });
          test('86 should be छायास्सी', () => {
            const util = new ConverterUtil(
              86,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('छायास्सी');
          });
          test('87 should be सत्तास्सी', () => {
            const util = new ConverterUtil(
              87,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('सत्तास्सी');
          });
          test('88 should be अठास्सी', () => {
            const util = new ConverterUtil(
              88,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('अठास्सी');
          });
          test('89 should be उनन्नाब्बे', () => {
            const util = new ConverterUtil(
              89,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('उनन्नाब्बे');
          });
          test('90 should be नब्बे', () => {
            const util = new ConverterUtil(
              90,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('नब्बे');
          });
        });

        describe('91 - 100', () => {
          test('91 should be एकान्नब्बे', () => {
            const util = new ConverterUtil(
              91,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('एकान्नब्बे');
          });
          test('92 should be बयान्नब्बे', () => {
            const util = new ConverterUtil(
              92,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('बयान्नब्बे');
          });
          test('93 should be त्रियान्नब्बे', () => {
            const util = new ConverterUtil(
              93,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('त्रियान्नब्बे');
          });
          test('94 should be चौरान्नब्बे', () => {
            const util = new ConverterUtil(
              94,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('चौरान्नब्बे');
          });
          test('95 should be पन्चान्नब्बे', () => {
            const util = new ConverterUtil(
              95,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('पन्चान्नब्बे');
          });
          test('96 should be छायान्नब्बे', () => {
            const util = new ConverterUtil(
              96,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('छायान्नब्बे');
          });
          test('97 should be सन्तान्नब्बे', () => {
            const util = new ConverterUtil(
              97,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('सन्तान्नब्बे');
          });
          test('98 should be अन्ठान्नब्बे', () => {
            const util = new ConverterUtil(
              98,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('अन्ठान्नब्बे');
          });
          test('99 should be उनन्सय', () => {
            const util = new ConverterUtil(
              99,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('उनन्सय');
          });
          test('100 should be एक सय', () => {
            const util = new ConverterUtil(
              100,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('एक सय');
          });
        });

        describe('100 - 999', () => {
          test('121 should be एक सय एक्काइस', () => {
            const util = new ConverterUtil(
              121,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('एक सय एक्काइस');
          });
          test('257 should be दुई सय सन्ताउन्न', () => {
            const util = new ConverterUtil(
              257,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('दुई सय सन्ताउन्न');
          });
          test('382 should be तीन सय बयास्सी', () => {
            const util = new ConverterUtil(
              382,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('तीन सय बयास्सी');
          });
          test('495 should be चार सय पन्चान्नब्बे', () => {
            const util = new ConverterUtil(
              495,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('चार सय पन्चान्नब्बे');
          });
          test('572 should be पाँच सय बहत्तर', () => {
            const util = new ConverterUtil(
              572,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('पाँच सय बहत्तर');
          });
          test('690 should be छ सय नब्बे', () => {
            const util = new ConverterUtil(
              690,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('छ सय नब्बे');
          });
          test('765 should be सात सय पैंसठ्ठी', () => {
            const util = new ConverterUtil(
              765,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('सात सय पैंसठ्ठी');
          });
          test('878 should be आठ सय अठहत्तर', () => {
            const util = new ConverterUtil(
              878,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('आठ सय अठहत्तर');
          });
          test('999 should be नौ सय उनन्सय', () => {
            const util = new ConverterUtil(
              999,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('नौ सय उनन्सय');
          });
        });

        describe('thousand to lakh', () => {
          test('1243 should be एक हजार दुई सय त्रिचालीस', () => {
            const util = new ConverterUtil(
              1243,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('एक हजार दुई सय त्रिचालीस');
          });

          test('3756 should be तीन हजार सात सय छ्प्पन्न', () => {
            const util = new ConverterUtil(
              3756,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('तीन हजार सात सय छ्प्पन्न');
          });

          test('57432 should be सन्ताउन्न हजार चार सय बत्तीस', () => {
            const util = new ConverterUtil(
              57432,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('सन्ताउन्न हजार चार सय बत्तीस');
          });

          test('987654 should be नौ लाख सत्तास्सी हजार छ सय चौवन्न', () => {
            const util = new ConverterUtil(
              987654,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('नौ लाख सत्तास्सी हजार छ सय चौवन्न');
          });
        });

        describe('lakh to crore', () => {
          test('1000003 should be दश लाख तीन', () => {
            const util = new ConverterUtil(
              1000003,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('दश लाख तीन');
          });

          test('13800264 should be एक करोड अर्तीस लाख दुई सय चौंसठ्ठी', () => {
            const util = new ConverterUtil(
              13800264,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords())
              .toMatch('एक करोड अर्तीस लाख दुई सय चौंसठ्ठी');
          });

          test('999999999 should be उनन्सय करोड उनन्सय लाख उनन्सय हजार नौ सय उनन्सय', () => {
            const util = new ConverterUtil(
              999999999,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('उनन्सय करोड उनन्सय लाख उनन्सय हजार नौ सय उनन्सय');
          });
        });

        describe('arab to kharab', () => {
          test('1234567089 should be एक अर्ब त्येइस करोड पैंतालीस लाख सर्सठ्ठी हजार उनन्नाब्बे', () => {
            const util = new ConverterUtil(
              1234567089,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('एक अर्ब त्येइस करोड पैंतालीस लाख सर्सठ्ठी हजार उनन्नाब्बे');
          });

          test('14600728195 should be चौध अर्ब साठ्ठी करोड सात लाख अठ्ठाइस हजार एक सय पन्चान्नब्बे', () => {
            const util = new ConverterUtil(
              14600728195,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('चौध अर्ब साठ्ठी करोड सात लाख अठ्ठाइस हजार एक सय पन्चान्नब्बे');
          });

          test('999999999999 should be नौ खर्ब उनन्सय अर्ब उनन्सय करोड उनन्सय लाख उनन्सय हजार नौ सय उनन्सय', () => {
            const util = new ConverterUtil(
              999999999999,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('नौ खर्ब उनन्सय अर्ब उनन्सय करोड उनन्सय लाख उनन्सय हजार नौ सय उनन्सय');
          });

          const word = 'सत्तास्सी खर्ब पैंसठ्ठी अर्ब त्रिचालीस करोड एक्काइस लाख नौ हजार आठ सय छयत्तर';
          test(`8765432109876 should be ${word}`, () => {
            const util = new ConverterUtil(
              8765432109876,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch(word);
          });
          test('10000000000000 should be empty', () => {
            const util = new ConverterUtil(
              10000000000000,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue
            );
            expect(util.getWords()).toMatch('');
          });
        });

        describe('decimal inputs', () => {
          test('6.123 should output छ दशमलब एक दुई तीन', () => {
            const util = new ConverterUtil(
              6.123,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue,
              WORD_MAPPING.hinduArabic.np!.decimalWord,
              WORD_MAPPING.hinduArabic.np!.negativeWord
            );
            expect(util.getWords()).toMatch('छ दशमलब एक दुई तीन');
          });

          test('2.456 should output दुई दशमलब चार पाँच छ', () => {
            const util = new ConverterUtil(
              2.456,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue,
              WORD_MAPPING.hinduArabic.np!.decimalWord,
              WORD_MAPPING.hinduArabic.np!.negativeWord
            );
            expect(util.getWords()).toMatch('दुई दशमलब चार पाँच छ');
          });

          test('5.0987 should output पाँच दशमलब शून्य नौ आठ सात', () => {
            const util = new ConverterUtil(
              5.0987,
              WORD_MAPPING.hinduArabic.np!.tenths,
              WORD_MAPPING.hinduArabic.np!.subHundreds,
              WORD_MAPPING.hinduArabic.np!.maxValue,
              WORD_MAPPING.hinduArabic.np!.decimalWord,
              WORD_MAPPING.hinduArabic.np!.negativeWord
            );
            expect(util.getWords()).toMatch('पाँच दशमलब शून्य नौ आठ सात');
          });
        });
      });
    });
  });
});
