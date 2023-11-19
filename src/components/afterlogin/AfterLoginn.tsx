import React, { useEffect, useState } from 'react'
import { BellOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import AfterLogin from './AfterLogin';
import '../../layout/sj_afterloginn.css'
function AfterLoginn() {
    let [userInfo, setuserInfo]: any = useState({})
    const [flag, setflag] = useState(false)
    let setTimeMouse: any
    useEffect(() => {
        let userinfo: any = JSON.parse(localStorage.getItem('userinfo') || '')
        setuserInfo(userinfo)
        console.log('user info', userinfo)
    }, [])
    const mouseEnter = () => {
        clearTimeout(setTimeMouse)
        setflag(true);
    }
    const mouseLeave = () => {
        setTimeMouse = setTimeout(() => {
            setflag(false);
        }, 400);
    }
    return (
        <div className='AfterLoginn_box'>
            <div className="afterloginn_con">
                <Button size='middle'>工作台</Button>
                <span className='afterloginn_ticket'>券</span>
                <BellOutlined style={{ fontSize: '14px' }} />
                <div className="afterloginn_userinfo">
                    <img src={userInfo.img} alt=""  onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />
                    {/* 用户信息展示 */}
                    <div className="afterloginn_box" style={{ display: flag ? 'block' : 'none' }} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
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
