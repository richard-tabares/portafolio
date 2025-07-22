import { motion } from "motion/react"
export const Separador = () => {
    return (
        <motion.section
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}>
            <div className="grid grid-cols-1 place-items-center">
                <div className="lightSeparators dark:darkSeparators"></div>
            </div>
        </motion.section>
    )
}
