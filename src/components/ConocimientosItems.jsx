
export const ConocimientosItems = ({ data }) => {
    
    const elements = data.map(info => {
        return (
            <button className="btn-primary mx-3 my-2 dark:darkButton" key={info.knowledge.id_knowledge}>{info.knowledge.knowledge}</button>
        )

    })
    
  return elements
}
