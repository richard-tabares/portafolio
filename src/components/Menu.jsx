import { useState } from "react"
import { FiAlignRight, FiMoon, FiSun, FiX } from "react-icons/fi"
import { MenuItems } from "./MenuItems"
import { useFetchData } from "../hooks/useFetchData"

export const Menu = ({jsonMenu}) => {

    const urlMenu = jsonMenu
    const menuItems = useFetchData(urlMenu)

    const [isActiveDarkMode, setIsActiveDarkMode] = useState(false)
    const [isMobileActive, setIsMobileActive] = useState(false)

    const darkMode = [
        'dark',
        'bg-primaryDark'
    ]

    const isDark = () => {

        setIsActiveDarkMode(!isActiveDarkMode)

        !isActiveDarkMode
            ? document.body.classList.add(...darkMode)
            : document.body.classList.remove(...darkMode)

    }

    const isMobile = () => {

        setIsMobileActive(!isMobileActive)
    }

    return (

        <>
            <nav className="container flex items-center justify-between py-4 bg-primaryLight dark:bg-primaryDark w-full md:w-2/4 px-4 sticky top-0 z-10 opacity-[0.96]" id="#home">
                <div className="flex gap-4 items-center">
                    <div className="xl:w-14 xl:h-14 rounded-full bg-gray-200 w-10 h-10"></div>
                    <div>
                        <a href="#home">
                            <div className="font-bold text-xl dark:text-gray-50 block">Richard Tabares</div>
                        </a>
                        <div className={`xl:relative xl:mt-0 xl:inline fixed left-0 top-0 text-right w-full h-screen p-4 xl:p-0 lightMobileBackground dark:darkMobileBackground ${isMobileActive ? 'block' : 'hidden'}`}>
                            <a href="#" onClick={isMobile}>
                                <FiX className={`xl:hidden text-2xl lightIcons dark:darkIcons inline ${isMobileActive ? 'block' : 'hidden'}`} />
                            </a>
                            {
                                <MenuItems menuItems={menuItems} isMobileActive={isMobileActive} setIsMobileActive={setIsMobileActive} />
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <a href="#" className="pr-3" onClick={isDark}>
                        <FiMoon
                            className={`${isActiveDarkMode ? 'block' : 'hidden'} text-2xl lightIcons dark:darkIcons inline`}
                        />
                        <FiSun
                            className={`${isActiveDarkMode ? 'hidden' : 'block'} text-2xl lightIcons dark:darkIcons inline`}
                        />
                    </a>
                    <a
                        href="#"
                        className="pr-3"
                        onClick={isMobile}>
                        <FiAlignRight
                            className={`xl:hidden text-2xl lightIcons dark:darkIcons inline ${isMobileActive ? 'hidden' : 'block'}`} />
                    </a>
                </div>
            </nav>

        </>
    )
}
