// Wa.tsx
import React, { useState, useRef, useEffect } from 'react';
import '../layout/Cardimg.css'

import styled from 'styled-components';

// 多个图片样式
const ImageBoxWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 600px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: 0;
  transition: opacity 0.5s ease;
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color:blue ;
  transition: opacity 0.5s ease;
  opacity: 0;
`;

const CardImg: React.FC = (prop:any) => {

    const {imglist}=prop

  const [isHovered, setIsHovered] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const handleMouseLeave = () => {
    setIsHovered(false);

    const boxElement = boxRef.current;
    if (boxElement) {
      const scrollStep = boxElement.scrollTop / 20;
      const scrollInterval = setInterval(() => {
        if (boxElement.scrollTop !== 0) {
          boxElement.scrollTop -= scrollStep;
        } else {
          clearInterval(scrollInterval);
        }
      }, 16);
    }
  };

  useEffect(() => {
    const boxElement = boxRef.current;

    const handleScroll = () => {
      if (isHovered && boxElement) {
        boxElement.scrollTop += 1; // 调整滚动速度
      }
    };

    const intervalId = setInterval(handleScroll, 20);

    return () => {
      clearInterval(intervalId);
    };
  }, [isHovered]);


//   多个图片
const [currentImage, setCurrentImage] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const boxWidth = e.currentTarget.clientWidth;
    const percent = e.nativeEvent.offsetX / boxWidth;
    const nextImage = Math.floor(percent * imglist.length);
    setCurrentImage(nextImage);
  };

  const handleMouseEnter = () => {
    setShowProgressBar(true);
  };

  const handleMouseLeavemore = () => {
    setShowProgressBar(false);
  };



  return (
    <div>
        {
              <div style={{borderRadius:'10px'}}
                className={`scrolling-box ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}  
                ref={boxRef}
                >
                <img style={{borderRadius:'10px'}}
                    src="https://img.zcool.cn/community/0167db5d5cf6dba8012187f4ff06ea.jpg@1280w_1l_2o_100sh.jpg" // 替换为你的图片 URL
                    alt="Scrolling Image"
                />
                </div>
        }
        {/* {
            imglist.length>1 &&   <ImageBoxWrapper
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeavemore}
                    >
                    {imglist.map((image :any, index :any) => (
                        <Image
                        key={index}
                        src={image}
                        style={{ opacity: index === currentImage ? 1 : 0 }}
                        />
                    ))}
                    <ProgressBar
                        style={{
                        width: `${(currentImage + 1) * 20}%`,
                        opacity: showProgressBar ? 1 : 0,
                        }}
                    />
                    </ImageBoxWrapper>
        } */}
    </div>
    
   
  );
};

export default CardImg;