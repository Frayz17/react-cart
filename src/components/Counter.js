import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: this.props.total
    }
  }

  decrement = () => {
    this.state.total > this.props.min &&
    this.setState(state => ({
      total: state.total - 1
    }))
  }

  increment = () => {
    this.state.total < this.props.max &&
    this.setState(prevState => ({
      total: prevState.total + 1
    }))
  }

  reset = () => {
    this.setState(() => ({
      total: this.props.total
    }))
  }

  render() {
    return (
      <div>
        {this.props.title} {this.state.total} {" "}
        <button id="btn-minus" onClick={this.decrement}>-1</button> {" "}
        <button id="btn-plus" onClick={this.increment}>+1</button> {" "}
        <button id="btn-reset" onClick={this.reset}>Reset</button> {" "}
      </div>
    );
  }
}

export default Counter;
