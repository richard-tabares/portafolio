import { motion } from "motion/react"
export const Footer = () => {
    return (
        <>
            <motion.footer
                className="mt-14 pb-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}>
                <div>Creado con React | Tailwind | Motion | Supabase - Copyright © 2025 Richard Tabares</div>
            </motion.footer>
        </>
    )
}
