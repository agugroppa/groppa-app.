import React, { useState, useEffect } from "react";
import {  useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemListArray from "../../productos";


 const ItemDetailContainer = ()=> {
 
  const { productId } = useParams();
  const [producto, setProducto] = useState({});
 
useEffect(()=>{
    
        const  GetItem = new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                resolve(ItemListArray.find (item=> item.id === productId))
            }, 100)
        })
        GetItem.then ((res)=> {
            setProducto(res)
        })
        GetItem.catch ((err)=> {
            setProducto(err)
        })
    
});

  return (
    <>
    {productId}
      <ItemDetail producto={producto}/>
    </>
  );
  }

export default ItemDetailContainer;