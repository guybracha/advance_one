import React, { useState } from 'react'

export default function Gallery() {
    const pics_ar = ["ppp.jpg","loeg.jpg","ss.jpg","jla.jpg","jla2.jpg","winx.jpg","ultimates.jpg"];
    const [counter, setCounter] = useState(0);

  return (
    <div>
      <div className='container text-center'>
      <img src={"/images/"+pics_ar[counter]} width="200" alt="js" className='col-4'/>
      <br/>
      <button className='btn btn-success' onClick={()=>{
        setCounter(counter-1)
        if(counter-1 < 0){
            setCounter(pics_ar.length-1);
        }
      }}>Back</button>
      <button className='btn btn-danger' onClick={()=>{
        setCounter(counter+1)
        if(counter+1 > pics_ar.length-1){
            setCounter(0)
        }
      }}>Next</button>
    </div>
    </div>
  )
}
