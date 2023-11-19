import React, { useCallback, useEffect, useState } from 'react'
import { Input, Select, Space } from 'antd';
import LunarCalendar from 'lunar-calendar';
import lunarFestivals from '../data/data'
import Calendar from './Calendar';
import Footer from './Footer';
import Master from './Master';
<<<<<<< HEAD
 import Lbtt from './Lbt'//轮播图
 import Scroll from './Scroll';//滚动
=======
import Lbtt from './Lbt'//轮播图
import Scroll from './Scroll';//滚动
// import api from '../api/axiosInstance'

import MiddleCard from './MiddleCard';
>>>>>>> 013bd0b718ce9e7a5eba38877e91affde4cd5314

function AllMainRightCon(prop :any) {
  const {cardlist,onlycard}=prop
  console.log(onlycard,'二级页面数据');
  
  const { Search } = Input;
  const options = [
    {
      value: '全部',
      label: '全部',
    },
    {
      value: 'H5',
      label: 'H5',
    },
    {
      value: '表单',
      label: '表单',
    },
    {
      value: '长图',
      label: '长图',
    },
    {
      value: '互动',
      label: '互动',
    },
    {
      value: '电子画册',
      label: '电子画册',
    },
    {
      value: '视频',
      label: '视频',
    },
    {
      value: '解决方案',
      label: '解决方案',
    },
  ];
  // let str = ['邀请函', '互动游戏', 'H5', '婚礼邀请函']
  // let [count, setcount]: any = useState(0);


  const [selectedDate, setSelectedDate] = useState(new Date());
  const [flag, setflag] = useState(false)
  const onSearch: any = (value: any) => console.log(value);
  const lunarDate = LunarCalendar.solarToLunar(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate());
  const lunarMomthTime = lunarDate.lunarMonthName
  const lunarDateTime = lunarDate.lunarDayName
  const key = `${new Date().getMonth() + 1}-${new Date().getDate()}`;
  const fistival = lunarFestivals[key] ? lunarFestivals[key].fast[0] : '每天好心情'
  let setTimeMouse: any

  const [defaultValue, setdefaultValue] = useState('邀请函')

  // //多个
  // const [cardlist,setcardlist]=useState([])
  // // 单个
  // const [onlycard,setonlycard] :any=useState([])

  const calenDay = useCallback((day: number) => {
    switch (day) {
      case 0: return '日';
      case 1: return '一';
      case 2: return '二';
      case 3: return '三';
      case 4: return '四';
      case 5: return '五';
      case 6: return '六';
    }
  }, [selectedDate.getDay()])
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
    setTimeMouse = setTimeout(() => {
      setflag(false);
    }, 400);
  }



  // useEffect(() => {
  //   // 获取多个
  //     api.get('/get/cardimg').then((res)=>{
  //     // console.log(res,'78912738');
  //     setcardlist(res.data)
  //   })

  //   // 获取今日推荐
  //    api.get('/get/daytui').then((res:any)=>{
  //     // console.log(res,'res');
  //     // const strrr:any=onlycard.push(res.data)
  //     // console.log(strrr,'12341231231232');
      
  //     setonlycard(res.data)
  //     // console.log(onlycard,'789786876');
      
  //     // res.data.imglist.length>1?setimgbol(true):setimgbol(false)
  //     // res.data.lefttype?setleftboxbol(true):setleftboxbol(false)
  //   })
  // }, [])

  // console.log(onlycard,'172o3uiy23178923891');
  




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
                <span>{new Date().getMonth() + 1}/</span>
                <span style={{ fontSize: "12px" }}>{new Date().getDate()}</span>
                <span style={{ paddingLeft: "10px" }}>{new Date().getFullYear()}</span>
              </div>
              <div className="downData">
                <span style={{ fontSize: "12px", color: "#666" }}>{`周${calenDay(new Date().getDay())}`}</span>
                <span style={{ fontSize: "12px", paddingLeft: "10px", color: "#666" }}>{`农历${lunarMomthTime}${lunarDateTime}`}</span>
              </div>
            </div>
            <div className="all_main_head_data_right">
              <img src="../../public/login_img/allhead1.png" alt="" />
              <p>{fistival}</p>
            </div>
          </div>
        </div>

        <div className={flag ? 'Calendar_box' : 'Calendar_box_hidden'} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <div>
            <button style={{ border: 'none', margin: '5px' }} onClick={() => handleMonthChange(-1)}>&lt;</button>
            <span style={{ fontSize: '20px' }}>{`${selectedDate.getFullYear()}年${selectedDate.getMonth() + 1}月`}</span>
            <button style={{ border: 'none', margin: '5px' }} onClick={() => handleMonthChange(1)}>&gt;</button>
          </div>
          <Calendar year={selectedDate.getFullYear()} month={selectedDate.getMonth() + 1} />
        </div>
      </div>

      {/* 轮播图 */}
      <div className="all_main_swiper">
        <Lbtt></Lbtt>
        <div className="swiper">
          <Scroll></Scroll>
        </div>
      </div>


      {/* 所有h5展示盒子 */}
      <div className="all_main_h5_box1">
        {
          onlycard && onlycard.map((item :any,index :any)=>{
            return  <div className="all_main_h5_con1" key={index}>
                      <MiddleCard obj={item}></MiddleCard>
                    </div>
          })
        }
       
      </div>


      {/* 广告盒 */}
      <div className="all_main_ads_box">
        <img src="../../public/login_img/main2.webp" alt="" />
      </div>


      {/* 所有h5展示盒子 */}
      <div className="all_main_h5_box2">
        {
          cardlist && cardlist.map((item :any,index :any)=>{
            return <div className='all_main_h5_box_child' key={index}>
              <MiddleCard key={index} obj={item}></MiddleCard>
            </div>
          })
        }
      </div>



      {/* 广告盒 */}
      <div className="all_main_ads_box">
        <img src="../../public/login_img/main1.webp" alt="" />
      </div>
      {/* 设计大咖盒 */}
      <div className="all_master_box">
        <h3>设计大咖<span>加入我们 | 月入百万不是梦!</span><a href="#">加入我们 &gt;</a></h3>
        <div className="Master_box">
          <Master />
        </div>
      </div>

      {/* 尾部 */}
      <div className="all_footer_box">
        <Footer />
      </div>
    </div>


  )

}
export default AllMainRightCon
