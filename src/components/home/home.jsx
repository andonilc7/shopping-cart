import styled from "styled-components"
import { StyledH2 } from "../utility";

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
