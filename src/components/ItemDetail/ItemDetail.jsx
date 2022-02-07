import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/CartContext";
//import swal from 'sweetalert';


const ItemDetail = ({ producto }) => {
    const {addToCart} = useContext(cartContext); 
    const [mostrarItemCount, setMostrarItemCount] = useState(true);

    function onAdd(count) {
        alert('Agregaste ' + count + ' producto/s a tu carrito!');
        addToCart(producto, count);
        setMostrarItemCount(false);
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
                                    <img className="img img-fluidDetail" src={producto.pictureUrl} alt="" width={"25%"} />
                                </div>
                                <div className="item-descriptionDetail">{producto.descripcion}</div>
                                <div className="item-priceDetail"> {producto.precio}</div>

                                {
                                    (mostrarItemCount) ?
                                        <ItemCount stock={5} initial={1} onAdd={onAdd} />
                                        :
                                        <Link to ={'/cart'}>
                                            <button className= "botonTerminarCompra">Ve a terminar tu compra </button>
                                        </Link>
                                                                                                     
                                }
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