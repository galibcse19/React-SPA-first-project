import { NavLink } from "react-router-dom";
import './Header.css'

 const Header = () => {
    return (
        <div>
            <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/posts">Post</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
            </nav>
        </div>
    );
 };
 
 export default Header;