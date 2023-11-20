import React from 'react'
import {useState ,useEffect} from 'react'
// import api from '../api/axiosInstance'
import { AddO } from '@react-vant/icons';
import logo from '../../public/cardimg/logo.webp'
import '../layout/MiddleCard.css'
import RightCard from './RightCard';
import { useNavigate } from 'react-router-dom'
function MiddleCard (prop:any){

  const {obj}=prop
  // console.log(obj,'56789876546789765467');
  
  const navigate=useNavigate()
  

  // const [imgbol,setimgbol]: any=useState(false)

  const [leftboxbol,setleftboxbol]=useState(false)

  // const [dataobj,setdataobj] :any=useState({})

  useEffect(() => {
    // api.get('/get/daytui').then((res)=>{
    //   console.log(res,'res');
    //   setdataobj(res.data)
    //   // res.data.imglist.length>1?setimgbol(true):setimgbol(false)
    //   res.data.lefttype?setleftboxbol(true):setleftboxbol(false)
    // })

    obj.lefttype?setleftboxbol(true):setleftboxbol(false)
    

  }, [])

  const gomorepages=()=>{
    navigate('/details')
  }

  
  // setdataobj(obj)

 
  return (
    <div className='con_cardzong'>
      <div className="con_topbox">
        <h2 className='con_fontTitle'>{obj.title}</h2>
        {
          obj.titleChild && <div className='con_two_title'>{obj.titleChild}</div>
        }
        <div className="con_tabli">
          {
            obj.tablist && obj.tablist.map((item :any,index :any)=>{
              return <div className='con_tabonly' key={index}>{item}</div>
            })
          }
        </div>
        <div className="con_lookmore" onClick={gomorepages}>查看更多&gt;</div>
      </div>
      <div className="con_botombox">
        {
            leftboxbol && <div className='con_bot_leftbox'>
              <div className="con_bot_left_topbox">
                  <div className="con_jiahao">
                    <AddO fontSize="50px" />
                  </div>
                <div className="con_bot_left_topbox_text">
                  空白创建
                </div>
              </div>
              <div className="con_bot_left_botbox">
                <img src={logo} alt="" />
              </div>
            </div>
        }
        <div className={leftboxbol?"con_bot_rightbox_two" :"con_bot_rightbox"}>
          <RightCard carditem={obj.cardlist}></RightCard>
        </div>
      </div>

    </div>
  )
}

export default MiddleCard
