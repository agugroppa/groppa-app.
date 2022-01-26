import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './ItemDetail.css';


const ItemDetail =({ producto })=> {

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