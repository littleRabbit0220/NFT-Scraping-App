import Calendar from "react-calendar";
import classnames from 'classnames';
import moment from "moment/moment";
import { useContext } from "react";
import { AppContext } from "@/context/ContextProvider";

const DatePicker = ({calendarVisible, setCalendarVisible, currentDate, setCurrentDate}) => {
  const {state} = useContext(AppContext);
  return (
    <div className=" z-20 overflow-visible">
      <input 
        type="text" 
        className={classnames("relative focus:outline-blue-500 mb-1 text-xl p-2 rounded w-full sm: mb-5",{"bg-slate-700":state.viewMode})} 
        value={"Drop Date: " + moment(currentDate).format('YYYY-MM-DD')}
        onClick={() => setCalendarVisible(true)}  
      />
      <Calendar 
        className={
          classnames("absolute shadow-md shadow-slate-500 rounded-2xl border border-white transition -z-10 delay-150",
            {"opacity-0":!calendarVisible,"opacity-1":calendarVisible,"bg-slate-700":state.viewMode}
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