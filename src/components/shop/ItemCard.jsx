import styled from "styled-components";
import { useState } from "react";
import QuantityAdjuster from "./QuantityAdjuster";
import { useOutletContext } from "react-router-dom"


const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 15px 20px;
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

function ItemCard({product}) {
  const {setCartItems} = useOutletContext();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    //saving as lcoal variable to avoid any problems with batching state
    const currQuantity = quantity;
    setCartItems(prevCartItems => {
      const sameExistingItem = prevCartItems.find(item => item.id === product.id);

      if (sameExistingItem) {
        //update quantity of the item if already exists in cart
        return prevCartItems.map(item => {
          if (item.id === product.id) {
            return {...item, quantity: item.quantity + quantity}
          } else {
            return item
          }
        });
      } else {
        return [...prevCartItems, {...product, quantity: quantity}];
      }
    });
    setQuantity(1)
  }

  return (
    <StyledDiv>
      <ProductImage src={product.image}/>
      <ProductTitle>{product.title}</ProductTitle>
      <Price>${product.price}</Price>
      <QuantityAdjuster quantity={quantity} setQuantity={setQuantity} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </StyledDiv>
  )
}

export default ItemCard
