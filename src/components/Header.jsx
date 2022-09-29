import { NavLink } from "react-router-dom";

const setActiveStyle = ({ isActive }) =>
    isActive ? { color: "blue", fontWeight: "bold" , } : null;
const Header = () => {
    return (
      <nav
            style={{
        
          display: 'flex',
          width: '400px',
          margin: '0 auto',
          marginTop: '20px',
          marginBottum: '20px',
          fontSize: '23px',
          justifyContent: 'space-around',
        }}
      >
        <NavLink style={setActiveStyle} to="/">
          Home Page
        </NavLink>

        <NavLink style={setActiveStyle} to="/movies">
          Movies Page
        </NavLink>
      </nav>
    );
}
 
export default Header;