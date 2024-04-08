import { useFetchData } from "../hooks/useFetchData"
import { ConocimientosItems } from "./ConocimientosItems"

export const Conocimientos = () => {

    // const url = './src/data/data.json'
    const url = '/data.json'
    const data = useFetchData(url)

    return (
        <>
            <header id="knowledge" className="font-bold text-xl">Conocimientos</header>
            <div className="mt-4">
                <ConocimientosItems data={data} />
            </div>

        </>
    )
}
