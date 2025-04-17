
export const ExperienciaItems = ({data}) => {

    const elements = data.map(exp => {

        return (            
            
            exp.experience.map(expItem => {

                const items =
                    <section className="mt-10" key={expItem.id}>
                        <div className=" -ml-5 w-9 h-9 bg-thirdLight rounded-full"></div>
                        <div className=" h-1 w-1/2 border-t-2 border-dashed -mt-5 border-thirdLight"></div>
                        <section className="mt-8 ml-6">
                            <header className="font-bold text-2xl">
                                {expItem.position}
                            </header>
                            <header className="font-bold text-xl text-secondaryLight dark:text-gray-200 mt-4">
                                {expItem.companyYear}
                            </header>
                            <article className="mt-4 whitespace-break-spaces">
                                {expItem.description}
                            </article>
                        </section>
                    </section>
                
                return items

            })
        )

    })

    return elements
}
