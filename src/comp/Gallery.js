import React, { useState } from 'react'

export default function Gallery() {
    const pics_ar = ["ppp.jpg","loeg.jpg","ss.jpg","jla.jpg"];
    const [counter, setCounter] = useState(0);

  return (
    <div>
      <img src={"/images/"+pics_ar[counter]} width="200" alt="js"/>
      <br/>
      <button>Back</button>
      <button onClick={()=>{
        setCounter(counter+1)
        if(counter+1 > pics_ar.length-1){
            setCounter(0)
        }
      }}>Next</button>
    </div>
  )
}
