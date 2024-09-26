import React from "react";
import Slider from "./Slider";
import '../styles/Header.css';
import SliderNow from "./Slider-now";

const Header = () => {

    return (
        <div className="Header">
            <div className="container">
                <div className="container-inner">
                    <div className="info-block">
                        <div className="info__block-inner">
                            <h1 className="title-info">Наш телефон</h1>
                            <p className="number">+996 705 188 955</p>
                            <p className="number">+996 555 188 955</p>
                            <span className="time-work">работаем с 10:00 до 00:00</span>
                        </div>
                        <div className="cuty">
                            <h3 className="title-cuty">
                                Город:
                            </h3>
                            <p className="text-cuty">Бишкек</p>
                        </div>
                    </div>
                    <div className="Header-inner">
                        <div className="dilivery">
                            <p className="reviews-btn">Отзывы</p>
                            <p className="dilivery-btn">Доставка и оплата</p>
                            <div className="search">
                                <img src="/Images/search.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <Slider />
                <div className="recomendation">
                    <div className="recomendation-inner">
                        <div className="chiken">
                            <img src="/Images/чикен.svg" alt="" />
                        </div>
                        <div className="rec-item">
                            <div className="rols">
                                <img src="/Images/роллф.svg" alt="" />
                            </div>
                            <div className="corn">
                                <img src="/Images/корн.svg" alt="" />
                            </div>
                        </div>
                        <div className="pizza">
                            <img src="/Images/пицца.svg" alt="" />
                        </div>
                        <div className="akcee">
                            <img src="/Images/Акции.svg" alt="" />
                        </div>
                    </div>
                </div>
                <SliderNow />
            </div>
        </div>
    )
}

export default Header