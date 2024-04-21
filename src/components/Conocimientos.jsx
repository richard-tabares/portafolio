import { useFetchData } from "../hooks/useFetchData"
import { ConocimientosItems } from "./ConocimientosItems"

export const Conocimientos = ({jsonData}) => {

    const url = jsonData
    const data = useFetchData(url)

    return (
        <>

            <header id="knowledge" className="font-bold text-xl static">Conocimientos</header>
            <div className="mt-4">
                <ConocimientosItems data={data} />
            </div>

        </>
    )
}
