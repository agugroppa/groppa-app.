import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import ItemListArray from "../../productos";
import { useParams } from 'react-router-dom';



const ItemListContainer = ({ greeting }) => {

    const [itemList, setItemList] = useState([]);
    //const [producto, setProducto] = useState({});
    const { categoryId } = useParams();


    const traerProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ItemListArray);
        }, 100)
    });

    useEffect(() => {
        traerProductos.then((res) => {
            let conditional = categoryId
            ? (
                res.filter((item) => item.category === categoryId)
              )
            : (res);
            setItemList(conditional);
            
        });
    }, [categoryId]);

    
      
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