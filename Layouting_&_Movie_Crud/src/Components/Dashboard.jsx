import React , {useState} from 'react'
import './Dashboard.css';
import {Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom'
import {Sidebardata} from './Sidebardata'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {IconContext} from 'react-icons'
// import { Navbar , NavbarBrand } from 'reactstrap';

const Dashboard = () => {
  let user =JSON.parse(localStorage.getItem('form'))
  const[sidebar , setSidebar] = useState(false);
  const navigate = useNavigate();
  const showSidebar = () => setSidebar(!sidebar)
  function handleSubmit(e) {
    e.preventDefault();
    localStorage.removeItem('currentUser');
    navigate("/Homepage")
  }
  return (
    <>
    <IconContext.Provider value={{color:'white'}}>
      <nav className='n_bars'>
        <div className='navbar'>
          <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar}/>
          </Link>
          <Button color="primary"
                    type='submit'
                    className='form__buttonn'
                    onClick={handleSubmit}
                    >LOGOUT</Button>                    
        </div>
      </nav>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items' onClick={showSidebar}>
        <li className='navbar-toggle'>
          <Link to = "#" className='menu-barss'>
            <AiIcons.AiOutlineClose />
          </Link>
        </li>
        {Sidebardata.map((item, index) => {
            return(
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
            )
        })}
      </ul>
      </nav>
      </IconContext.Provider>
    </>
  );
}

export default Dashboard 