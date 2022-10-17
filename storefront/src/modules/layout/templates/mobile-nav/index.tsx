import { useMobileMenu } from "@lib/context/mobile-menu-context"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import Link from "next/link"

const MobileNav = () => {
  const { toggle } = useMobileMenu()

  return (
    <div className="group small:hidden">
      <header className="relative h-16 px-8 mx-auto transition-colors bg-pink border-b border-transparent duration-200 text-white">
        <nav className="flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200">
          <div className="flex-1 pt-2 basis-0 h-full flex items-center">
            <Link href="/">
              <a className="h-full">
                <img src="/logo.png" className="h-full" />
              </a>
            </Link>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
              {/* <Link href="/account">
                <a>Account</a>
              </Link> */}
            </div>
            <CartDropdown />
          </div>
          <div className="block small:hidden">
            <Hamburger setOpen={toggle} />
          </div>
        </nav>
        <MobileMenu />
      </header>
    </div>
  )
}

export default MobileNav
