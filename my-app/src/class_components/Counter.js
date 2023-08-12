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
    // this.setState({
    //   count: this.state.count + 1
    // }, () => console.log('Callback value', this.state.count)) // asychronous function
    this.setState((prevState, props) => ({
        count: prevState.count + 1
    })) // use previous state we use a function as an argument with parameters prevState or even props
    console.log(this.state.count) // sychronous function
  }

  incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter