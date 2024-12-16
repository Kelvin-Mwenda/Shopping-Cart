import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import './App.css'
import Shop from './Shop.jsx'
import Home from './Home.jsx'
import Cart from './Cart.jsx';
import { chocolateCakes } from "./chocolate";
import { useState } from 'react';

export default function App() {
  const [cart, setCart] = useState([]);


  const addItem = (item) => {
    setCart(prevCart => {
        const existingItem = prevCart.find(cartItem => cartItem.id === item.id);

        if (existingItem) {
            return prevCart.map(cartItem =>
              cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1,totalQuantity: (item.quantity + 1) * item.price }
              : cartItem
            );
          }
        else {
          return [...prevCart, { ...item, quantity: 1,totalQuantity: item.price }];
        }
      }
    )
  }

  

  const removeItem = (id) => {
    setCart(c => c.filter(item => item.id !== id))
  }

  const addQuantity = (id) => {
    setCart(prevCart => 
        prevCart.map(item => 
            item.id === id ? { ...item, quantity: item.quantity + 1, totalQuantity: (item.quantity + 1) * item.price } : item
          )
        );
      }

  const reduceQuantity = (id) => {
      setCart(prevCart => 
          prevCart.map(item => 
              item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1, totalQuantity: (item.quantity - 1) * item.price} : ({...item})
          )
        );
      }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home/>} errorElement={<h1 style={{fontFamily: "'Nothing You Could Do', cursive",textAlign:"text-center"}}>404 Not Found!</h1>}/>
          <Route index element={<Shop cakes={chocolateCakes} addItem={addItem} cart={cart} removeItem={removeItem} addQuantity={addQuantity} reduceQuantity={reduceQuantity}/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="*" element={<h1 style={{fontFamily: "'Nothing You Could Do', cursive",textAlign:"text-center"}}>404 Not Found!</h1>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
