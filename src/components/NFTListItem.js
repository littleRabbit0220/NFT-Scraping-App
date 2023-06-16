import Image from "next/image";
import Link from "next/link";

const NFTListItem = ({item}) => {
  return (
    <div className="bg-white p-3 rounded-xl shadow hover:transform hover:translate-y-2 transition ease-in-out delay-150 hover:shadow-inner hover:shadow-slate-500">
      <Link href={""}>
        <img 
          src={"/assets/images/"+item.image_url} 
          alt="nft image" 
          className=" object-cover w-full h-[200px]" 
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