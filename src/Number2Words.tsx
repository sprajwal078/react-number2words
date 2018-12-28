import * as React from 'react';
import { ConverterUtil } from './converterUtil';
import { WORD_MAPPING } from './word-mapping';

interface Props {
  value: number | string;
  system?: 'international' | 'hinduArabic';
  language?: 'en' | 'np';
}

interface State {
  words: string;
}

class Number2Words extends React.Component<Props, State> {

  componentWillMount() {
    this.setWordValue();
  }

  componentDidUpdate() {
    this.setWordValue();
  }

  setWordValue = () => {
    const system = this.props.system || 'international';
    const language = this.getLanguage();
    const util = new ConverterUtil(
      this.props.value,
      WORD_MAPPING[system][language]!.tenths,
      WORD_MAPPING[system][language]!.subHundreds,
      WORD_MAPPING[system][language]!.maxValue,
      WORD_MAPPING[system][language]!.decimalWord,
      WORD_MAPPING[system][language]!.negativeWord
    );
    this.setState({ words: util.getWords() });
  }

  getLanguage = () => {
    if (this.props.system === 'hinduArabic') {
      return this.props.language || 'en';
    }
    return 'en';
  }

  render() {
    const { words } = this.state;
    return (
      <span className="number2words__container">{words}</span>
    );
  }
}

export default Number2Words;
