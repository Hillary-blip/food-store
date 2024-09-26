import { useState } from "react";
import '../styles/SliderNow.css';
import React from 'react';

const SliderNow = () => {
    const info = [
        {
            img: '/Images/set1.svg',
            title: 'Сет Суши',
            price: 1200,
            description: '1050 грамм, 30 кусочков'
        },
        {
            img: '/Images/set2.svg',
            title: 'Филадельфия и лосось сет',
            price: 1500,
            description: '1260 грамм, 36 кусочков'
        },
        {
            img: '/Images/set3.svg',
            title: 'Самая большая Филадельфия',
            price: 1700,
            description: '1450 грамм, 45 кусочков'
        },
        {
            img: '/Images/set1.svg',
            title: 'Сет Суши',
            price: 1200,
            description: '1050 грамм, 30 кусочков'
        },
        {
            img: '/Images/set2.svg',
            title: 'Филадельфия и лосось сет',
            price: 1500,
            description: '1260 грамм, 36 кусочков'
        },
        {
            img: '/Images/set3.svg',
            title: 'Самая большая Филадельфия',
            price: 1700,
            description: '1450 грамм, 45 кусочков'
        }
    ];

    const [activeSlider, setSlide] = useState(0);
    const showSlide = 3;

    const NextSlide = () => {
        setSlide((prevIndex) => (prevIndex + 1) % info.length);
    };

    const PrevSlide = () => {
        setSlide((prevIndex) => (prevIndex - 1 + info.length) % info.length);
    };

    const visibleSlides = [];

    for (let i = 0; i < showSlide; i++) {
        visibleSlides.push(info[(activeSlider + i) % info.length]);
    }

    return (
        <div className="Slider-producr">

            {/* <h1 className="title-slider">Новинки</h1> */}
            <div className="slider-product__inner">
                <div className="slider-content__inner">
                <h1 className="title-slider">Новинки</h1>
                <div className="pushka">
                    <button className="prev" onClick={PrevSlide}>&#10094;</button>
                    {visibleSlides.map((slide, index) => (
                        <div key={index} className="contetn-slider">
                            <div className="product-img">
                                <img src={slide.img} alt="" />
                            </div>
                            <h2 className={`slide-title ${slide.title === 'Сет Суши' ? "first-slide" : ""}`}>{slide.title}</h2>
                            <p className="text-slide">{slide.description}</p>
                            <hr />
                            <div className="add-btn">
                                <span className="slide-price">{slide.price} ₽</span>
                                <button className="btn-product">Хочу!</button>
                            </div>
                        </div>
                    ))}
                    <button className="next" onClick={NextSlide}>&#10095;</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SliderNow;
