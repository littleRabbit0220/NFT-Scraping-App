import classnames from 'classnames';
import { AppContext } from "@/context/ContextProvider";
import { useContext } from "react";

const Navigation = () => {
  const { state, setCurrentPage } = useContext(AppContext);
  return (
    <div className={classnames("flex flex-row justify-center items-center p-5", {"text-white":state.viewMode})}>
      <div className="text-4xl cursor-pointer mr-5 hover:text-blue-500"><i className="fa fa-angle-left" onClick={()=>{state.currentPage>1?setCurrentPage(state.currentPage-1):(null)} }></i></div>
      <div className="flex flex-row text-3xl items-center">
        <input type="text" className={classnames("w-[50px] mr-3 border-2 rounded-xl focus:outline-none focus:border-blue-700 focus:shadow-outline p-2",{"bg-slate-500": state.viewMode})} value={state.currentPage} onChange={(e) => {
          if(parseInt(e.target.value)>0 && parseInt(e.target.value)<= state.numberOfPage) {
            setCurrentPage(parseInt(e.target.value))
          }
        }}></input>
        <h3 className='m-0 p-0'> of {state.numberOfPage} pages</h3>
      </div>
      <div className="text-4xl cursor-pointer ml-5 hover:text-blue-500"><i className="fa fa-angle-right" onClick={()=>{state.currentPage<state.numberOfPage?setCurrentPage(state.currentPage+1):(null)}}></i></div>
    </div>
  )
}

export default Navigation;