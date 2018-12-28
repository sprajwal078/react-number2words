import * as React from 'react';
import { ConverterUtil } from './converterUtil';
import { WORD_MAPPING } from './word-mapping';

type NumberSystem = 'hinduArabic' | 'international';
type Language = 'en' | 'np';

interface Props {
  value: number | string;
  system?: NumberSystem;
  language?: Language;
}

interface State {
  words: string;
}

class Number2Words extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      words: this.getWords()
    };
  }

  componentDidUpdate(prevProps: Props) {
    if (
      prevProps.value !== this.props.value ||
      prevProps.system !== this.props.system ||
      prevProps.language !== this.props.language
    ) {
      this.setState({
        words: this.getWords()
      });
    }
  }

  getWords = () => {
    const value = this.props.value;
    const system = this.props.system || 'international';
    const language = system !== 'hinduArabic' ? 'en' : this.props.language || 'en';
    const util = new ConverterUtil(
      value,
      WORD_MAPPING[system][language]!.tenths,
      WORD_MAPPING[system][language]!.subHundreds,
      WORD_MAPPING[system][language]!.maxValue,
      WORD_MAPPING[system][language]!.decimalWord,
      WORD_MAPPING[system][language]!.negativeWord
    );
    return util.getWords();
  }

  render() {
    const { words } = this.state;
    return (
      <span className="number2words__container">{words}</span>
    );
  }
}

export default Number2Words;
