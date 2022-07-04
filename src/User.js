import React from "react";
import Head from './Head.png'
import Avatar2 from './User-avatar.svg'
import './User.css'
import Avatar from "./Avatar.svg";
import Arrow from "./Arrow.svg";
import Card from "./Card";

const User = () => {
    return (
        <div className='User'>
            <div className="head">
                <img src={Head} alt="head"/>
            </div>
            <div className="user-info">
                <div className="user-panel">
                    <div className="avatar">
                        <img src={Avatar2} alt="Useravatar"/>
                    </div>
                    <div>
                        <div className="options">
                            <div className="header">
                                <h1>Sense Company</h1>
                            </div>
                            <div className="option">
                                <div className="option-body">
                                    <img src={Avatar} alt="Avatar"/>
                                    <p>Товары</p>
                                </div>
                                <button>
                                    <img src={Arrow} alt="Arrow"/>
                                    <div className="dropdown-content">

                                    </div>
                                </button>
                            </div>
                            <div className="option">
                                <div className="option-body">
                                    <img src={Avatar} alt="Avatar"/>
                                    <p>Услуги</p>
                                </div>
                                <button>
                                    <img src={Arrow} alt="Arrow"/>
                                    <div className="dropdown-content">

                                    </div>
                                </button>
                            </div>
                            <div className="option">
                                <div className="option-body">
                                    <img src={Avatar} alt="Avatar"/>
                                    <p>Архив</p>
                                </div>
                                <button>
                                    <img src={Arrow} alt="Arrow"/>
                                    <div className="dropdown-content">

                                    </div>
                                </button>
                            </div>
                            <div className="option">
                                <div className="option-body">
                                    <img src={Avatar} alt="Avatar"/>
                                    <p>Прочее</p>
                                </div>
                                <button>
                                    <img src={Arrow} alt="Arrow"/>
                                    <div className="dropdown-content">

                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="products">
                    <div className="header">
                        <h1>Товары</h1>
                        <div className="right">
                            <a href="/addproduct">
                                <button>Добавить товар</button>
                            </a>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="row">
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                        <div className="row">
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;