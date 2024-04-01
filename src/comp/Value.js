import React from 'react'

export default function Value() {
    
    const onSub = (e) => {
        e.preventDefault()
    }

  return (
    <div>
      <form onSubmit={onSub} className='col-md-6'>
        <label>Name:</label>
        <input type='text' className='form-control mb-3'></input>
        <label>Phone:</label>
        <input type='tel' className='form-control'></input>
        <button className='btn btn-info mt-3'>Send</button>
      </form>
    </div>
  )
}
