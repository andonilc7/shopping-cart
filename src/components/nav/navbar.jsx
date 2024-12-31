import { Link } from "react-router-dom"
import styled from "styled-components"

// Creating styled components (do outside of component, not in!)
const Nav = styled.nav`
  padding: 22px;
  flex: 1;
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-evenly;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 15px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 20px;
`;

// putting the className prop is NEEDED in order to the styled(NavBar) in a higher component to apply custom styles!!!
function NavBar({className}) {

  return (
    <Nav className={className}>
      <NavList>
        <NavItem><StyledLink to="/">Home</StyledLink></NavItem>
        <NavItem><StyledLink to="/shop">Shop</StyledLink></NavItem>
        <NavItem><StyledLink to="/cart">Cart</StyledLink></NavItem>
      </NavList>
    </Nav>
  )
}

export default NavBar
