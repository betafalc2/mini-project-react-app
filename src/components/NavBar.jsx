import './Navbar.module.css';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <span>My App</span>
            </div>

            <NavLink to="/">Home |</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    )
}

export default NavBar;