import classnames from 'classnames';
import { AppContext } from "@/context/ContextProvider";
import { useContext } from "react";

const Navigation = () => {
  const { state } = useContext(AppContext);
  return (
    <div className={classnames("flex flex-row justify-center items-center p-5", {"text-white":state.viewMode})}>
      <div className="text-4xl cursor-pointer mr-5 hover:text-blue-500"><i className="fa fa-angle-left"></i></div>
      <div className="flex flex-row text-3xl itemx-center">
        <input type="text" className={classnames("w-[50px] mr-3 border-2 rounded-xl focus:outline-none focus:border-blue-700 focus:shadow-outline",{"bg-slate-500": state.viewMode})} value={1}></input>
        <h3> of 10 pages</h3>
      </div>
      <div className="text-4xl cursor-pointer ml-5 hover:text-blue-500"><i className="fa fa-angle-right"></i></div>
    </div>
  )
}

export default Navigation;