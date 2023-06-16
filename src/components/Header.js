import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";

const Header = ({modalVisible, setModalVisible}) => {
  return (
    <header>
      <div className="p-2 sticky z-50 bg-slate-100">
        <div className="container flex flex-row mx-auto items-center justify-between p-2">
          <Link href="" className="flex flex-row items-center text-3xl">
            <div>
              <Image src="/assets/images/nft4.png " alt="log image" width={70} height={70} className="rounded-full"/>
            </div>
            <div className="ml-2">
              NFT SCRAPING
            </div>
          </Link>
          <nav className="text-xl">
            <div>
              <NavBar classNames={"flex flex-row items-center hidden sm:flex"}/>
              <div className="p-2 sm:hidden">
                <button type="button" className="" onClick={()=>setModalVisible(!modalVisible)}>
                  {modalVisible? (<i className="fa fa-close"/>):(<i className="fa fa-bars"/>)}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;