import React from "react";
import './SecondScreen.css';
import Product from './Picture.svg'
import SmallProduct from './smallproduct.svg'
import WhiteBasket from './White-Bascket.svg'
import {useState} from 'react';
import Recommended from "./Recomended";

function SecondScreen() {
    const [count, setCount] = useState(1);
    return (
        <div className="main">
            <div className="SecondScreen">
                <div className="pictures">
                    <div className="main-picture">
                        <img src={Product} alt="Product" id="sss"/>
                    </div>
                    <div className="secondary-pictures">
                        <img src={SmallProduct} alt="SmallProduct" onClick={() => {
                        }}/>
                        <img src={SmallProduct} alt="SmallProduct"/>
                        <img src={SmallProduct} alt="SmallProduct"/>
                        <img src={SmallProduct} alt="SmallProduct"/>
                        <button className="more_photo">Смотреть все</button>
                    </div>
                </div>
                <div className="information">
                    <div className="info">
                        <h3>Private label best strong skin bleaching lightening cream foot full body glutathione kojic
                            acid whitening cream for black skin</h3>
                        <div className="grade">
                            <div class="rating-result">
                                <span class="active"></span>
                                <span class="active"></span>
                                <span class="active"></span>
                                <span class="active"></span>
                                <span></span>
                            </div>
                            <div className="text">
                                <p className="review">12 отзывов</p>
                                <p className="buyers">24 покупателя</p>
                            </div>
                        </div>
                        <div className="description">
                            <p>Идейные соображения высшего порядка, а также перспективное планирование в значительной
                                степени обусловливает важность экспериментов, поражающих по своей масштабности и
                                грандиозности. Для современного мира социально-экономическое развитие в значительной
                                степени обусловливает важность переосмысления внешнеэкономических политик.</p>
                        </div>
                        <div className="cost">
                            <input type="radio" id="first" name="choose-cost"/>
                            <label htmlFor="first" className="block">
                                <p>10 - 999 Штук</p>
                                <p className="price">$65 - $80</p>
                            </label>
                            <input type="radio" id="second" name="choose-cost"/>
                            <label htmlFor="second" className="block">
                                <p>1000 - 4999 Штук</p>
                                <p className="price">$55 - $70</p>
                            </label>
                            <input type="radio" id="third" name="choose-cost"/>
                            <label htmlFor="third" className="block">
                                <p>Больше 4999 Штук</p>
                                <p className="price">$35 - $50</p>
                            </label>
                        </div>
                        <div className="colors">
                            <input type="radio" id="a" name="choose"/>
                            <label htmlFor="a" className="color">
                                <p className="name">Цвет 1</p>
                                <div className="gray"></div>
                            </label>
                            <input type="radio" id="b" name="choose"/>
                            <label htmlFor="b" className="color">
                                <p className="name">Цвет 2</p>
                                <div className="pink"></div>
                            </label>
                            <input type="radio" id="c" name="choose"/>
                            <label htmlFor="c" className="color">
                                <p className="name">Цвет 3</p>
                                <div className="orange"></div>
                            </label>
                        </div>
                        <div className="more-info">
                            <h2>Доп. Инфо</h2>
                        </div>
                    </div>
                    <div className="counter">
                        <div className="buttons">
                            <button className="minus" onClick={() => setCount(count - 1)}>
                                -
                            </button>
                            <input className="number" type='text' min={10} value={count}/>
                            <button className="plus" onClick={() => setCount(count + 1)}>
                                +
                            </button>
                            <h1>${Math.round(count * (80 - (count * 0.015)))}</h1>
                        </div>
                        <div className="right">
                            <button>
                                <img src={WhiteBasket} alt="WhiteBasket"/> В корзину
                            </button>
                            <button>Купить</button>
                        </div>
                    </div>
                </div>
            </div>
            <Recommended/>
        </div>
    )
}

export default SecondScreen;