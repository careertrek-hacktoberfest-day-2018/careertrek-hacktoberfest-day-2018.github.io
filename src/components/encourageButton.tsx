import * as React from 'react';
import axios from 'axios';

interface IState {
  count: number;
}

interface IProps {}

export default class EncourageButton extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {count: 0};
  }

  handleEncourage = () => {
    const apiUrl: string =
      process.env.NODE_ENV === 'production'
        ? 'https://wt-f00a9c1cc25da4745559222e2b138c9a-0.sandbox.auth0-extend.com/express-demo'
        : 'https://wt-f00a9c1cc25da4745559222e2b138c9a-0.sandbox.auth0-extend.com/express-demo';
    axios.get(apiUrl).then(res => {
      this.setState({count: res.data['counter']});
    });
  };

  componentWillMount() {
    this.handleEncourage();
  }

  render() {
    return <button onClick={this.handleEncourage}>Encouraged: {this.state.count}</button>;
  }
}
