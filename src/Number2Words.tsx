import * as React from 'react';
import { ConverterUtil } from './converterUtil';

interface Props {
  value: number | string;
}

interface State {
  words: string;
}

class Number2Words extends React.Component<Props, State> {

  componentWillMount() {
    const util = new ConverterUtil(this.props.value);
    this.setState({words: util.getWords()});
  }

  render() {
    const { words } = this.state;
    return (
      <span className="number2words__container">{words}</span>
    );
  }
}

export default Number2Words;
