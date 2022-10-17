import Footer from "@modules/layout/templates/footer"
import MobileNav from "@modules/layout/templates/mobile-nav"
import Nav from "@modules/layout/templates/nav"
import React from "react"

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex">
      <Nav />
      <div className="h-screen flex grow flex-col overflow-auto">
        <MobileNav />
        <main className="relative">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
