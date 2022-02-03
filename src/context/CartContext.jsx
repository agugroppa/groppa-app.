import React, { createContext, useState } from 'react';


export const cartContext = createContext();


const CartContext = ({ children }) => {
  
    const [cart, setCart] = useState ([]);

    const addToCart = (product, count) =>{
        if (isInCart(product.id)){
            const indexItem = cart.findIndex(ele => ele.item.id === product.id);
            cart[indexItem].count = cart[indexItem].count + count;
            setCart([...cart]);
        }
        else{
            setCart([...cart, { item: product, count }])
        }
    }
        
    const deleteItem = (id) =>{
        const updateCart = cart.filter (element => element.item.id !== id)
        setCart(updateCart);
    }

    const isInCart = (id) => {
        return cart.some (element => element.item.id === id)
    }

    const clearCart = () => {
        setCart ([]);
    }

    return (
    
    <cartContext.Provider value ={{cart, addToCart, deleteItem, clearCart}}>
       { children }
    </cartContext.Provider>
    )
    };

export default CartContext;
