import React from 'react'
import {useState} from 'react'
import CardImg from './CardImg'
import '../layout/Onlycard.css'
import { EyeO,StarO,Star } from '@react-vant/icons';
const OnlyCard = (prop :any) => {
  const {carditem}=prop
  const [shoucangbol,setshoucangbol]=useState(false)
  const shouCangExent=()=>{
    setshoucangbol(!shoucangbol)
  }
  return (
    <div>
      <div className='onecard_zongbox'>
     <div className="onecard_box">
         <CardImg cardImglist={carditem.cardImgList}></CardImg>
         
         <div className="onecard_botombox">
          <p>{carditem.cardTitle}</p>
          <div className="onecard_imagessbox">
            <div className="onecard_headimagess">
              <div className='onecard_headimagess_img'><img src={carditem.cardHeadImg} alt="" /></div>
              <div className='onecard_headimagess_name'>{carditem.cardName}</div>
            </div>
            <div className="onecard_lookimagess">
              <div> <EyeO  /></div>
              <div className='onecard_textnum'>{carditem.cardNum}</div>
            </div>
          </div>
         </div>
         <div className="onecard_shoucang">
            
          {
            shoucangbol ?<Star fontSize="25px" color="orange" onClick={shouCangExent}  />:<StarO fontSize="25px" color="#fff" onClick={shouCangExent} />
          }
          
         </div>
     </div>
    </div>
    </div>
  )
}

export default OnlyCard
