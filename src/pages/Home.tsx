import React, { } from 'react'

import HeadLogo from '../components/HeadLogo'
// import AllMainRightCon from '../components/AllMainRightCon';
import AllMainRightCon from '../components/AllMainRightCon'
import {
    HomeOutlined,
    FundProjectionScreenOutlined,
    FileAddOutlined,
    SettingOutlined
} from '@ant-design/icons';

const Home = () => {

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
                    <AllMainRightCon />
                </div>
            </div>
        </div>
    )
}

export default Home
