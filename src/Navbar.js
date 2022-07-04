import React from 'react'
import logo from './logo.svg'
import Orders from './Orders.svg'
import Bascket from './Bascket.svg'
import Sign from './Sign.svg'
import Arrow from './Arrow.svg'
import './App.css';

function Navbar() {
   return (
      <div className='Navbar'>
         <div className="leftSide">
             <a href="/">
                 <img src={logo} alt="logo" />
             </a>
         </div>
         <input id="menu-toggle" type="checkbox" />
         <label class='menu-button-container' for="menu-toggle">
            <div class='menu-button'>
               <img src={Arrow} alt="Arrow" />
            </div>
         </label>
         <div className="center">
            <div className="searchBar">
               <select name="select" id="select">
                  <option value="volvo">Продукты</option>
                  <option value="saab">Телефоны</option>
                  <option value="mercedes">Ноутбуки</option>
                  <option value="audi">Одежда</option>
               </select>
               <div className="search">
                  <button><ion-icon name="search-outline"></ion-icon></button>
                  <input type="text" placeholder='Search' />
                  <div className="upload-lupa">
                     <label for="file-upload" className="custom-file-upload">
                        <ion-icon name="camera-outline"></ion-icon>
                     </label>
                     <input id="file-upload" type="file" accept="image/png, image/gif, image/jpeg" />
                  </div>
               </div>
            </div>
         </div>
         <div className="rightSide">
            <a href="#s"><img src={Orders} alt="Orders" /> Заказы</a>
            <a href="#s"><img src={Bascket} alt="Bascket" /> Корзина</a>
            <a href="/user"><img src={Sign} alt="Sign" /> Вход/Регистрация</a>
         </div>
      </div>
   )
}

export default Navbar