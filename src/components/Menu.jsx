import { useState } from "react"
import { FiAlignRight, FiMoon, FiSun, FiX } from "react-icons/fi"
import { MenuItems } from "./MenuItems"
import { useFetchData } from "../hooks/useFetchData"

export const Menu = () => {

    // const urlMenu = './src/data/menu.json'
    const urlMenu = '/menu.json'
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
            <nav className="flex items-center justify-between" id="#home">
                <div className="flex gap-4 items-center">
                    <div className="xl:w-14 xl:h-14 rounded-full bg-gray-200 w-10 h-10"></div>
                    <div>
                        <a href="#home">
                            <div className="font-bold text-xl dark:text-gray-50 block">Richard Tabares</div>
                        </a>
                        <div className={`xl:relative xl:text-left xl:w-full xl:mt-0 xl:inline absolute left-0 top-0 text-right w-screen h-screen lightMobileBackground dark:darkMobileBackground ${isMobileActive ? 'block' : 'hidden'}`}>
                            <a href="#home" onClick={isMobile}>
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
