import React from 'react';
import './App.css';
import Card from './Card';


function Recomended() {
   return (
      <div className='Recomended'>
         <div className="header">
            <h1>Товары с высоким спросом</h1>
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

export default Recomended