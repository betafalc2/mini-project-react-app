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
          <NavLink to="/recipes">Recipes</NavLink>
        </li>
        <li>
          <NavLink to="/create-a-recipe">Create</NavLink>
        </li>
      </ul>
        </div>
    )
}

export default SideBar;

