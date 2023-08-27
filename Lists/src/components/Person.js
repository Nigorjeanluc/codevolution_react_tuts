import React from 'react'

function Person({person}) {
  // the key prop is not accessible in the child component
  return (
    <div>
        <h2>
        I am {person.name}. I know {person.age} years old. I know {person.skill}
        </h2>
    </div>
  )
}

export default Person