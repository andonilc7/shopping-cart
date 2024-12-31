import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
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
      <input 
      value={quantity} 
      onChange={handleEditInput}
      ></input>
      <button
      onClick={handleIncrement}
      >+</button>
    </Container>
  )
}

export default QuantityAdjuster
