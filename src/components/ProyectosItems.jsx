
export const ProyectosItems = ({data}) => {

    const elements = data.map(project => {

        return (

            project.projects.map(itemProject => {
                const items =
                <div className="lightProject border border-thirdLight p-6 dark:darkProject" key={itemProject.id}>
                    <header className="font-bold text-xl">{itemProject.title}</header>
                    <article className="mt-4 whitespace-break-spaces">{itemProject.description}</article>
                    <footer className="mt-8">
                        {
                            itemProject.technologies.map(tech => {
                                const techItems =
                                <button className="lightProjectTech dark:darkProjectTech px-4 py-1 rounded-3xl mr-2 mb-3" key={tech.id}>{tech.tech}</button>
                                return techItems
                            })
                        }
                        <a href={itemProject.link} target="_blank" className="block underline font-bold mt-10 lightProjectLink text-md dark:darkProjectLink">Visitar</a>
                    </footer>
    
                    </div>
                
                return items

            })

        )
    })
    
    return elements
}
