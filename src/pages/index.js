import Image from "next/image"
import Link from "next/link"
export default function Home() {
  return (
    <>
      <header>
        <div className="">
          <div className="container flex flex-row mx-auto items-center justify-between py-2">
            <Link href="" className="flex flex-row items-center text-3xl">
              <div>
                <Image src="/assets/images/favicon.png" alt="log image" width={70} height={70}/>
              </div>
              <div className="ml-2">
                NFT SCRAPING
              </div>
            </Link>
            <nav>
              <ul className="flex flex-row">
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
                <li className="p-2">
                  <button type="button" className=""></button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        
      </main>
    </>
  )
}
