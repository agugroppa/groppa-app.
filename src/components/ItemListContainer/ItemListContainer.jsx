import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import ItemListArray from "../../productos";
import { BrowserRouter, Switch, Route, useParams, Link } from 'react-router-dom';



const ItemListContainer = ({ greeting }) => {

    const [itemList, setItemList] = useState([]);
    const [producto, setProducto] = useState({});
    const { categoryId } = useParams();


    const traerProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ItemListArray);
        }, 2000)
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