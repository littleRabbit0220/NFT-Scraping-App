import Calendar from "react-calendar";
import classnames from 'classnames';
import moment from "moment/moment";

const DatePicker = ({calendarVisible, setCalendarVisible, currentDate, setCurrentDate}) => {
  return (
    <div className=" z-20 overflow-visible">
      <input 
        type="text" 
        className="relative focus:outline-blue-500 mb-1 text-xl p-2 rounded" 
        value={"Drop Date: " + moment(currentDate).format('YYYY-MM-DD')}
        onClick={() => setCalendarVisible(true)}  
      />
      <Calendar 
        className={
          classnames("absolute shadow-md shadow-slate-500 rounded-2xl border border-white transition  delay-150",
            {"opacity-0":!calendarVisible,"opacity-1":calendarVisible}
          )
        }
        onChange={(value, event) => {
          setCurrentDate(value);
          setCalendarVisible(false);
        }}
      />
    </div>
  )
}

export default DatePicker;