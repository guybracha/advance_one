import React, { useRef, useState } from 'react'

export default function Value() {
    const nameRef = useRef();
    const [phoneVal, setPhoneVal] = useState("");

    const onSub = (e) => {
        e.preventDefault()
        console.log(nameRef.current.value);
        console.log(phoneVal);
    }

  return (
    <div>
      <form onSubmit={onSub} className='col-md-6'>
        <label>Name:</label>
        <input ref={nameRef} type='text' className='form-control mb-3'></input>
        <label>Phone:</label>
        <input onChange={(e)=> setPhoneVal(e.currentTarget.value)} type='tel' className='form-control'></input>
        <button className='btn btn-info mt-3'>Send</button>
      </form>
    </div>
  )
}
