
export const MenuItems = ({ menuItems, isMobileActive, setIsMobileActive }) => {

    return (
        menuItems.map(item => {

            const items =
                <a
                    key={item.id}
                    href={item.href}
                    className="xl:inline block pr-4 py-1 lightTextMenu hover:underline darkTextMenu"
                    onClick={() => setIsMobileActive(!isMobileActive)}
                >
                    {item.menu}
                </a>
            return items

        })

    )
}
