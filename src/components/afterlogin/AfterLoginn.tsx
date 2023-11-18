import React, { useEffect, useState } from 'react'
import { BellOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import AfterLogin from './AfterLogin';
import '../../layout/sj_afterloginn.css'
function AfterLoginn() {
    let [userInfo,setuserInfo] =useState('')
    useEffect(()=>{
        let userInfo:any = localStorage.getItem('userinfo')
        setuserInfo(userInfo)
        console.log('user info',userInfo)
    },[])
    return (
        <div className='AfterLoginn_box'>
            <div className="afterloginn_con">
                <Button size='middle'>工作台</Button>
                <span className='afterloginn_ticket'>券</span>
                <BellOutlined style={{ fontSize: '14px' }} />
                <div className="afterloginn_userinfo">
                    {/* <img src={userInfo} alt="" /> */}
<img src="https://tupian.qqw21.com/article/UploadPic/2020-7/202072722471645451.jpg" alt="" />
                    {/* 用户信息展示 */}
                    <div className="afterloginn_box">
                        <AfterLogin />
                    </div>
                </div>
            </div>
            <div className="login_cheap_box">

            </div>
        </div>
    )
}

export default AfterLoginn
