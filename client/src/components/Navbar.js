import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const authContext = useContext(AuthContext);

    const logoutHandler = (event) => {
        event.preventDefault();
        authContext.logout();
    };

    return (
        <nav className="nav-wrapper teal">
            <div className="container">
                <span className="brand-logo">Notes</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <NavLink to="/notes">Notes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/create">Create</NavLink>
                    </li>
                    <li>
                        <a href="/" onClick={logoutHandler}>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
