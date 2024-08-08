import './Sidebar.module.css';
import {Link} from 'react-router-dom';

function SideBar(){
    return(
        <div className="sidebar">
            <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
        </div>
    )
}

export default SideBar;