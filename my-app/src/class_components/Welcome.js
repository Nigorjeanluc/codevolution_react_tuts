import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    console.log(this.props.children)
    return (
    <div>
      <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
      {/* {this.props.children} not working with class component */}
    </div>
    )
  }
}

export default Welcome