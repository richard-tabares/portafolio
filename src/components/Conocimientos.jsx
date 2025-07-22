import { ConocimientosItems } from "./ConocimientosItems"
import { getKnowlegedByUser } from "../services/usersData"
import { useEffect, useState } from "react"
import { ConocimientosSkeleton } from "./skeleton/ConocimientosSkeleton"
import { motion } from "motion/react"

export const Conocimientos = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getData = async () => {
            const data = await getKnowlegedByUser(1)
            setData(data)
            setLoading(false)
        }
        getData()
    }, [])

    const ConocimientosSection = () => (

        <motion.section
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}>

            <header id="knowledge" className="font-bold text-xl static">Conocimientos</header>
            <div className="mt-4">
                <ConocimientosItems data={data} />
            </div>

        </motion.section>

    )

    return (
        <>
            {
                loading
                    ? <ConocimientosSkeleton />
                    : <ConocimientosSection />
            }
        </>


    )
}
