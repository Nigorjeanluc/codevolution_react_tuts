/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Igor'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: 'Igor' })
    }, 2000)
  }

  render() {
    console.log('*****************Parent Comp render*****************')
    return (
      <div>
        Parent Component
        {/* <RegComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp