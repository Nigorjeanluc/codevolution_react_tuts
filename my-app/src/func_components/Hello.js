import React from 'react'

const Hello = () => {
//   return (
//     <div className='dummyClass'>
//       <h1>Hello</h1>
//     </div>
//   )
    return React.createElement(
        'div',
        {
            id: 'hello',
            className: 'dummyClass',
            style: {
                backgroundColor:'red'
            }
        },
        React.createElement('h1', null, 'Hello Igor')
    )
}

export default Hello