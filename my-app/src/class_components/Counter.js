import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increment() {
    // the callback function for setState is the second parameter
    this.setState({
      count: this.state.count + 1
    }, () => console.log('Callback value', this.state.count)) // asychronous function
    console.log(this.state.count) // sychronous function
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter