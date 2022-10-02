import { NavLink } from "react-router-dom";
import { NavLinkStyle } from "./Header.styles";

const setActiveStyle = ({ isActive }) =>
  isActive ? { color: "blue", fontWeight: "bold", } : null;
    
const Header = () => {
    return (
      <NavLinkStyle>
        <NavLink style={setActiveStyle} end to="/">
          Home Page
        </NavLink>

        <NavLink style={setActiveStyle} to="/movies">
          Movies Page
        </NavLink>
      </NavLinkStyle>
    );
}
 
export default Header;