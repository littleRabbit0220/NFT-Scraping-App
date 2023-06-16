import classnames from "classnames";
import MenuModal from "./MenuModal";
import NFTList from './NFTList';

const MainContent = ({modalVisible}) => {
  return (
    <main>
      <div>
        <div className={classnames("z-10 min-h-[995px] container mx-auto p-4",{"h-0": modalVisible})}>
          <div className="py-5">
            <h3 className="text-3xl py-2">Future NFTs</h3>
            <p className="text-2xl py-2">NFT Scraping App shows nfts that will appear in the future.</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="p-5 cursor-pointer hover:text-blue-500 hidden md:block"><i className="fa fa-arrow-circle-left" style={{fontSize:50}}></i></div>
            <NFTList/>
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