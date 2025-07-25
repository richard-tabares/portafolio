import { useEffect, useState } from "react"
import { ExperienciaItems } from "./ExperienciaItems"
import { getExperience } from "../services/usersData"
import { motion } from "motion/react"
import { ExperienciaSkeleton } from "./skeleton/ExperienciaSkeleton"

export const Experiencia = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getData = async () => {
            const data = await getExperience(1)
            setData(data)
            setLoading(false)
        }

        getData()
    }, [])

    const ExperienciaSection = () => (

        <motion.section
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}>
            <header id="experience" className="font-bold text-xl">Experiencia</header>
            <section className="border-l-4 border-thirdLight/40 ">
                {
                    <ExperienciaItems data={data} />
                }
            </section>
        </motion.section>

    )

    return (

        <>
            {
                loading
                    ? <ExperienciaSkeleton />
                    : <ExperienciaSection />
            }
        </>
    )
}
