import Link from "next/link";

const NavBarSmall = () => {
  return (
    <ul className="flex flex-col text-2xl text-white ">
      <li className="p-4">
        <Link href="/collections" className="bg-blue-500 w-full inline-block rounded p-2 text-center hover:bg-blue-600">
          <i  class="fa fa-cubes mr-2"></i>Collections
        </Link>
      </li>
      <li className="p-4">
        <Link href="/news" className="bg-blue-500 w-full inline-block rounded p-2 text-center hover:bg-blue-600">
        <i class="fa fa-commenting-o mr-2" aria-hidden="true"></i>News
        </Link>
      </li>
      <li className="p-4">
        <Link href="/contact" className="bg-blue-500 w-full inline-block rounded p-2 text-center hover:bg-blue-600">
        <i class="fa fa-phone mr-2" aria-hidden="true"></i>Contact Us
        </Link>
      </li>
      <li className="p-4">
        <Link href="/about" className="bg-blue-500 w-full inline-block rounded p-2 text-center hover:bg-blue-600">
        <i class="fa fa-info-circle mr-2" aria-hidden="true"></i>About Us
        </Link>
      </li>
    </ul>
  )
}

export default NavBarSmall;