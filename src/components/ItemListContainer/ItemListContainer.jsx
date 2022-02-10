import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
//import ItemListArray from "../../productos";
import { useParams } from 'react-router-dom';
import { getFirestore } from "../../firebase/firebase";



const ItemListContainer = ({ greeting }) => {

    const [itemList, setItemList] = useState([]);
    const { categoryId } = useParams({});

    useEffect(() => {

        const db = getFirestore();
        const itemCollection = db.collection("items").where ("category", "==", parseInt(categoryId))//.where('category', '===', 'adidas');
    
        
           itemCollection.get()
          .then((querySnapShot) => {
    
            if (querySnapShot.size === 0) {
              console.log('no hay documentos con en ese query');
              return
            }
    
            console.log('hay documentos');
    
            setItemList(querySnapShot.docs.map((doc)=> {
                return { id: doc.id, ...doc.data() }
            }
            ));
            
          })
          .catch((err)=>{
            console.log(err);
          })
      }, [categoryId])  


   /*  const traerProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ItemListArray);
        }, 100)
    }); */

    /* useEffect(() => {
        traerProductos.then((res) => {
            let conditional = categoryId
            ? (
                res.filter((item) => item.category === categoryId)
              )
            : (res);
            setItemList(conditional);
            
        });
    }, [categoryId]); */

    
   
    return (

        <>
            <div className="greetingStyles">
                <h1>{greeting}</h1>
            </div>
            <ItemList itemList={itemList} />

        </>
    );
}


export default ItemListContainer;