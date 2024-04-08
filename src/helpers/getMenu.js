
export const getMenu = async (url) => {
    const response = await fetch(url)
    const jsonData = await response.json()

    return jsonData
}
