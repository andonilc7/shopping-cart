import styled from "styled-components"
import { StyledH2 } from "../utility"
import ItemCard from "./ItemCard"
import { useOutletContext } from "react-router-dom"

const ItemsCont = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); /* Flexible columns */
  gap: 20px; /* Space between items */
  width: 100%;
`

function Shop() {
  const {products} = useOutletContext();

  return (
    <>
      <StyledH2>Products</StyledH2>
      <ItemsCont>
        {products.map(product => <ItemCard product={product} key={product.id}/>)}
      </ItemsCont>
    </>
  )
}

export default Shop
