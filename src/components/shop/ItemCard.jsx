import styled from "styled-components";
import { useState } from "react";
import QuantityAdjuster from "./QuantityAdjuster";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adds a soft shadow */
  transition: transform 0.2s, box-shadow 0.2s; /* Smooth hover effect */
`

const ProductTitle = styled.h3`
  text-align: center;
  margin-bottom: 10px;
`;

const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin: 10px 0;
`;
function ItemCard({product}) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    
  }

  return (
    <StyledDiv>
      <ProductImage src={product.image}/>
      <ProductTitle>{product.title}</ProductTitle>
      <p>${product.price}</p>
      <QuantityAdjuster quantity={quantity} setQuantity={setQuantity} />
      <button>Add to Cart</button>
    </StyledDiv>
  )
}

export default ItemCard
