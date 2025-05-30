import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi"
import { useFetchData } from "../hooks/useFetchData"
// import CV from '../assets/Richard_Tabares_VC.pdf'


export const Home = ({jsonData}) => {

    const url = jsonData
    const data = useFetchData(url)

    return (
        <>
            <section id="" className="mt-10 grid grid-cols-1">
                <div className="grid grid-cols-1 place-items-center">
                    <div className="rounded-full bg-gray-200 w-32 h-32"></div>
                </div>
                <article className="mt-8 whitespace-break-spaces">
                    {
                        data.map(info => {

                            return info.intro

                        })
                    }
                </article>
                <footer className="mt-4">
                    <div className="inline"><strong>Encuentrame en </strong></div>
                    <a href="https://github.com/richard-tabares" target="_blank"><FiGithub className="hover:text-gray-400 mx-3 inline" /></a>
                    <a href="https://www.linkedin.com/in/richard-tabares/" target="_blank"><FiLinkedin className="hover:text-gray-400 mx-3 inline" /></a>
                    {/* <a href="https://www.instagram.com/richardtabaresb" target="_blank"><FiInstagram className="hover:text-gray-400 mx-3 inline" /></a> */}
                    <a href="mailto:richardtabaresb@gmail.com"><FiMail className="hover:text-gray-400 mx-3 inline" /></a>
                    <a href="./Richard_Tabares_CV.pdf" target="_blank">
                        <button type="button" className="block mt-4 btn-primary dark:darkButton">
                            <strong>Descarga CV</strong>
                        </button>
                    </a>
                </footer>
            </section>
        </>
    )
}
