import React from 'react'

function FragmentDemo() {
  const items = [
    {
        id: 1,
        course: 'Java'
    },
    {
        id: 2,
        course: 'JavaScript'
    },
    {
        id: 3,
        course: 'Python'
    }
  ]
  return (
    <React.Fragment>
        <h1>Fragment Demo</h1>
        <p>This describe the Fragment Demo component</p>
        {
            items.map(item => (
                <React.Fragment key={item.id}>
                    <p>No: {item.id} Course: {item.course}</p>
                </React.Fragment>
            ))
        }
    </React.Fragment>
  )
}

export default FragmentDemo