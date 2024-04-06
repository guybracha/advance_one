import React, { useState } from 'react'

export default function Increase() {
    const[Counter, setCounter] = useState(0);
    const colors = ['black', 'red', 'orange', 'yellow', 'green'];

    const increase = () => {
        setCounter(Counter + 1);
        if(Counter >= 4){
           setCounter(0);
        } else {
            setCounter(Counter+1);
        }
    };
    const decrease = () => {
        setCounter(Counter-1);
    };
  return (
    <div>
      <h2>Count to 4</h2>
      <h3 style={{color: colors[Counter]}}>{Counter}</h3>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  )
}
