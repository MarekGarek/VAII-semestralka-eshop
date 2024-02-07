import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from '../images/fazula.png';
import '../css/header.css';
import AuthContext from '../AuthProvider'

export default function Header() {
  const navigate = useNavigate();
  const {auth, setAuth} = useContext(AuthContext);

  return (
    <div className='gridHeader'>

      <div className='gridHeader-item1'>
        <a onClick={() => navigate('/')}>
          <img src={logoImage} height="50" alt="Gym Bean" style={{ backgroundColor: 'transparent' }} />
          <em className="logo">Gym<em className="logo2">Bean</em></em>
        </a>
      </div>

      <div className='gridHeader-item2'>
        <form className="d-flex input-group w-auto my-auto mb-3 mb-md-0">
          <input autoComplete="off" type="search" placeholder="Search" />
        </form>
      </div>

      <div className='gridHeader-item3'>
        <div className="header-container">
          <button className="header-btn dropbtn"><i className="bi bi-cart4"></i></button>
          <div className="dropdown2">
            <button className="dropbtn header-btn"><i className="bi bi-person-circle"></i></button>
            <div className="dropdown-content">
              <a role="button" onClick={() => navigate("login")}>Prihlásiť</a>
              <a role="button" onClick={() => navigate("register")}>Registrovať</a>
            </div>
          </div>
          {auth.isLoged ? 
          <div>
          <p style={{width: '100px', paddingLeft: '13px', cursor: 'pointer'}} 
             onClick={()=> {setAuth(false);fetch('/logout'); navigate("login")}}>
              Odhlásiť sa <f style={{fontWeight: "bolder"}}>{auth.login}</f>
          </p>
        </div> 
        : null}
        </div>
      </div>

    </div>
  );
}
