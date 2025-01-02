import styled from "styled-components";
import { useState } from "react";
import QuantityAdjuster from "./CartQuantityAdjuster";
import { useOutletContext } from "react-router-dom"


const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 15px 20px;
  margin-bottom: 15px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adds a soft shadow */
  transition: transform 0.2s, box-shadow 0.2s; /* Smooth hover effect */
`

const ProductTitle = styled.h3`
  text-align: center;
  margin-bottom: 10px;
  vertical-align: middle;
  /* https://www.geeksforgeeks.org/how-to-apply-an-ellipsis-to-multiline-text-in-css/ */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Number of lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin: 10px 0;
`;

const Price = styled.p`
  
`

function CartItem({product}) {
  const {setCartItems} = useOutletContext();
  
  //dont need state for quantity here because we want it to automatically update the state of the cart items that we passed in with context

  const setQuantity = (newQuantity) => {
    setCartItems(prevCartItems => prevCartItems.map((item) => {
      if (item.id === product.id ) {
        return {...item, quantity: newQuantity }
      } else {
        return item
      }
    }))
  }

  const removeFromCart = () => {
    setCartItems(prevCartItems => 
      //filtering cart to only the items that dont match product's id
      prevCartItems.filter(item => item.id !== product.id
      )
    )
  }

  return (
    <StyledDiv>
      <ProductImage src={product.image}/>
      <ProductTitle>{product.title}</ProductTitle>
      {/* toFixed() converts to string, so doing that part just for displaying properly */}
      <Price>${product.price.toFixed(2)}</Price>
      <QuantityAdjuster quantity={product.quantity} setQuantity={setQuantity} />
      <button onClick={removeFromCart}>Remove from Cart</button>
    </StyledDiv>
  )
}

export default CartItem
