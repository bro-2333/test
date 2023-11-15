import React, { useState, useRef } from 'react';
import { Carousel } from 'antd';

// 引入样式
import "../layout/scroll.css"

const contentStyle: React.CSSProperties = {
    width: "250px",
    height: "100px",
    borderRadius: "5px",
};

const Scroll: React.FC = () => {
    const carouselRef = useRef<any>(null);
    const [hideLeftArrow, setHideLeftArrow] = useState(true);
    const [hideRightArrow, setHideRightArrow] = useState(false);

    const handleLeftClick = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    };

    const handleRightClick = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    const onChange = (current: number) => {
        if (current === 0) {
            setHideLeftArrow(true);
            setHideRightArrow(false);
        } else if (current === 1) {
            setHideLeftArrow(false);
            setHideRightArrow(true);
        }
    };

    return (
        <div style={{ position: 'relative' }}>
            <Carousel afterChange={onChange} ref={carouselRef} dots={false}>
                <div className='Picture_List'>
                    <img style={contentStyle} src="../../public/lbt/1.webp" alt="" />
                    <img style={contentStyle} src="../../public/lbt/2.webp" alt="" />
                    <img style={contentStyle} src="../../public/lbt/3.webp" alt="" />
                    <img style={contentStyle} src="../../public/lbt/4.webp" alt="" />
                    <img style={contentStyle} src="../../public/lbt/5.webp" alt="" />
                </div>
                <div className='Picture_List'>
                  <img style={contentStyle} src="../../public/lbt/1.webp" alt="" />
                    <img style={contentStyle} src="../../public/lbt/2.webp" alt="" />
                    <img style={contentStyle} src="../../public/lbt/3.webp" alt="" />
                    <img style={contentStyle} src="../../public/lbt/4.webp" alt="" />
                    <img style={contentStyle} src="../../public/lbt/5.webp" alt="" />
                </div>
            </Carousel>
            {!hideLeftArrow && (
                <button
                    className="slick-prev slick-arrow"
                    onClick={handleLeftClick}
                    style={{ position: 'absolute', top: '37%', left: '0', zIndex: 1 }}
                >

                </button>
            )}
            {!hideRightArrow && (
                <button
                    className="slick-next slick-arrow"
                    onClick={handleRightClick}
                    style={{ position: 'absolute', top: '37%', right: '0', zIndex: 1 }}
                >

                </button>
            )}
        </div>
    );
};

export default Scroll;
