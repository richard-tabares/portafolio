import { useFetchData } from "../hooks/useFetchData"
import { ExperienciaItems } from "./ExperienciaItems"

export const Experiencia = ({jsonData}) => {

    const url = jsonData
    const data = useFetchData(url)

    return (
        <>
            <header id="experience" className="font-bold text-xl">Experiencia</header>
            <section className="border-l-4 border-thirdLight/40 ">
                {
                    <ExperienciaItems data={data} />
                }



            </section>
        </>
    )
}
