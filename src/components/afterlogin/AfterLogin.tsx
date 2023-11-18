import React, { useState } from 'react'
import { EditOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';



function AfterLogin() {

let afterloginfreeData=[
  '模板免费用','版权商用','无水印下载','无广告'
]

const outLogin =()=>{
  localStorage.removeItem('token')
  localStorage.removeItem('userInfo')
}
  return (
    <div className='AfterLogin_box'>
      <div className="afterlogin_head_box">
        <h4>JSno</h4>
        <span onClick={outLogin}>退出</span>
      </div>
      <p style={{ fontSize: '10px' }}>升级会员享受更多权益 &gt;</p>
      <div className="afterlogin_middle_box">
        <div className="viptext_box">
          <h4>会员权益重磅升级</h4>
          <button>升级会员</button>
        </div>
        <div className="step_box">
        
        </div>
        <div className="afterlogin__main_con">
            {
              afterloginfreeData && afterloginfreeData.map((item)=>{
                return<dl>
                    <dt></dt>
                    <dd>{item}</dd>
                </dl>
              })
            }
        </div>
        <div className="afterlogin_button_box">
            <button>查看更多权益</button>
        </div>
      </div>
      <div className="afterlogin_footer_box">
        <div className="afterlogin_footer_con">
          <EditOutlined style={{ fontSize: '14px', color: '#08c' }} />
          <p>我的作品</p>
        </div>
        <div className="afterlogin_footer_con">
          <HeartOutlined style={{ fontSize: '14px', color: '#08c' }} />
          <p>我的收藏</p>
        </div>
        <div className="afterlogin_footer_con">
          <UserOutlined style={{ fontSize: '14px', color: '#08c' }} />
          <p>账号管理</p>
        </div>
      </div>
      <div className="afterlogin_userinfo_box">

      </div>
    </div>
  )
}

export default AfterLogin
