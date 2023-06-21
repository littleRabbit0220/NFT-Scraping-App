import { AppContext } from "@/context/ContextProvider";
import Link from "next/link";
import { useContext } from "react";
import classnames from 'classnames';

const NFTListItem = ({item}) => {
  const { state } = useContext(AppContext);
  return (
    <div className={classnames("p-3 rounded-xl md:h-[400px] sm:h-[330px] shadow hover:transform hover:translate-y-2 transition ease-in-out delay-150 hover:shadow-inner hover:shadow-slate-500",{"bg-white":!state.viewMode,"bg-slate-700":state.viewMode})}>
      <Link href={item.url?item.url:""} className="h-full inline-block">
        <img 
          src={"https://raritysniper.com/"+item.img} 
          alt="nft image" 
          className=" object-cover w-full  rounded-xl" 
        />
        <h3 className="text-xl text-center p-2  sm:h-[200px] h-[150px]">
        {item.name}
        </h3>
      </Link>
    </div>
  )
}

export default NFTListItem;