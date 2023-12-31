import React,{useState,useRef} from 'react'
import '../layout/Rightcard.css'
import OnlyCard from './OnlyCard'
import { ArrowLeft,Arrow } from '@react-vant/icons';
import {
  ArrowRightOutlined
} from '@ant-design/icons';
function RightCard(prop :any) {
  const {carditem} = prop
  console.log('carditem',carditem);
  
  const containerRef = useRef<HTMLDivElement>(null)
  const [ways,setWays] = useState('left')
  const [scrollstup,setScrollStup] = useState(0) 

  const handleChange = (type:string) => {
    console.log('111',11);
    const container = containerRef.current
    const newWidth =containerRef.current?.children[0].clientWidth*8 -container?.clientWidth
    
    if(container){
      setWays(type)
      const newScrollstup = type==='right'? newWidth:0;
      console.log(newScrollstup);
      
      container.style.transform=`translateX(${-newScrollstup}px)`
      setScrollStup(newScrollstup)
    }
  }
  
  return (
    <div className='midcard_Mac'>
      <div className='midcard_MasterBox' ref={containerRef}>
        {
          carditem && carditem.map((item :any,carditemIndex:any)=>{
            return  <div className='midcard_boxList' key={carditemIndex}>
                        <OnlyCard carditem={item} ></OnlyCard>
                    </div>
          })

          
        }

        <div className='midcard_boxList_btn'>
           <div className="gomorepage">
            <ArrowRightOutlined />
           </div>
        </div>
       
        {/* {
          items.map((item:any) =>{
            return <div className='boxList'>
              <img src={item} alt="" />
            </div>
          })
        } */}
      </div>
      <button onClick={()=>handleChange('left')} className={ways==='left'?'midcard_leftHid':'midcard_leftBox'}><ArrowLeft fontSize="20px" /></button>
      <button onClick={()=>handleChange('right')} className={ways==='right'?'midcard_rightHid':'midcard_rightBox'}><Arrow  /></button>
    </div>
  )
}

export default RightCard