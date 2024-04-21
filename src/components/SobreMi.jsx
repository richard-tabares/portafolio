import { useFetchData } from "../hooks/useFetchData"

export const SobreMi = ({jsonData}) => {

    const url = jsonData
    const data = useFetchData(url)

    return (
        <>
            <header id="aboutMe" className="font-bold text-xl">Sobre Mi</header>
            <article className="mt-4 whitespace-break-spaces">
                {

                    data.map(info => {
                        return info.aboutMe
                    })

                }

            </article>
        </>
    )
}
