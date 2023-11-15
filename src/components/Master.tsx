import React,{useState,useRef} from 'react'
import '../layout/Master.css'


const items:any= [
  '../../zwb/1.webp',
  '../../zwb/2.webp',
  '../../zwb/3.webp',
  '../../zwb/4.webp',
  '../../zwb/5.webp',
  '../../zwb/6.webp',
  '../../zwb/7.webp',
  '../../zwb/8.webp',
]

function Master() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [ways,setWays] = useState('left')
  const [scrollstup,setScrollStup] = useState(0) 

  const handleChange = (type:string) => {
    const container = containerRef.current
    let newWidth =containerRef.current?.children[0].clientWidth*8 -container?.clientWidth
    console.log('111',11);
    
    if(container){
      setWays(type)
      let newScrollstup = type==='right'? newWidth:0;
      console.log(newScrollstup);
      
      container.style.transform=`translateX(${-newScrollstup}px)`
      setScrollStup(newScrollstup)
    }
  }
  
  return (
    <div className='Mac'>
      <div className='MasterBox' ref={containerRef}>
        {
          items.map(item =>{
            return <div className='boxList'>
              <img src={item} alt="" />
            </div>
          })
        }
      </div>
      <button onClick={()=>handleChange('left')} className={ways==='left'?'leftHid':'leftBox'}>&lt;</button>
      <button onClick={()=>handleChange('right')} className={ways==='right'?'rightHid':'rightBox'}>&gt;</button>
    </div>
  )
}

export default Master