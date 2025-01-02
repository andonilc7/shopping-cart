import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0;
`;

const StyledInput = styled.input`
  text-align: center;
`;

function QuantityAdjuster({quantity, setQuantity}) {
  const handleIncrement = () => {
    setQuantity(quantity => quantity+1)
  }

  const handleDecrement = () => {
    // only decreases if quantity is above 0
    if (quantity > 0) {
      setQuantity(quantity => quantity-1)
    }
  }

  const handleEditInput = (e) => {
    const value = e.target.value;
    if (value >= 0) {
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

export default QuantityAdjuster
