// Wa.tsx
import React, { useState, useRef, useEffect } from 'react';
import '../layout/Cardimg.css'

import styled from 'styled-components';

// 多个图片样式
const ImageBoxWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  position: absolute;
  top:0;
  left:0;
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

    const {cardImglist}=prop
    // console.log('cardImglist',cardImglist);
    

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
    const nextImage = Math.floor(percent * cardImglist.length);
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
<<<<<<< HEAD
          cardImglist.length==1 &&cardImglist.map((item :any,cardImgListIndex :any)=>{
            return <div
            key={cardImgListIndex}
=======
              <div style={{borderRadius:'10px'}}
>>>>>>> 8acb47f72bc06a011d5cb7b438125cb64fd4dc1e
                className={`scrolling-box ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}  
                ref={boxRef}
                >
<<<<<<< HEAD
                <img
                    src={item} // 替换为你的图片 URL
=======
                <img style={{borderRadius:'10px'}}
                    src="https://img.zcool.cn/community/0167db5d5cf6dba8012187f4ff06ea.jpg@1280w_1l_2o_100sh.jpg" // 替换为你的图片 URL
>>>>>>> 8acb47f72bc06a011d5cb7b438125cb64fd4dc1e
                    alt="Scrolling Image"
                />
                </div>
          })
              
        }
        {
            cardImglist.length>1 &&   <ImageBoxWrapper
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeavemore}
                    >
                    {cardImglist.map((image :any, index :any) => (
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
        }
    </div>
    
   
  );
};

export default CardImg;