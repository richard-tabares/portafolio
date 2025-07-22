import { motion } from "motion/react"
export const ProyectosItems = ({ data }) => {

    return (

        data.map(project => {

            return (

                <motion.div
                    className="lightProject border border-thirdLight p-6 dark:darkProject"
                    key={project.id_projects}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                >
                    <header className="font-bold text-xl">{project.projects}</header>
                    <article className="mt-4 whitespace-break-spaces">{project.description}</article>
                    <footer className="mt-8">
                        {
                            project.knowledge_by_projects.map(knowledge => {
                                return (
                                    // const techItems =
                                    <button className="lightProjectTech dark:darkProjectTech px-4 py-1 rounded-3xl mr-2 mb-3" key={knowledge.id_knowledge_used}>{knowledge.knowledge.knowledge}</button>
                                    // return techItems
                                )
                            })
                        }
                        <a
                            href={project.link}
                            target="_blank"
                            className="block underline font-bold mt-10 lightProjectLink text-md dark:darkProjectLink"
                        >Visitar</a>
                    </footer>

                </motion.div>

            )
        })
    )

}
