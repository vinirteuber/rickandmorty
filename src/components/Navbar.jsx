import { Link } from "react-router-dom";
import { NavbarStyle } from "./NavbarStyles";

function Navbar() {
  return (
    <Link to="/">
      <NavbarStyle>
        <h1>Vini and Morty</h1>
      </NavbarStyle>
    </Link>
  );
}

export default Navbar;
