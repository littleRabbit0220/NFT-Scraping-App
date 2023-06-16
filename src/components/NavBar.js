import Link from "next/link";

const NavBar = ({classNames}) => {
  return (
    <ul className={classNames}>
      <li className="p-2">
        <Link href="/collections" className="transition ease-in-out delay-150 border-b-4 border-slate-100 hover:border-blue-500">
          Collections
        </Link>
      </li>
      <li className="p-2">
        <Link href="/news" className="transition ease-in-out delay-150 border-b-4 border-slate-100 hover:border-blue-500">
          News
        </Link>
      </li>
      <li className="p-2">
        <Link href="/contact" className="transition ease-in-out delay-150 border-b-4 border-slate-100 hover:border-blue-500">
          Contact Us
        </Link>
      </li>
      <li className="p-2">
        <Link href="/about" className="transition ease-in-out delay-150 border-b-4 border-slate-100 hover:border-blue-500">
          About Us
        </Link>
      </li>
    </ul>
  )
}

export default NavBar;