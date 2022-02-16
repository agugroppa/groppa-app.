import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import Form from '../Form/Form';

const Cart = () => {

  const { cart, clearCart, precioTotal } = useContext(cartContext);
  const [ total, setTotal ]  = useState (0);


    useEffect (() => {
    setTotal (precioTotal())
  },[precioTotal]);   
 
  return (
    <>    
      
       {cart.length === 0 ?
        <div>
          <p>Tu carrito esta vacio</p>
          <Link to='/'>Vuelve a la tienda!!</Link>
        </div>
        :
        <div>
          {cart.map(element => <CartItem key={element.item.id} prod={element} />)}
           <p>Total a pagar: $ {total}</p> 
          <button onClick={() => clearCart()}>Vaciar carrito</button>
          <Form/>
        </div>
      }

      
   </>
  )
}

export default Cart