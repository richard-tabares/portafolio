import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi"
import { getUser } from "../services/usersData"
import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { HomeSkeleton } from "./skeleton/HomeSkeleton"
// import CV from '../assets/Richard_Tabares_VC.pdf'


export const Home = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getData = async () => {
            const data = await getUser(1)
            setData(data)
            setLoading(false)
        }

        getData()
    }, [])

    const HomeSection = () => (


        <motion.section
            className="mt-10 grid grid-cols-1"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}>
            <div className="grid grid-cols-1 place-items-center">
                <div className="rounded-full bg-gray-200 w-32 h-32 bg-cover bg-[url(./avatar1.png)]"></div>
            </div>
            <article className="mt-8 whitespace-pre-line">
                {
                    data.map(info => {

                        return info.summary.toString()

                    })
                }
            </article>
            <footer className="mt-4">
                <div className="inline"><strong>Encuentrame en </strong></div>
                <a href="https://github.com/richard-tabares" target="_blank" aria-label="GitHub"><FiGithub className="hover:text-gray-400 mx-3 inline" /></a>
                <a href="https://www.linkedin.com/in/richard-tabares/" target="_blank" aria-label="Linkedin"><FiLinkedin className="hover:text-gray-400 mx-3 inline" /></a>
                {/* <a href="https://www.instagram.com/richardtabaresb" target="_blank"><FiInstagram className="hover:text-gray-400 mx-3 inline" /></a> */}
                <a href="mailto:richardtabaresb@gmail.com" aria-label="mail"><FiMail className="hover:text-gray-400 mx-3 inline" /></a>
                <a href="./Richard_Tabares_CV.pdf" target="_blank">
                    <button type="button" className="block mt-4 btn-primary dark:darkButton">
                        <strong>Descarga CV</strong>
                    </button>
                </a>
            </footer>
        </motion.section>

    )
        


    return (
        <>
            {
                loading
                    ? <HomeSkeleton />
                    : <HomeSection />
            }
        </>
    )
}
