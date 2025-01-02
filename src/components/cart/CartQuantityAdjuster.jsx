import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0;
`;

const StyledInput = styled.input`
  text-align: center;
`;

function CartQuantityAdjuster({quantity, setQuantity}) {
  const handleIncrement = () => {
    setQuantity(quantity+1)
  }

  const handleDecrement = () => {
    // only decreases if quantity is above 1 (dont want to reach 0; want user to manually remove instead so doesn't just disappear by mistake)
    if (quantity > 1) {
      setQuantity(quantity-1)
    }
  }

  const handleEditInput = (e) => {
    const value = e.target.value;
    if (value > 0) {
      setQuantity(Number(value));
    }
  }

  return (
    <Container>
      <button
      onClick={handleDecrement}
      >-</button>
      <StyledInput 
      value={quantity} 
      onChange={handleEditInput}
      ></StyledInput>
      <button
      onClick={handleIncrement}
      >+</button>
    </Container>
  )
}

export default CartQuantityAdjuster
