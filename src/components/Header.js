import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import classnames from 'classnames';
import NavBar from "./NavBar";
import { AppContext } from "@/context/ContextProvider";

const Header = ({modalVisible, setModalVisible}) => {
  const {state, setState} = useContext(AppContext);

  return (
    <header>
      <div className={classnames("p-2 sticky z-50 bg-slate-100", {"bg-slate-700 text-white":state.viewMode})}>
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
            <div className="flex flex-row items-center">
              <button type="button" className="mr-3" onClick={() => setState({...state,viewMode:!state.viewMode})}>{!state.viewMode?(<i className="fa fa-moon-o"/>):(<i className="fa fa-sun-o"/>)}</button>
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