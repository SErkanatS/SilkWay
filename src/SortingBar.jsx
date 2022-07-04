import React from 'react'
import './App.css';

function SortingBar() {
   return (
      <div className='SortingBar'>
         <div className="filters">
            <select name="categories" id="categories">
               <option value="Категории">Категории</option>
               <option value="Категории">Категории</option>
               <option value="Категории">Категории</option>
            </select>
            <select name="help" id="help">
               <option value="Помощь">Помощь</option>
               <option value="Помощь">Помощь</option>
               <option value="Помощь">Помощь</option>
            </select>
            <select name="sell" id="sell">
               <option value="Продать на SilkWay">Продать на SilkWay</option>
               <option value="Продать на SilkWay">Продать на SilkWay</option>
               <option value="Продать на SilkWay">Продать на SilkWay</option>
            </select>
         </div>
         <div className="delivery">
            <button>Готово к отправке</button>
            <select name="delivery" id="delivery" placeholder='Доставка до: '>
               <option value="Нур-Султан">Нур-Султан</option>
               <option value="Алматы">Алматы</option>
               <option value="Шымкент">Шымкент</option>
            </select>
         </div>
      </div>
   )
}

export default SortingBar