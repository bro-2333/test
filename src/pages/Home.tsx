import React,{useState} from 'react'
import Calendar from "../components/Calendar"

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleMonthChange = (change:any) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(selectedDate.getMonth() + change);
    setSelectedDate(newDate);
  };
  return (
    <div>
      <div>
        <button onClick={() => handleMonthChange(-1)}>上个月</button>
        <span style={{fontSize:'20px'}}>{`${selectedDate.getFullYear()}年${selectedDate.getMonth() + 1}月`}</span>
        <button onClick={() => handleMonthChange(1)}>下个月</button>
      </div>
      <Calendar year={selectedDate.getFullYear()} month={selectedDate.getMonth() + 1} />
       {/* <Footer></Footer> */}
      {/* <Master></Master> */}
    </div>
  )
}

export default Home
