import './Sidebar.module.css';
import {NavLink, Link} from 'react-router-dom';

function SideBar(){
    return(
        <div className="sidebar">
            <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
        </div>
    )
}

export default SideBar;