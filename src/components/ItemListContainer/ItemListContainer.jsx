import React from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";


const ItemListContainer = ({greeting}) =>{

    function onAdd() {
        console.log("Item agregado");
      }

    return(
        <div className="greetingStyles">
            
            <h1>{greeting}</h1>

            <div className= "ItemCount">
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            </div>
        </div>
    )

}

export default ItemListContainer;