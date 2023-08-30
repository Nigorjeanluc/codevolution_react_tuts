import React, { Component } from 'react'

class RefsDemo extends Component {
  constructor(props) {
    super(props)
  
    // creating ref in the constructor
    this.inputRef = React.createRef()


    // callback ref
    this.cbRef = null
    // create a method that assign the element to the cbRef
    this.setCbRef = element => this.cbRef = element
  }

  componentDidMount() {
    // this.inputRef.current.focus()
    // console.log(this.inputRef)
    if(this.cbRef) this.cbRef.focus()
  }

  clickHandler = () => {
    alert(this.inputRef.current.value)
  }

  render() {
    return (
      <div>
        {/* Attach the inputRef to the input */}
        <input type='text' ref={this.inputRef} />
        {/* Attach the setCbRef method to the input */}
        <input type='text' ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo