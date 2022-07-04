import React from 'react';
import './App.css';
import logo from './logo.svg'
import Facebook from './Facebook.svg'
import Google from './Google.svg'
import Instagram from './Instagram.svg'
import Telegram from './Telegram.svg'

function Footer() {
   return (
      <div className='Footer'>
         <div className="info">
            <div className="vacancy">
               <img src={logo} alt="logo" />
               <p>SilkWay</p>
               <p>Вакансии</p>
               <p>Copyright © 2022 All rights reserved.</p>
            </div>
            <div className="address">
               <p className='header'>Адрес</p>
               <p>Мангилик Ел, 55, блок С4.2, офис 265
                  Нур-Султан, Казахстан</p>
               <p>+77001780018</p>
               <p>info@SilkWay.kz</p>
            </div>
            <div className="social-media">
               <p className='header'>Социальные сети</p>
               <div className="images">
                  <img src={Facebook} alt="Facebook" />
                  <img src={Google} alt="Google" />
                  <img src={Instagram} alt="Instagram" />
                  <img src={Telegram} alt="Telegram" />
               </div>
               <p>Статус лицензии и ее действительность могут быть <br /> проверены на сайте AFSA</p>
            </div>
         </div>
         <div className="creator">

         </div>
      </div>
   )
}

export default Footer