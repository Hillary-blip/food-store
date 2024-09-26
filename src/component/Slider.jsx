import { useState, useEffect, useCallback } from 'react';
import '../styles/slider.css';
import React from 'react';

const Slider = () => {
    // Массив с изображениями для слайдов
    const images = [
        '/Images/baner1.svg',
        '/Images/baner1.svg',
        '/Images/baner1.svg'
    ];

    // Текущее состояние слайда
    const [currentSlide, setCurrentSlide] = useState(0);

    // Функция для перехода на следующий слайд
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    // Функция для перехода на определённый слайд при клике на точку
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Автоматическая прокрутка слайдов каждые 3 секунды
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [nextSlide]);  // Теперь nextSlide не пересоздается

    return (
        <div className="container">
            <div className="slider">
                {/* Отображаем текущий слайд */}
                <div className="slider__inner">
                    <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
                </div>
            </div>

            {/* Управление точками */}
            <div className="dots-container">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`dots ${currentSlide === index ? 'active' : ''}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
