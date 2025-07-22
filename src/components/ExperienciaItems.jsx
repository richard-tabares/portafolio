import { motion } from "motion/react"
export const ExperienciaItems = ({ data }) => {
    return (

        data.map(exp => (

            <motion.section
                className="mt-10"
                key={exp.id_experiences}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}>
                <div className=" -ml-5 w-9 h-9 bg-thirdLight rounded-full"></div>
                <div className=" h-1 w-1/2 border-t-2 border-dashed -mt-5 border-thirdLight"></div>
                <section className="mt-8 ml-6">
                    <header className="font-bold text-2xl">
                        {exp.position}
                    </header>
                    <header className="font-bold text-xl text-secondaryLight dark:text-gray-200 mt-4">
                        {exp.company} | {exp.year}
                    </header>
                    <article className="mt-4 whitespace-break-spaces">
                        {exp.description}
                    </article>
                </section>
            </motion.section>

        ))

    )

}
