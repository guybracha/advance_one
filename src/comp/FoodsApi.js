import React, { useEffect, useState } from 'react'

export default function FoodsApi() {
    const [foods_ar, setFoodsAr] = useState([]);

    useEffect(()=>{
        doApi();
    },[]);

    const doApi = async() => {
        const url = "http://fs1.co.il/bus/foods.php";
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        setFoodsAr(data);
    }
  return (
    <div>
      <h1>List of foods:</h1>
      <ul>
        {foods_ar.map((item, i)=>{
            return(
                <li key={i}>{item.name} - {item.price}</li>
            )
        })}
      </ul>
    </div>
  )
}
