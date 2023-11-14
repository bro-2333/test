import React, { useState, useRef } from 'react';
import { Carousel } from 'antd';

// 引入样式
import "../layout/scroll.css"

const contentStyle: React.CSSProperties = {
    width: "200px",
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
                    <img style={contentStyle} src="https://img1.baidu.com/it/u=904940490,1135723751&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" alt="" />
                    <img style={contentStyle} src="https://img2.baidu.com/it/u=4243029348,3228741682&fm=253&fmt=auto&app=138&f=JPEG?w=846&h=500" alt="" />
                    <img style={contentStyle} src="https://img1.baidu.com/it/u=2964242130,287279545&fm=253&fmt=auto&app=138&f=JPEG?w=770&h=500" alt="" />
                    <img style={contentStyle} src="https://img2.baidu.com/it/u=3549876221,2453641501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=280" alt="" />
                    <img style={contentStyle} src="https://img1.baidu.com/it/u=3549530601,1375154555&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281" alt="" />
                </div>
                <div className='Picture_List'>
                    <img style={contentStyle} src="https://img2.baidu.com/it/u=2067147301,4211966213&fm=253&fmt=auto&app=138&f=JPEG?w=747&h=500" alt="" />
                    <img style={contentStyle} src="https://img2.baidu.com/it/u=4243029348,3228741682&fm=253&fmt=auto&app=138&f=JPEG?w=846&h=500" alt="" />
                    <img style={contentStyle} src="https://img1.baidu.com/it/u=2964242130,287279545&fm=253&fmt=auto&app=138&f=JPEG?w=770&h=500" alt="" />
                    <img style={contentStyle} src="https://img2.baidu.com/it/u=3549876221,2453641501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=280" alt="" />
                    <img style={contentStyle} src="https://img1.baidu.com/it/u=3549530601,1375154555&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281" alt="" />
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
