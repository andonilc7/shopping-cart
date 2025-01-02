import styled from "styled-components"
import { StyledH2 } from "../utility"
import { useOutletContext } from "react-router-dom"
import CartItem from "./CartItem"

const ItemsCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const CheckoutContainer = styled.div`
  border-top: 1px solid #b4b4b4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const CheckoutBtn = styled.button`
  background-color: black;
  color: white;
  font-weight: bold;
  border-radius: 0;
  font-size: 1.3rem;
`

const Subtotal = styled.p`
  font-size: 1.3rem;
  margin-bottom: 7px;
`;

function Cart() {
  const {cartItems} = useOutletContext();

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)

  return (
    <>
      <StyledH2>Your Cart</StyledH2>
      <ItemsCont>
        {cartItems && cartItems.length > 0 ? (
          <>
          {cartItems.map(product => <CartItem product={product} key={product.id}/>)}
          <CheckoutContainer>
            <Subtotal>Subtotal: ${totalPrice.toFixed(2)}</Subtotal>
            <CheckoutBtn>CHECKOUT</CheckoutBtn>
          </CheckoutContainer>
          </>
        ) : 
        (<p>No items in your cart. Go to the shop to add some!</p>)}
      </ItemsCont>
    </>
  )
}

export default Cart
