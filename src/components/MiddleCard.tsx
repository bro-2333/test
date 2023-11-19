import React from 'react'
import {useState,useEffect} from 'react'
import api from '../api/axiosInstance'
import { AddO } from '@react-vant/icons';
import logo from '../../public/cardimg/logo.webp'
import '../layout/MiddleCard.css'
import RightCard from './RightCard';
function MiddleCard (){

  const [imgbol,setimgbol]: any=useState(false)

  const [leftboxbol,setleftboxbol]=useState(false)

  const [dataobj,setdataobj] :any=useState({})

  useEffect(() => {
    api.get('/get/daytui').then((res)=>{
      console.log(res,'res');
      setdataobj(res.data)
      // res.data.imglist.length>1?setimgbol(true):setimgbol(false)
      res.data.lefttype?setleftboxbol(true):setleftboxbol(false)
    })


  }, [])

 
  return (
    <div className='con_cardzong'>
      <div className="con_topbox">
        <h2 className='con_fontTitle'>{dataobj.title}</h2>
        {
          dataobj.titleChild && <div className='con_two_title'>{dataobj.titleChild}</div>
        }
        <div className="con_tabli">
          {
            dataobj.tablist && dataobj.tablist.map((item,index)=>{
              return <div className='con_tabonly' key={index}>{item}</div>
            })
          }
        </div>
        <div className="con_lookmore">查看更多&gt;</div>
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
        <div className="con_bot_rightbox">
          <RightCard></RightCard>
        </div>
      </div>

    </div>
  )
}

export default MiddleCard
