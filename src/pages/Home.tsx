import React, { useEffect,useState } from 'react'

import HeadLogo from '../components/HeadLogo'
import AllMainRightCon from '../components/AllMainRightCon'

import api from '../api/axiosInstance'

import {
    HomeOutlined,
    FundProjectionScreenOutlined,
    FileAddOutlined,
    SettingOutlined
} from '@ant-design/icons';


  



const Home = () => {

    //多个
  const [cardlist,setcardlist]=useState([])
  // 单个
  const [onlycard,setonlycard] :any=useState([])



useEffect(() => {
    // 获取多个
      api.get('/get/cardimg').then((res)=>{
      // console.log(res,'78912738');
      setcardlist(res.data)

    // console.log(cardlist,'123');

    })

    // 获取今日推荐
     api.get('/get/daytui').then((res:any)=>{
      // console.log(res,'res');
      // const strrr:any=onlycard.push(res.data)
      // console.log(strrr,'12341231231232');
      
      setonlycard(res.data)
    //   console.log(onlycard,'456');
      // console.log(onlycard,'789786876');
      
      // res.data.imglist.length>1?setimgbol(true):setimgbol(false)
      // res.data.lefttype?setleftboxbol(true):setleftboxbol(false)
    })


}, [])





    return (
        <div>
            <HeadLogo />
            <div className='allmain_box'>
                <div className="allmain_left">
                    <ul>
                        <li><HomeOutlined style={{ fontSize: '16px', color: 'rgb(225, 86, 6)' }} /><span>精品推荐</span></li>
                        <li><FundProjectionScreenOutlined style={{ fontSize: '16px', color: 'rgb(6, 225, 32)' }} /><span>工作台</span></li>
                        <li><FileAddOutlined style={{ fontSize: '16px', color: 'rgb(6, 86, 225)' }} /><span>创建设计</span></li>
                        <li><SettingOutlined style={{ fontSize: '16px', color: 'rgb(225, 174, 6)' }} /><span>偏好设置</span></li>
                    </ul>
                    <p>创意设计</p>
                    <ul>
                        <li><HomeOutlined style={{ fontSize: '16px', color: 'rgb(225, 86, 6)' }} /><span>精品推荐</span></li>
                        <li><FundProjectionScreenOutlined style={{ fontSize: '16px', color: 'rgb(6, 225, 32)' }} /><span>工作台</span></li>
                        <li><FileAddOutlined style={{ fontSize: '16px', color: 'rgb(6, 86, 225)' }} /><span>创建设计</span></li>
                        <li><SettingOutlined style={{ fontSize: '16px', color: 'rgb(225, 174, 6)' }} /><span>偏好设置</span></li>
                        <li><HomeOutlined style={{ fontSize: '16px', color: 'rgb(225, 86, 6)' }} /><span>精品推荐</span></li>
                        <li><FundProjectionScreenOutlined style={{ fontSize: '16px', color: 'rgb(6, 225, 32)' }} /><span>工作台</span></li>
                        <li><FileAddOutlined style={{ fontSize: '16px', color: 'rgb(6, 86, 225)' }} /><span>创建设计</span></li>
                        <li><SettingOutlined style={{ fontSize: '16px', color: 'rgb(225, 174, 6)' }} /><span>偏好设置</span></li>
                        <li><HomeOutlined style={{ fontSize: '16px', color: 'rgb(225, 86, 6)' }} /><span>精品推荐</span></li>
                        <li><FundProjectionScreenOutlined style={{ fontSize: '16px', color: 'rgb(6, 225, 32)' }} /><span>工作台</span></li>

                    </ul>
                    <p>其他</p>
                    <ul>
                        <li>帮助中心</li>
                        <li>招募设计师</li>
                        <li>招募服务商</li>
                    </ul>
                </div>
                <div className="allmain_right">
                    <AllMainRightCon cardlist={cardlist} onlycard={onlycard} />
                </div>
            </div>
           
        </div>
    )
}

export default Home
