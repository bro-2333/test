import React from 'react'
import { BellOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import AfterLogin from './AfterLogin';
import '../layout/sj_afterloginn.css'
function AfterLoginn() {
    return (
        <div className='AfterLoginn_box'>
            <div className="afterloginn_con">
                <Button size='middle'>工作台</Button>
                <span className='afterloginn_ticket'>券</span>
                <BellOutlined style={{ fontSize: '14px' }} />
                <div className="afterloginn_userinfo">
                    <img src="../../public/login_img/allhead1.png" alt="" />

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
