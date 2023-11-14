import React, { useState, useRef } from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import '../layout/lbt.css'; // Assuming you have a CSS file for styling
const imageUrls = [
  "https://img0.baidu.com/it/u=1323575644,1970106555&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
  "https://img2.baidu.com/it/u=2980521829,3346943998&fm=253&fmt=auto&app=120&f=JPEG?w=799&h=500",
  "https://img0.baidu.com/it/u=2493485631,3753878583&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
  "https://img2.baidu.com/it/u=3765817756,3156071734&fm=253&fmt=auto&app=138&f=JPEG?w=708&h=500",
  "https://img2.baidu.com/it/u=492254775,3481016229&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",
  "https://img2.baidu.com/it/u=2194460080,3344696977&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
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
        height: '300px', // Adjust height as needed
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