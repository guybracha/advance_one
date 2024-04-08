import React from 'react'
import {useParams} from 'react-router-dom';

export default function Foods() {
    const params = useParams();


  return (
    <div className='container'>
      <h2>Foods: {params["id_category"]}</h2>
    </div>
  )
}
