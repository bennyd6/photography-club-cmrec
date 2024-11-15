import { useState, useEffect } from 'react';
import './carousal.css';

export default function Carousal({ images, heading, paragraph }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="car-main">
            <div className="car-1">
                <img src={images[currentIndex]} alt="Award" />
            </div>
            <div className="car-2">
                <h1>{heading}</h1>
                <p>{paragraph}</p>
            </div>
        </div>
    );
}