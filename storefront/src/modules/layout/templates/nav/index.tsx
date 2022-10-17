import { useMobileMenu } from "@lib/context/mobile-menu-context"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { useCart } from "medusa-react"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"
import { useCollections } from "medusa-react"

const Nav = () => {
  const { asPath } = useRouter()
  const { totalItems } = useCart()
  const { collections } = useCollections()

  return (
    <div className="hidden small:flex w-[360px] h-screen bg-pink text-white p-8 flex-col">
      {/* Shopping Bag */}
      <div className="flex justify-end">
        <Link href="/cart" passHref>
          <ShoppingBagIcon
            className="h-6 w-6"
            title={`My Bag (${totalItems})`}
          ></ShoppingBagIcon>
        </Link>
      </div>

      {/* Logo */}
      <div className="flex my-8">
        <Link href="/">
          <a className="h-full">
            <img src="/logo.png" />
          </a>
        </Link>
      </div>

      {/* Collections */}
      <div className="flex font-medium text-lg">
        <ul>
          <li key="home" className="py-1">
            <Link href="/">
              <a
                className={clsx({
                  underline: "/" === asPath,
                })}
              >
                Home
              </a>
            </Link>
          </li>
          {collections?.map((c) => (
            <li key={c.handle} className="py-1">
              <Link href={`/collections/${c.handle}`}>
                <a
                  className={clsx({
                    underline: `/collections/${c.handle}` === asPath,
                  })}
                >
                  {c.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Back to Appwrite */}
      <div className="text-sm pt-8">
        <Link href="https://appwrite.io/">
          <a>Back to appwrite.io</a>
        </Link>
      </div>
    </div>
  )
}

export default Nav
