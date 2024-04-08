import React, { useEffect, useState } from 'react'

export default function ApiShop() {
    const [shop_ar,setShotAr] = useState([]);

    useEffect(() => {
        doApi();
    },[])

    const doApi = async() => {
        const url = "http://fs1.co.il/bus/shop.php";
        try{
            const resp = await fetch(url);
            const data = await resp.json();
            console.log(data);
            setShotAr(data);
        } catch(error){
            console.log(error);
        }
    }
  return (
    <div className='container'>
      <h2>Shop list:</h2>
      <div className='row'>
        {shop_ar.map(item=>{
            return(
                <article className='border p-2 col-md-4' key={item.id}>
                    <h3>{item.name}</h3>
                    <div>Price: {item.price} NIS</div>
                </article>
            )
        })}
      </div>
    </div>
  )
}
