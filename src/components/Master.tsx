import React,{useState} from 'react'
import '../layout/Master.css'


const items:any= [
  '../../public/zwb/1.webp',
  '../../public/zwb/2.webp',
  '../../public/zwb/3.webp',
  '../../public/zwb/4.webp',
  '../../public/zwb/5.webp',
  '../../public/zwb/6.webp',
  '../../public/zwb/7.webp',
  '../../public/zwb/8.webp',
]

function Master() {
  
  return (
    <div className='MasterBox'>
      {
        items.map(item =>{
          return <div className='boxList'>
            <img src={item} alt="" style={{width:'90%',height:'90%'}}/>
          </div>
        })
      }
    </div>
  )
}

export default Master