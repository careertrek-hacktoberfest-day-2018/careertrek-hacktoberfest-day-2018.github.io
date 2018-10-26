import * as React from 'react';
import axios from 'axios';

import EncourageIcon from '../images/encourage-icon.png';

interface IState {
  count: number;
}

export default class EncourageButton extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
  }

  handleEncourage = () => {
    const apiUrl: string =
      process.env.NODE_ENV === 'production'
        ? 'https://wt-f00a9c1cc25da4745559222e2b138c9a-0.sandbox.auth0-extend.com/express-demo'
        : 'https://wt-f00a9c1cc25da4745559222e2b138c9a-0.sandbox.auth0-extend.com/express-demo';
    axios.get(apiUrl).then(res => {
      this.setState({ count: res.data.counter });
    });
  };

  componentWillMount() {
    this.handleEncourage();
  }

  render() {
    return (
      <div style={buttonStyle} onClick={this.handleEncourage}>
        <img src={EncourageIcon} style={iconStyle} />
        いいね！: {this.state.count}
      </div>
    );
  }
}

const buttonStyle = {
  width: '170px',
  lineHeight: '32px',
  borderRadius: '4px',
  border: 'none',
  padding: '0 16px',
  color: '#fff',
  background: '#00b198',
  display: 'flex',
};

const iconStyle = {
  display: 'inline-block',
  width: '24px',
  height: '24px',
  margin: '0 2px',
};
