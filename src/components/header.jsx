import React from 'react';
import "./header.css";
import logo from './img/logo.svg';
import mark from './img/nw_selarw.png';
import bag from './img/cart.png';
import user from './img/user.png';








const Header = () => {
  return (
   <header>
          <a href="vk.com"><img src={logo} alt="logo" className='logo' /></a>
    <ul class="menu-main topmenu">         
        <li>
        <a href="">Категории <img src={mark} alt="" className='mark'/></a>  
        </li>
         <li><a href="">F.A.Q</a></li>
         <li><a href="">Контакты</a></li>
         
    </ul>
          <a href="#"><img src={user} alt="" className='userico'/>
          </a>
          <a href="#"><img src={bag} alt="" className='bagico'/>
          </a>
      
   </header>
   
  );
}


export default Header




