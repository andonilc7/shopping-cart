import styled from "styled-components"



const StyledH2 = styled.h2`
  color: #333;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); /* Subtle text shadow */
`;

const StyledP = styled.p`
  text-align: center;
  color: #4c4c4c;
  font-size: 1.1rem;
  max-width: 600px;
`

function Home() {

  return (
    <>
      <StyledH2>Welcome to Mock Store!</StyledH2>
      <StyledP>This is your one stop shop for all things! Find products on the shop page and add them to your cart!</StyledP>
    </>
  )
}

export default Home
