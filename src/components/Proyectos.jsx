import { useEffect, useState } from "react"
import { ProyectosItems } from "./ProyectosItems"
import { getProjects } from "../services/usersData"
import { motion } from "motion/react"
import { ProyectosSkeleton } from "./skeleton/ProyectosSkeleton"

export const Proyectos = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getData = async () => {
            const data = await getProjects(1)
            setData(data)
            setLoading(false)
        }

        getData()
    }, [])

    const ProyerctosSection = () => (

        <motion.section
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}>
            <header id="projects" className="font-bold text-xl transition-all">Proyetos</header>
            <section className="grid 2xl:grid-cols-2 grid-cols-1 gap-5 mt-8">

                <ProyectosItems data={data} />

            </section>

        </motion.section>

    )

    return (
        <>
            {
                loading
                    ? <ProyectosSkeleton />
                    : <ProyerctosSection />
            }
        </>

    )
}
