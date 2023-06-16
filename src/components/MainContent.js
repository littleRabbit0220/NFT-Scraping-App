import classnames from "classnames";
import MenuModal from "./MenuModal";

const MainContent = ({modalVisible}) => {
  return (
    <main>
      <div>
        <div className={classnames("z-10 min-h-[995px] container mx-auto p-4",{"h-0": modalVisible})}>
          Main Content
        </div>
        {modalVisible && (<MenuModal/>)}
      </div>
    </main>
  )
    
}

export default MainContent;