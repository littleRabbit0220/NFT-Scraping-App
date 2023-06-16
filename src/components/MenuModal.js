import NavBarSmall from "./NavBarSmall";


const MenuModal = () => {
  return (
    <div className="fixed z-30 h-full w-full bg-slate-200 top-0 pt-40 sm:hidden">
      <NavBarSmall/>
    </div>
  )
}

export default MenuModal;