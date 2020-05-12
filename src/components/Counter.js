import React, {useState} from 'react'

export const Counter = () => {
    const[count, setCount] = useState(0)

const incrementCounter = () => {
    setCount(count+1)
}
 
const decrementCounter = () => {
    setCount(count-1)
}

    return(
        <div>
           <h1>My Counter: {count} </h1>
           <button onClick={incrementCounter}>increment</button>
           <button onClick={decrementCounter}>increment</button>
        </div>
    )
}