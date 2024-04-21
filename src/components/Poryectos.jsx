import { useFetchData } from "../hooks/useFetchData"
import { ProyectosItems } from "./ProyectosItems"

export const Poryectos = ({jsonData}) => {

    const url = jsonData
    const data = useFetchData(url)

    return (
        <>
            <header id="projects" className="font-bold text-xl transition-all">Proyetos</header>
            <section className="grid 2xl:grid-cols-2 grid-cols-1 gap-5 mt-8">

                <ProyectosItems data={data} />

            </section>

        </>
    )
}
