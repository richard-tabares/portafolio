
export const ConocimientosItems = ({data}) => {

    const elements = data.map(info => {
        return (

            info.knowledge.map(item => {

                const items = <button className="btn-primary mx-3 my-2 dark:darkButton" key={item.id}>{item.title}</button>
                return items

            })
        )

    })
    
  return elements
}
