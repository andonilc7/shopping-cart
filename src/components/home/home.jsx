import styled from "styled-components"
import { StyledH2 } from "../utility";

const StyledP = styled.p`
  text-align: center;
  color: #4c4c4c;
  font-size: 1.1rem;
  max-width: 600px;
`

const BannerImg = styled.div`
  background-image: url("https://t4.ftcdn.net/jpg/03/20/46/13/360_F_320461388_5Snqf6f2tRIqiWlaIzNWrCUm1Ocaqhfm.jpg");
  background-size: cover;
  height: 300px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Adds a soft shadow */
`;

function Home() {

  return (
    <>
      <StyledH2>Welcome to Mock Store!</StyledH2>
      <BannerImg></BannerImg>
      <StyledP>This is your one stop shop for all things! Find products on the shop page and add them to your cart!</StyledP>
    </>
  )
}

export default Home
