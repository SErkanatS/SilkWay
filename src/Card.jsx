import React from 'react';
import './App.css';
import WhiteBascket from './White-Bascket.svg'

function Card() {
    return (
        <div className={'Cord'}>
            <a href='/goods'>
                <div className="Card">
                    <div className="card-img">
                        <div className="buy">
                            <button>
                                <img src={WhiteBascket} alt="WhiteBascket"/>
                            </button>
                        </div>
                        <div className="more-info">
                            <button>
                                <p>Доп. Инфо</p>
                            </button>
                        </div>
                    </div>
                    <div className="card-info">
                        <div className="info">
                            <p>Sell Well is suitable for 2018 BMW 5 Series G30 G38 car high quality universal rear
                                bumper
                                diffuser</p>
                        </div>
                        <div className="cost">
                            <div className="price">
                                <p>$65 - $80</p>
                            </div>
                            <div className="grade">
                                <p>★</p>
                                <span>4.7</span>
                            </div>
                        </div>
                        <div className="min">
                            <p>1 Штука (Минимальный. Заказ)</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Card;