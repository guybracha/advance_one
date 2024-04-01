import React, { useEffect } from 'react'

export default function FoodsApi() {

    useEffect(()=>{
        doApi();
    },[]);

    const doApi = async() => {
        const url = "http://fs1.co.il/bus/foods.php";
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
    }
  return (
    <div>
      FoodsApi
    </div>
  )
}
