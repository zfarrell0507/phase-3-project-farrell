import { NavLink, Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="nav">
            <Link to="/" className="site_title">makerspace</Link>
            <ul>
                <NavLink to="/makes">Designs</NavLink>
                <NavLink to="/sign_in">Sign In</NavLink>
            </ul>
        </nav>
    );
}

export default NavBar