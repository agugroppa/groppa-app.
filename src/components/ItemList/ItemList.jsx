import React from "react";
import Items from "../Items/Items";


const ItemList = ({itemList})=>{

    return (
        <>
            {
                (itemList.length > 0) ? 
               <> 
                {itemList.map ((item) => {
                    return <Items key={item.id} item={item}/>;
                })}
                </>
                     
            :

                <>
                Cargando...
                </>

            }

        </>
    )

}



export default ItemList