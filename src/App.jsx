import { useState } from 'react'
import {Outlet} from 'react-router-dom'
import './App.css'
import styled from 'styled-components'
import NavBar from './components/nav/navbar'

const PageCont = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const StyledHeader = styled.header`
  display: flex;
  background: #ffce73;
  width: 100%;
`;

const StyledH1 = styled.h1`
  margin: 0 10px;
  align-content: center;
  padding: 0 25px;
  font-size: 2.1rem;
`;

// putting the className prop in NavBar component (look at navbar.jsx) is NEEDED in order to the styled(NavBar) in a higher component to apply custom styles!!!
const StyledNavBar = styled(NavBar)`
  flex: 1;
  background-color: #ffce73;
`;

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  flex: 1;
  background-color: #F5F7FA;

`;

function App() {

  return (
    <PageCont>
      <StyledHeader>
        <StyledH1>Mock Store</StyledH1> {/* Page title should go here */}
        <StyledNavBar/>
      </StyledHeader>
      <MainCont>
        <Outlet/>
      </MainCont>
    </PageCont>
  )
}

export default App
