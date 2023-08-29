import React from 'react'
import Person from './Person'

function NameList() {
//   using array index as key 
//   const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
//   const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)
  const persons = [
    {
        id: 1,
        name: 'Igor',
        age: '29',
        skill: 'React'
    },
    {
        id: 2,
        name: 'Robert',
        age: 27,
        skill: 'Python'
    },
    {
        id: 3,
        name: 'Cynthia',
        age: 24,
        skill: 'MongoDB'
    },
    {
        id: 4,
        name: 'Elsie',
        age: 21,
        skill: 'SQL Server'
    }
  ]
  const personList = persons.map(person => (
    <Person key={person.id} person={person} />
  ))

  return (
    <div>{personList}</div>
  )
}

export default NameList