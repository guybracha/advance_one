import React, { useEffect } from 'react'
import {useParams} from "react-router-dom"

export default function Foods() {
  const params = useParams();
  
  useEffect(() => {
    doApi();
  },[])
  const doApi = async() => {
    const url = "http://fs1.co.il/bus/foods.php";
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      const filter_ar = data.filter(item => {
        return item.category_id == params["id_category"];
      })
      console.log(filter_ar);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='container'>
      <h2>Foods: {params["id_category"]}</h2>
    </div>
  )
}