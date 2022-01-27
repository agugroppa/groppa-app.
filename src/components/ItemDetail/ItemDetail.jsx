import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import swal from 'sweetalert';


const ItemDetail =({ producto })=> {

    function onAdd() {
        
        swal("Agreste este producto a tu carrito!");
        
        /* console.log("Igreste este producto a tu carrito!") */;
      }

    return (
        <>
            <button>
            <div>
                {(producto.id) ?
                    <> 
                    <div className="item-cardDetail">
                        <div className="item-headerDetail"><u>{producto.nombre}</u></div>
                            <div className="item-imgDetail">
                            <img className="img img-fluidDetail" src={producto.pictureUrl} alt="" width={"25%"}/>
                            </div>
                            <div className="item-descriptionDetail">{producto.descripcion}</div>
                            <div className="item-priceDetail"> {producto.precio}</div>
                           <div className= "ItemCount">
                                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                            </div>
                        </div></>
                    :
                    
                    <>Loading...</>
                }
            
            </div>
            </button>

        </>
    );
}

export default ItemDetail;