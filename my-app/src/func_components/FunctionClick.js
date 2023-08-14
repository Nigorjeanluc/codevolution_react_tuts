import React from 'react'

function FunctionClick() {
  const clickHandler = () => {
    console.log('Button Clicked')
  }

  // on event in react we don't add parantheses when specifying a handler
  // event handler is a function, not a function call
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick