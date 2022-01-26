import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import ItemListArray from "../../productos";


const ItemListContainer = ({greeting}) =>{

    function onAdd() {
        console.log("Item agregado");
      }

    const [itemList, setItemList] = useState ([]);

    const traerProductos = new Promise ((resolve, reject) => {
      setTimeout (()=> {
          resolve (ItemListArray);
      }, 2000)
  });

    useEffect(()=>{
        traerProductos.then((res)=>{
            setItemList(res);
        });
    }, []);    

    
return(
        
        <>
           <div className="greetingStyles"> 
                <h1>{greeting}</h1>
           </div>
            
            <div className= "ItemCount">
                {/*<ItemCount stock={5} initial={1} onAdd={onAdd}/>*/}
            </div>
        
            <ItemList itemList={itemList}/>

        </>
    );}


export default ItemListContainer;