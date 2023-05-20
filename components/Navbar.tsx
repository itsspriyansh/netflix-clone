import React, { useCallback, useEffect, useState } from 'react'
import NavbarItem from './NavbarItem'
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs"
import MobileMenu from './MobileMenu'
import AccountMenu from './AccountMenu'

const Navbar = () => {

    const SCROLL_OFFSET = 66

    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showAccountMenu, setShowAccountMenu] = useState(false)
    const [showBackground, setShowBackground] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > SCROLL_OFFSET) {
                setShowBackground(true)
            } else {
                setShowBackground(false)
            }
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu(prev => !prev)
    }, [])

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu(prev => !prev)
    }, [])

  return (
    <nav className="w-full fixed z-40">
      <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
        <img src="/images/logo.png" className="h-10 lg:h-14" alt="Logo" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
            <NavbarItem label={"Home"} />
            <NavbarItem label={"Series"} />
            <NavbarItem label={"Films"} />
            <NavbarItem label={"New & Popular"} />
            <NavbarItem label={"My List"} />
            <NavbarItem label={"Browse by language"} />
        </div>
        <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown className={`text-white transition ${showMobileMenu ? "rotate-180" : "rotate-0"}`} />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>
          <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full overflow-hidden">
              <img src="/images/user.jpg" alt="" />
            </div>
            <BsChevronDown className={`text-white transition ${showAccountMenu ? "rotate-180" : "rotate-0"}`} />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
