import React from 'react'
import {useState} from 'react'
import CardImg from './CardImg'
import '../layout/Onlycard.css'
import { EyeO,StarO,Star } from '@react-vant/icons';
const OnlyCard = () => {
  const [shoucangbol,setshoucangbol]=useState(false)
  const shouCangExent=()=>{
    setshoucangbol(!shoucangbol)
  }
  return (
    <div>
      <div className='onecard_zongbox'>
     <div className="onecard_box">
         <CardImg></CardImg>
         
         <div className="onecard_botombox">
          <p>考研培训班招生报名表，抓紧时间来报名，弯道超车</p>
          <div className="onecard_imagessbox">
            <div className="onecard_headimagess">
              <div className='onecard_headimagess_img'><img src="https://tupian.qqw21.com/article/UploadPic/2018-6/20186182127277279.jpg" alt="" /></div>
              <div className='onecard_headimagess_name'>金桔柠檬</div>
            </div>
            <div className="onecard_lookimagess">
              <div> <EyeO  /></div>
              <div className='onecard_textnum'>123</div>
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
