import classnames from "classnames";
import MenuModal from "./MenuModal";
import NFTList from './NFTList';
import Navigation from "./Navigation";
import Search from "./Search";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/ContextProvider";
import DatePicker from "./DatePicker";
import { getData } from "@/actions";

const MainContent = ({modalVisible}) => {
  const { state } = useContext(AppContext);
  const [ calendarVisible, setCalendarVislble ] = useState(false);
  const [ currentDate, setCurrentDate ] = useState(new Date(Date.now()));

  useEffect(() => {
    if(currentDate !== undefined && currentDate !== null) {
      getData(currentDate)
      .then(data => console.log(data))
      .catch(err => console.log(err));
    }
  }, [currentDate]);

  return (
    <main>
      <div className={classnames({"bg-slate-900 text-white": state.viewMode})}>
        <div className={classnames("z-10 min-h-[1015px] container mx-auto p-4",{"h-0": modalVisible})}>
          <div className="py-5">
            <h3 className="text-3xl py-2">Future NFTs</h3>
            <p className="text-2xl py-2">NFT Scraping App shows nfts that will appear in the future.</p>
          </div>
          <div className="p-2 flex flex-row justify-around mb-3">
            <DatePicker 
              calendarVisible={calendarVisible} 
              setCalendarVisible={(visible) => setCalendarVislble(visible)}
              currentDate={currentDate}
              setCurrentDate={(date)=>setCurrentDate(date)}/>
            <Search viewMode={state.viewMode}/>
          </div>  
          <div className="flex flex-row justify-between items-center">
            <div className="p-5 cursor-pointer hover:text-blue-500 hidden md:block"><i className="fa fa-arrow-circle-left" style={{fontSize:50}}></i></div>
            <NFTList
              currentDate={currentDate}
            />
            <div className="p-5 cursor-pointer hover:text-blue-500 hidden md:block"><i className="fa fa-arrow-circle-right" style={{fontSize:50}}></i></div>
          </div>
          <Navigation/>
        </div>
        {modalVisible && (<MenuModal/>)}
      </div>
    </main>
  )
    
}

export default MainContent;