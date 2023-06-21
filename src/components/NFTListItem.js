import { AppContext } from "@/context/ContextProvider";
import Link from "next/link";
import { useContext } from "react";
import classnames from 'classnames';

const NFTListItem = ({item}) => {
  const { state } = useContext(AppContext);
  return (
    <div className={classnames("p-3 rounded-xl md:h-[400px] sm:h-[330px] shadow hover:transform hover:translate-y-2 transition ease-in-out delay-150 hover:shadow-inner hover:shadow-slate-500",{"bg-white":!state.viewMode,"bg-slate-700":state.viewMode})}>
      <Link href={item.url?item.url:""} className="w-full h-full inline-block">
        <div className="flex flex-col justify-between w-full h-full">
          <div className="w-full">
            <img 
            src={item.img} 
            alt="nft image" 
            className=" object-cover w-full  rounded-xl" 
            />
          </div>
          <div className="w-full">
            <h3 className="text-center p-2 ">
              {item.name}
            </h3>
            <div>
              <div className="flex flex-row justify-between px-3">
                <span className={classnames("px-3 bg-slate-900 rounded-xl",{'text-white bg-slate-500':!state.viewMode})}>{item.crypto}</span>
                <span>{item.date}</span>
              </div>
              <div className="flex flex-row justify-between px-3">
                <span>website<i className="fa fa-globe ml-2"></i></span>
                <span>{item.timezone}</span>
              </div>
              <div className="flex flex-row justify-between px-3">
                <Link href={item.twitter}>
                <span>twitter<i className="fa fa-twitter ml-2 text-sky-400"></i></span>
                </Link>
                <span>{item.value}</span>
              </div>
              <div className="flex flex-row justify-between px-3">
                <Link href={item.discord?item.discord:''}>
                <span>discord<i className="fa fa-reddit-alien ml-2 text-blue-600"></i></span>
                </Link>
                <span>{item.amount}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default NFTListItem;