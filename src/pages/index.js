import Image from "next/image"
import Link from "next/link"
import MainContent from "@/components/MainContent"
import MenuModal from "@/components/MenuModal"

export default function Home() {
  return (
    <>
      <header className="sticky z-10">
        <div className="p-2">
          <div className="container flex flex-row mx-auto items-center justify-between p-2">
            <Link href="" className="flex flex-row items-center text-3xl">
              <div>
                <Image src="/assets/images/favicon.png" alt="log image" width={70} height={70}/>
              </div>
              <div className="ml-2">
                NFT SCRAPING
              </div>
            </Link>
            <nav className="text-xl">
              <div>
                <ul className="flex flex-row items-center hidden sm:flex">
                  <li className="p-2">
                    <Link href="/collections">
                      Collections
                    </Link>
                  </li>
                  <li className="p-2">
                    <Link href="/news">
                      News
                    </Link>
                  </li>
                  <li className="p-2">
                    <Link href="/contact">
                      Contact Us
                    </Link>
                  </li>
                  <li className="p-2">
                    <Link href="/about">
                      About Us
                    </Link>
                  </li>
                </ul>
                <div className="p-2 sm:hidden">
                  <button type="button" className=""><i className="fa fa-bars"/></button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <MainContent/>
      </main>
      <MenuModal/>
    </>
  )
}
