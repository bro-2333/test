import React, { useCallback, useEffect, useState } from 'react'
import { Input, Select, Space } from 'antd';
import LunarCalendar from 'lunar-calendar';
import lunarFestivals from '../data/data'
import Calendar from './Calendar';
import Footer from './Footer';
import Master from './Master';
 import Lbtt from './Lbt'//轮播图
 import Scroll from './Scroll';//滚动
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
  const [flag,setflag] = useState(false)
  const onSearch: any = (value: any) => console.log(value);
  const lunarDate = LunarCalendar.solarToLunar(selectedDate.getFullYear(), selectedDate.getMonth() + 1, selectedDate.getDate());
  const lunarMomthTime = lunarDate.lunarMonthName
  const lunarDateTime = lunarDate.lunarDayName
  const key = `${selectedDate.getMonth() + 1}-${selectedDate.getDate()+1}`;
  const fistival =lunarFestivals[key].fast[0]
  let setTimeMouse:any
  
  let [defaultValue, setdefaultValue] = useState('邀请函')
  

  const calenDay = useCallback((day:number) => {
    switch(day) {
      case 0: return '日';
      case 1: return '一';
      case 2: return '二';
      case 3: return '三';
      case 4: return '四';
      case 5: return '五';
      case 6: return '六';
    }
  },[selectedDate.getDay()])
  // 日历
  const handleMonthChange = (change: any) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(selectedDate.getMonth() + change);
    setSelectedDate(newDate);
  }
  // const allMainBox = document.querySelector('.all_main_head_data_box')
  // allMainBox.onMouse

  const mouseEnter = () => {
    clearTimeout(setTimeMouse)
    setflag(true);
  }
  const mouseLeave = () => {
    setTimeMouse=setTimeout(() => {
      setflag(false);
    }, 300);
  }

  return (

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
        <div className="all_main_head_data_box" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <div className="all_main_head_data_con">
            <div className="all_main_head_data_left">
              <div className="updata">
                <span>{selectedDate.getMonth() + 1}/</span>
                <span style={{ fontSize: "12px" }}>{selectedDate.getDate()}</span>
                <span style={{ paddingLeft: "10px" }}>{selectedDate.getFullYear()}</span>
              </div>
              <div className="downData">
                <span style={{ fontSize: "12px", color: "#666" }}>{`周${calenDay(selectedDate.getDay())}`}</span>
                <span style={{ fontSize: "12px", paddingLeft: "10px", color: "#666" }}>{`农历${lunarMomthTime}${lunarDateTime}`}</span>
              </div>
            </div>
            <div className="all_main_head_data_right">
              <img src="../../public/login_img/allhead1.png" alt="" />
              <p>{fistival}</p>
            </div>
          </div>
        </div>
       
        <div className={flag?'Calendar_box':'Calendar_box_hidden'} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <div>
            <button style={{border:'none'}} onClick={() => handleMonthChange(-1)}>&lt;</button>
            <span style={{ fontSize: '20px' }}>{`${selectedDate.getFullYear()}年${selectedDate.getMonth() + 1}月`}</span>
            <button style={{border:'none'}} onClick={() => handleMonthChange(1)}>&gt;</button>
          </div>
          <Calendar year={selectedDate.getFullYear()} month={selectedDate.getMonth() + 1} />
        </div>
      </div>
        <div className="all_main_swiper">
       <Lbtt></Lbtt>
        <Scroll></Scroll>
      </div>
      <div className="all_master_box">
        <h3>设计大咖<span>加入我们 | 月入百万不是梦!</span><a href="#">加入我们 &lt;</a></h3>
        <div className="Master_box">
          <Master />
        </div>
      </div>
      <div className="all_footer_box">
        <Footer />
      </div>
    </div>


  )

}
export default AllMainRightCon
