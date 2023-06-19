import { AppContext } from "@/context/ContextProvider";
import Link from "next/link";
import { useContext } from "react";
import classnames from 'classnames';

const NFTListItem = ({item}) => {
  const { state } = useContext(AppContext);
  return (
    <div className={classnames("p-3 rounded-xl shadow hover:transform hover:translate-y-2 transition ease-in-out delay-150 hover:shadow-inner hover:shadow-slate-500",{"bg-white":!state.viewMode,"bg-slate-700":state.viewMode})}>
      <Link href={""}>
        <img 
          src={"/assets/images/"+item.image_url} 
          alt="nft image" 
          className=" object-cover w-full h-[200px] rounded-xl" 
        />
        <h3 className="text-xl text-center p-2">
        {item.name}
        </h3>
        <h3 className="text-xl text-center p-2">
          price: {item.price}Eth
        </h3>
      </Link>
    </div>
  )
}

export default NFTListItem;