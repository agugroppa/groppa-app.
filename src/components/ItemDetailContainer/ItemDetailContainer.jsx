import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
//import ItemListArray from "../../productos";
import { getFirestore } from "../../firebase/firebase"



 const ItemDetailContainer = ()=> {
 
  const { productId } = useParams();
  const [producto, setProducto] = useState({});
 
useEffect(()=>{

    const db = getFirestore();
    const itemCollection = db.collection("items");
    const miItem = itemCollection.doc(productId);

      miItem.get()
        .then((doc) => {
          console.log(doc.id)
         
          if (!doc.exists){
            console.log ("No existe este item");
            return;
          }
          setProducto({id: doc.id, ...doc.data()})
        })
        .catch((err) => {
          console.log (err);
        })

      }, [productId]);
    
      //console.log(producto)
       
    /* const  GetItem = new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                resolve(ItemListArray.find (item=> item.id === productId))
            }, 100)
        })
        GetItem.then ((res)=> {
            setProducto(res)
        })
        GetItem.catch ((err)=> {
            setProducto(err)
        }) */
    
/* }); */

  return (
    <>
    {/*  { productId } */}
      <ItemDetail producto={producto}/> 
    </>
  );
  }

export default ItemDetailContainer;