import { useFetchData } from "../hooks/useFetchData"
import { ExperienciaItems } from "./ExperienciaItems"

export const Experiencia = () => {

    // const url = './src/data/data.json'
    const url = '/data.json'
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
