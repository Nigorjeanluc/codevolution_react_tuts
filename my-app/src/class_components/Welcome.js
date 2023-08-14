import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    console.log(this.props.children) // not working with class component
    const {name, heroName} = this.props
    // const {state1, state2} = this.state
    return (
    <div>
      <h1>Welcome {name} a.k.a {heroName}</h1>
      {/* {this.props.children} not working with class component */}
    </div>
    )
  }
}

export default Welcome