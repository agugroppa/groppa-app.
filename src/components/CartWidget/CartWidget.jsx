import React from 'react';
import carrito from "./carrito.png";



const CartWidget = () => {
    return (
        <div>
            <img src= {carrito} alt="carrito" width={"25px"}/>
        </div>
    )

}

export default CartWidget;