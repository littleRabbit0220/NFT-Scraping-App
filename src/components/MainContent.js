import classnames from "classnames";
const MainContent = ({modalVisible}) => {
  return (
    <div className={classnames("z-10 h-screen container mx-auto p-4",{"h-0": modalVisible})}>
        Main Content
    </div>
  )
}

export default MainContent;