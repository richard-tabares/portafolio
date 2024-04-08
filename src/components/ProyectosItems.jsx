
export const ProyectosItems = ({data}) => {

    const elements = data.map(project => {

        return (

            project.projects.map(itemProject => {
                const items =
                <div className="lightProject border border-thirdLight p-6 dark:darkProject" key={itemProject.id}>
                    <header className="font-bold text-xl">{itemProject.title}</header>
                    <article className="mt-4">{itemProject.description}</article>
                    <footer className="mt-8">
                        {
                            itemProject.technologies.map(tech => {
                                const techItems =
                                <span className="lightProjectTech dark:darkProjectTech px-4 py-2 rounded-3xl mr-2" key={tech.id}>{tech.tech}</span>
                                return techItems
                            })
                        }
                        <a href={`# ${project.link} `} className="block underline font-bold mt-10 lightProjectLink text-md dark:darkProjectLink">Visitar</a>
                    </footer>
    
                    </div>
                
                return items

            })

        )
    })
    
    return elements
}
