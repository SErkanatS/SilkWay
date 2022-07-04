import React from "react";
import Head from './Head.png'
import Avatar2 from './User-avatar.svg'
import './Addproduct.css'
import Avatar from "./Avatar.svg";
import Arrow from "./Arrow.svg";
import DropFileInput from './components/drop-file-input/DropFileInput';

const Addproduct = () => {
    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <div className='Addproduct'>
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
                    <div className="add">
                        <div className="description">
                            <label htmlFor="name">Название продукта</label><br/><br/>
                            <input type="text" name="name" placeholder={"Введите название"}/><br/><br/>
                            <label htmlFor="name">Категория товара</label><br/><br/>
                            <input type="text" name="name" placeholder={"Введите категорию товара"}/><br/><br/>
                            <label htmlFor="name">Цена за штуку</label><br/><br/>
                            <input type="text" name="name" placeholder={"Цена"}/><br/><br/>
                            <label htmlFor="name">Выберите цвета</label><br/><br/>
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
                            <label htmlFor="name">Описание</label><br/><br/>
                            <textarea name="" id="" cols="70" rows="15" placeholder={"Описание товара"}></textarea>
                        </div>
                        <div className="upload">
                            <h1>Upload Your File</h1>
                            <p>Select the following format<br/>PNG,JPEG,DOCX,PDF </p>
                            <div className="box">
                                <DropFileInput onFileChange={(files) => onFileChange(files)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addproduct;