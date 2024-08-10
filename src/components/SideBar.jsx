import './Sidebar.css';
import {NavLink} from 'react-router-dom';

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
        <li>
          <NavLink to="/recipe-menu">My Recipe List</NavLink>
        </li>
      </ul>
        </div>
    )
}

export default SideBar;