import React, { useState, useRef } from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import '../layout/lbt.css'; // Assuming you have a CSS file for styling
const imageUrls = [
 "../../public/login_img/banner1.webp",
  "../../public/login_img/banner2.webp",
  "../../public/login_img/banner3.webp",
  "../../public/login_img/banner4.webp",
];
function Lbt(){

   const [isPaused, setIsPaused] = useState(false);
    const [showArrows, setShowArrows] = useState(false); // Track arrow visibility

    const carouselRef = useRef<any>(null);

    const handleMouseEnter = () => {
        setIsPaused(true);
        setShowArrows(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
        setShowArrows(false);
    };

    const nextSlide = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    const prevSlide = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    };

    const contentStyle: React.CSSProperties = {
        width: '100%', // Adjust width as needed
        height: '200px', // Adjust height as needed
        objectFit: 'cover', // This will make sure the image covers the whole space
        borderRadius: '10px'
    };

    return (
        <div className="carousel-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Carousel
                ref={carouselRef}
                autoplay={!isPaused}
                autoplaySpeed={5000}
                beforeChange={() => {
                    setShowArrows(false);
                }}
            >
                {imageUrls.map((imageUrl, index) => (
                    <div key={index}>
                        <img src={imageUrl} alt={`Slide ${index + 1}`} style={contentStyle} />
                    </div>
                ))}
            </Carousel>

            <div className="dots-container">
                {[0, 1, 2, 3].map((index) => (
                    <span
                        key={index}
                        className={index === 0 ? 'dot active' : 'dot'}
                        onClick={() => {
                            if (carouselRef.current) {
                                carouselRef.current.goTo(index);
                            }
                        }}
                    />
                ))}
            </div>

            {showArrows && (
                <div>
                    <LeftOutlined className="arrow left-arrow" onClick={prevSlide} />
                    <RightOutlined className="arrow right-arrow" onClick={nextSlide} />
                </div>
            )}
        </div>
    );
}

export default Lbt;