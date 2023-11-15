import React, { useEffect, useState } from 'react'
import { Input, Select, Space } from 'antd';
import Calendar from './Calendar';
function AllMainRightCon() {
  const { Search } = Input;
  const options = [
    {
      value: '北京',
      label: '北京',
    },
    {
      value: '江苏',
      label: '江苏',
    },
  ];
  let str = ['邀请函', '互动游戏', 'H5', '婚礼邀请函']
  let [count, setcount]: any = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const onSearch: any = (value: any) => console.log(value);
  let [defaultValue, setdefaultValue] = useState('邀请函')

  // 日历
  const handleMonthChange = (change: any) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(selectedDate.getMonth() + change);
    setSelectedDate(newDate);

  }
// const allMainBox = document.querySelector('.all_main_head_data_box')
// allMainBox.onMouse

  return (
    <div>
      <div className='All_Main_Right_box'>
        <div className="all_main_head_box">
          <div className="all_main_head_img">
            <img src="../../public/login_img/0yuan.webp" alt="" />
          </div>
          <div className="all_main_head_search_box">
            <div className="all_main_head_search">
              <Space.Compact>
                <Select defaultValue="全部" options={options} />
                <Search allowClear defaultValue={defaultValue} onSearch={onSearch} enterButton />
              </Space.Compact>
            </div>
            <div className="all_main_head_nav">
              <ul>
                <li>邀请函</li>
                <li>互动小游戏</li>
                <li>H5</li>
                <li>婚礼邀请函</li>
                <li>抽奖</li>
                <li>游戏</li>
              </ul>
            </div>
          </div>
          <div className="all_main_head_data_box">
            <div className="all_main_head_data_con">
              <div className="all_main_head_data_left">
                <div className="updata">
                  <span>11/</span>
                  <span style={{ fontSize: "12px" }}>14</span>
                  <span style={{ paddingLeft: "10px" }}>2023</span>
                </div>
                <div className="downData">
                  <span style={{ fontSize: "12px", color: "#666" }}>周二</span>
                  <span style={{ fontSize: "12px", paddingLeft: "10px", color: "#666" }}>农历十月初二</span>
                </div>
              </div>
              <div className="all_main_head_data_right">
                <img src="../../public/login_img/allhead1.png" alt="" />
                <p>电影情人节</p>

              </div>
            </div>
          </div>
          <div className="Calendar_box">
            <div>
              <button onClick={() => handleMonthChange(-1)}>上个月</button>
              <span style={{ fontSize: '20px' }}>{`${selectedDate.getFullYear()}年${selectedDate.getMonth() + 1}月`}</span>
              <button onClick={() => handleMonthChange(1)}>下个月</button>
            </div>
            <Calendar year={selectedDate.getFullYear()} month={selectedDate.getMonth() + 1} />
          </div>
        </div>
      </div>
    </div>

  )

}
export default AllMainRightCon
