import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Switch, Route, useParams, Link } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemListArray from "../../productos";


 const ItemDetailContainer = ()=> {
 
  const { productId } = useParams();

  const [producto, setProducto] = useState({});
 


useEffect(()=>{
    
        const  GetItem = new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                resolve(ItemListArray.find (item=> item.id === productId))
            }, 2000)
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