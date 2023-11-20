
import React from 'react'
import AfterHeadLogo from '../components/AfterHeadLogo';
import TopChoose from '../components/TopChoose';


import {
  HomeOutlined,
  FundProjectionScreenOutlined,
  FileAddOutlined,
  SettingOutlined
} from '@ant-design/icons';

function Details() {
 
  return (
    <div>
      <div className='HeadLogo_out'><AfterHeadLogo /></div>
      
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
          <div className="topchoosebox_out">
            <TopChoose />
          </div>
          <div className="topchoosebox_sort">
            <ul>
              <li className='topchoos_active'>综合排序</li>
              <li>最新</li>
              <li>最热</li>
              <li>排序</li>
            </ul>
          </div>
          <div className="topchoosebox_main">
            <div className="Waterfall_flow">
              111
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
