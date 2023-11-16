// Calendar.jsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import LunarCalendar from 'lunar-calendar';
import '../layout/Calendar.css'; // 导入你的 CSS 文件
import lunarFestivals from '../data/data'


//获取指定月份的总天数
const getDaysInMonth = (year:any, month:any) => {
  return new Date(year, month, 0).getDate();//获取月末的最后一天
};

const carTime = new Date().getTime();
const carListTime = Object.values(lunarFestivals)
let carList:any = [];

carListTime.map((time) => {
  if(time['timer']>carTime){
    let carDay = Math.ceil((time['timer']-carTime) / (24 * 3600 * 1000));
    let dayName = Object.keys(lunarFestivals).find((item)=>lunarFestivals[item]===time)
    carList.push({
      carDay,
      dayName,
      data:time['fast']
    })
  }
})
console.log(carList);



//渲染日历数据
const generateCalendarData = (year:any, month:any) => {
  const firstDay = new Date(year, month - 1, 1).getDay(); // 0 (星期日) 到 6 (星期六)
  const totalDays = getDaysInMonth(year, month);
  const calendarData = [];

  // 计算上个月的开始日
  const prevMonthDays = firstDay === 0 ? 7 : firstDay;
  const prevMonth = month === 1 ? 12 : month - 1;
  const prevMonthYear = month === 1 ? year - 1 : year;

  // 计算下个月的开始日
  const nextMonthDays = 42 - totalDays - prevMonthDays;
  const nextMonth = month === 12 ? 1 : month + 1;
  const nextMonthYear = month === 12 ? year + 1 : year;

  let prevDay=getDaysInMonth(prevMonthYear, prevMonth) - prevMonthDays+1

  // 添加上个月的日期
  for (let i = totalDays - prevMonthDays + 1; i <= totalDays; i++) {
    console.log(prevMonthYear, prevMonth);

    const lunarDate = LunarCalendar.solarToLunar(prevMonthYear, prevMonth, prevDay);
    calendarData.push({
      day: prevDay,
      lunarInfo: {
        lunarDay: lunarDate.lunarDayName,
        lunarMonth: lunarDate.lunarMonthName,
        lunarYear: lunarDate.lunarYear,
        GanZhiYear: lunarDate.GanZhiYear,
        GanZhiMonth: lunarDate.GanZhiMonth,
        GanZhiDay: lunarDate.GanZhiDay
      },
      festival: getLunarFestival(prevMonth, prevDay),
      className: 'prev-month',
    });
    prevDay++
  }

  // 添加当前月的日期
  for (let i = 1; i <= totalDays; i++) {
    console.log(year,month);
    
    const lunarDate = LunarCalendar.solarToLunar(year, month, i);
    console.log(lunarDate);
    
    calendarData.push({
      day: i,
      lunarInfo: {
        lunarDay: lunarDate.lunarDayName,
        lunarMonth: lunarDate.lunarMonthName,
        lunarYear: lunarDate.lunarYear,
        GanZhiYear: lunarDate.GanZhiYear,
        GanZhiMonth: lunarDate.GanZhiMonth,
        GanZhiDay: lunarDate.GanZhiDay
      },
      festival: getLunarFestival(month, i),
    });
  }

  // 添加下个月的日期
  for (let i = 1; i <= nextMonthDays; i++) {
    
    const lunarDate = LunarCalendar.solarToLunar(nextMonthYear, nextMonth, i);
    calendarData.push({
      day: i,
      lunarInfo: {
        lunarDay: lunarDate.lunarDayName,
        lunarMonth: lunarDate.lunarMonthName,
        lunarYear: lunarDate.lunarYear,
        GanZhiYear: lunarDate.GanZhiYear,
        GanZhiMonth: lunarDate.GanZhiMonth,
        GanZhiDay: lunarDate.GanZhiDay
      },
      festival: getLunarFestival(nextMonth, i),
      className: 'next-month',
    });
  }

  return calendarData;
};

const getLunarFestival = (Month:any, Day:any) => {
  const key = `${Month}-${Day}`;
  return lunarFestivals[key] || [];
};

const Calendar = ({ year, month }) => {
  const [calendarData, setCalendarData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setCalendarData(generateCalendarData(year, month));
  }, [year, month]);

  return (
    <div className="calendar">
      <table>
        <thead>
          <tr>
            <th>日</th>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th>六</th>
          </tr>
        </thead>
        <tbody>
          {generateRows(calendarData).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((dayData:any, cellIndex:any) => (
                <td
                  key={cellIndex}
                  className={`${dayData.className} ${isSameDate(currentDate, year, month, dayData.day) && 'current-date'}`}
                >
                  <div>{dayData.day}</div>
                  <div className="lunar-day">{`${dayData.lunarInfo.lunarMonth}${dayData.lunarInfo.lunarDay}`}</div>
                  <div className="lunar-day">{`${dayData.lunarInfo.GanZhiYear}${dayData.lunarInfo.GanZhiMonth}${dayData.lunarInfo.GanZhiDay}`}</div>
                  <div className="festival">{
                    dayData.festival['fast']?.map((item:any,index:any)=>{
                      return <p>{item}</p>
                    })
                  }
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className='car'>
        <div className='carH'>
          <h3>营销模板直通车</h3>
        </div>
        <div className='carBox'>
          {
            carList.map((item:any,index:any)=>{
              return <div className='boxCon'>
                <div className='headBox'>
                  <span>{item.dayName}</span>
                  <span>{`剩${item.carDay}天`}</span>
                </div>
                <div className='mainBox'>
                  {
                    item.data.map(key=>{
                      return <p>{key}</p>
                    })
                  }
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  );
};

//生成行数据
const generateRows = (data:any) => {
  const rows = [];
  for (let i = 0; i < data.length; i += 7) {
    rows.push(data.slice(i, i + 7));
  }
  return rows;
};

//判断是否为同一天
const isSameDate = (date1:any, year:any, month:any, day:any) => {
  const targetDate = new Date(Date.UTC(year, month - 1, day));
  return date1.toISOString().split('T')[0] === targetDate.toISOString().split('T')[0];
};

export default Calendar;
