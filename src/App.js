import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }
 
  render() {
    return(
      <div style={{ margin: 10 }}>
        <h1>Counter Demo</h1>
        <p>
          Counter: { this.state.counter }
        </p>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Increment Counter</button>
        <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>Decrement Counter</button>
      </div>
    );
  }
}