import React from 'react';
import './App.css';
import Avatar from './Avatar.svg';
import Arrow from './Arrow.svg';
import Vector from './Vector.svg';
import Card from "./Card.svg"
import Recommended from './Recomended';
import Goods from './Goods';

function FirstScreen() {
    return (
        <div className='FirstScreens'>
            <div className="FirstScreen">
                <div className="usually">
                    <div className="options">
                        <div className="header">
                            <p className="header">Частые товары</p>
                        </div>
                        <div className="option">
                            <div className="option-body">
                                <img src={Avatar} alt="Avatar"/>
                                <p>Option 1</p>
                            </div>
                            <button>
                                <img src={Arrow} alt="Arrow"/>
                                <div class="dropdown-content">

                                </div>
                            </button>
                        </div>
                        <div className="option">
                            <div className="option-body">
                                <img src={Avatar} alt="Avatar"/>
                                <p>Option 1</p>
                            </div>
                            <button>
                                <img src={Arrow} alt="Arrow"/>
                                <div class="dropdown-content">

                                </div>
                            </button>
                        </div>
                        <div className="option">
                            <div className="option-body">
                                <img src={Avatar} alt="Avatar"/>
                                <p>Option 1</p>
                            </div>
                            <button>
                                <img src={Arrow} alt="Arrow"/>
                                <div class="dropdown-content">

                                </div>
                            </button>
                        </div>
                        <div className="option">
                            <div className="option-body">
                                <img src={Avatar} alt="Avatar"/>
                                <p>Option 1</p>
                            </div>
                            <button>
                                <img src={Arrow} alt="Arrow"/>
                                <div class="dropdown-content">

                                </div>
                            </button>
                        </div>
                        <div className="option">
                            <div className="option-body">
                                <img src={Avatar} alt="Avatar"/>
                                <p>Option 1</p>
                            </div>
                            <button>
                                <img src={Arrow} alt="Arrow"/>
                                <div class="dropdown-content">

                                </div>
                            </button>
                        </div>
                        <div className="option">
                            <div className="option-body">
                                <img src={Avatar} alt="Avatar"/>
                                <p>Option 1</p>
                            </div>
                            <button>
                                <img src={Arrow} alt="Arrow"/>
                                <div class="dropdown-content">

                                </div>
                            </button>
                        </div>
                        <div className="option">
                            <div className="option-body">
                                <img src={Avatar} alt="Avatar"/>
                                <p>Option 1</p>
                            </div>
                            <button>
                                <img src={Arrow} alt="Arrow"/>
                                <div class="dropdown-content">

                                </div>
                            </button>
                        </div>
                        <div className="option">
                            <div className="option-body">
                                <img src={Avatar} alt="Avatar"/>
                                <p>Option 1</p>
                            </div>
                            <button>
                                <img src={Arrow} alt="Arrow"/>
                                <div class="dropdown-content">

                                </div>
                            </button>
                        </div>
                        <div className="option">
                            <div className="option-body">
                                <img src={Avatar} alt="Avatar"/>
                                <p>Option 1</p>
                            </div>
                            <button>
                                <img src={Arrow} alt="Arrow"/>
                                <div class="dropdown-content">

                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="sale-card">
                        <div className="sale-text">
                            <p>Sale Card</p>
                        </div>
                        <div className="sale-info">
                            <p>Дает -20% на любой товар <br/> площадки SilkWay</p>
                        </div>
                        <div className="sale-button">
                            <button formAction='#'>
                                <p>Read more</p>
                                <img src={Vector} alt=""/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pics">
                    <div className="content">
                        <img src={Card} alt="Card"/>
                    </div>
                    <div className="navigation">

                    </div>
                </div>
            </div>
            <Recommended/>
            <Goods/>
        </div>
    )
}

export default FirstScreen;