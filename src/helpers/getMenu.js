
export const getMenu = async () => {
    const url = './public/menu.json'
    const response = await fetch(url)
    const jsonData = await response.json()

    return jsonData
}
