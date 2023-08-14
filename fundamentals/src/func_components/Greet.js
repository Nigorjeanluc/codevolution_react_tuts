import React from 'react'

const Greet = (props) => {
    console.log(props)
    const {name, heroName, children} = props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {children}
        </div>
    )
}
export default Greet