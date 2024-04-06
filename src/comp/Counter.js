import React, { useState } from 'react'

export default function Counter() {
    const[Counter, setCounter] = useState(4);

    const onAdd1 = () => {
        setCounter(Counter + 1);
    }
  return (
    <div>
      <h2>Counter: {Counter}</h2>
      <button onClick={onAdd1}>Add 1</button>
      <button onClick={()=>{
        setCounter(Counter -1)
      }}>Reduce 1</button>
    </div>
  )
}
