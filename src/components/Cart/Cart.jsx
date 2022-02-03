import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';

const Cart = () => {

  const { cart, clearCart } = useContext(cartContext);

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
          <button onClick={() => clearCart()}>Vaciar carrito</button>
        </div>
      }
    </>
  )
}

export default Cart