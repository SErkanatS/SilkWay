import React from 'react';
import './App.css';
import Card from './Card';


function Goods() {
   return (
      <div className='Goods'>
         <div className="header">
            <h1>Товары для вас</h1>
         </div>
         <div className="cards">
            <div className="row">
               <Card />
               <Card />
               <Card />
               <Card />
            </div>
            <div className="row">
               <Card />
               <Card />
               <Card />
               <Card />
            </div>
         </div>
      </div>
   )
}

export default Goods